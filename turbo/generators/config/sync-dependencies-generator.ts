const fs = require('fs');
const workspace = require('../../../workspace.config.js');

import { PlopTypes } from '@turbo/gen';
import * as child from 'child_process';

interface PackageConfigInterface {
  name: string;
  version: string;
  enforceOn: Array<string>;
}

interface PackageGroupConfigInterface {
  dependencies: Array<PackageConfigInterface>;
  devDependencies: Array<PackageConfigInterface>;
}

export const syncDependenciesGenerator = (plop: PlopTypes.NodePlopAPI) => {
  return plop.setGenerator('sync-dependencies', {
    description:
      'sync dependencies accross internal first-party packages & apps',
    prompts: [],
    actions: () => {
      const paths = flattenWorkspaceConfigAsPaths(workspace);

      const groupedDependencies = runDependenciesSync(paths);

      const groupedPackages: PackageGroupConfigInterface = {
        dependencies: [],
        devDependencies: [],
      };

      groupedDependencies.forEach((config) => {
        groupedPackages.dependencies.push(...config.dependencies);
        groupedPackages.devDependencies.push(...config.devDependencies);
      });

      groupedPackages.dependencies = groupDependencies(
        groupedPackages.dependencies
      );
      groupedPackages.devDependencies = groupDependencies(
        groupedPackages.devDependencies
      );

      // const joinedDependencies = groupPackages(groupedPackages);

      generatePackageConfigFile(groupedPackages);

      child.execSync('yarn run format', { stdio: [0, 1, 2] });

      return [];
    },
  });
};

const mapDependencies = (
  dependencies: Record<string, string> | undefined,
  path: string
) => {
  if (!dependencies) return [];

  return Object.keys(dependencies).map((name) => ({
    name,
    version: dependencies[name],
    enforceOn: [path + '/package.json'],
  }));
};

const flattenWorkspaceConfigAsPaths = (workspace): Array<string> => {
  return [
    ...workspace.apps.map((app) => `apps/${app.value}`),
    ...workspace.packages.map((pkg) => `packages/${pkg.value}`),
  ];
};

const runDependenciesSync = (paths: Array<string>) => {
  const groupedDependenciesMap = paths.map((path) => {
    process.chdir(path);

    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));

    const packageConfig = {
      dependencies: mapDependencies(packageJson.dependencies, path),
      devDependencies: mapDependencies(packageJson.devDependencies, path),
    };

    // go back to root folder.
    const backToRoot = path
      .split('/')
      .map(() => '..')
      .join('/');

    process.chdir(backToRoot);

    return packageConfig;
  });

  return groupedDependenciesMap;
};

const generatePackageConfigFile = (data: PackageGroupConfigInterface) => {
  const jsCode = `const packageConfig = ${JSON.stringify(
    data,
    null,
    4
  )};\n\nmodule.exports = packageConfig;`;

  // Write the JavaScript code to a file
  fs.writeFileSync('package.config.js', jsCode);
};

const groupDependencies = (
  dependencies: Array<PackageConfigInterface>
): Array<PackageConfigInterface> => {
  const combinedDependencies = {};

  dependencies.forEach((dependency) => {
    const key = `${dependency.name}@${dependency.version}`;

    if (combinedDependencies[key]) {
      // Merge the "enforceOn" values
      combinedDependencies[key].enforceOn = [
        ...new Set(
          combinedDependencies[key].enforceOn.concat(dependency.enforceOn)
        ),
      ];
    } else {
      combinedDependencies[key] = { ...dependency };
    }
  });

  return Object.values(combinedDependencies);
};
