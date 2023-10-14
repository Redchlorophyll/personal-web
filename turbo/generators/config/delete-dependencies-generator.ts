const fs = require('fs');
const packageConfig = require('../../../package.config.js');

import { PlopTypes } from '@turbo/gen';
import * as child from 'child_process';

export const deleteDependenciesGenerator = (plop: PlopTypes.NodePlopAPI) => {
  return plop.setGenerator('delete-dependencies', {
    description: 'delete selected dependencies',
    prompts: [
      {
        type: 'list',
        name: 'typeDependency',
        message: 'what kind of dependency?',
        choices: ['devDependencies', 'dependencies'],
      },
      {
        type: 'list',
        name: 'dependencyName',
        message: 'name of dependency?',
        choices: (answers) => {
          return packageConfig[answers.typeDependency].map(
            (pckge) => pckge.name
          );
        },
      },
      {
        when: (answers) => {
          const mappedPackageName = packageConfig[answers.typeDependency]
            .map((data) => data.name)
            .filter((data) => data === answers.dependencyName);

          return mappedPackageName.length > 1;
        },
        type: 'list',
        name: 'dependencyVersion',
        message:
          'seems like there is same package with different version, which one you refer to?',
        choices: (answers) => {
          const mappedPackageName = packageConfig[answers.typeDependency]
            .map((data) => ({
              name: data.name,
              version: data.version,
            }))
            .filter((data) => data.name === answers.dependencyName);

          return mappedPackageName.map((data) => data.version);
        },
      },
      {
        type: 'checkbox',
        name: 'pathOfInstalledDependency',
        message: 'select where the dependency want to be remove.',
        choices: (answers) => {
          let dependency;
          if (answers.dependencyVersion) {
            dependency = packageConfig[answers.typeDependency].find(
              (pckge) =>
                pckge.name === answers.dependencyName &&
                pckge.version === answers.dependencyVersion
            );
          } else
            dependency = packageConfig[answers.typeDependency].find(
              (pckge) => pckge.name === answers.dependencyName
            );

          return dependency.enforceOn.map((data) => ({
            name: data,
            value: data,
          }));
        },
        validate: (data: Array<string>) => {
          if (data.length < 1) {
            return 'path Is Required.';
          }
          return true;
        },
      },
    ],
    actions: (data) => {
      const {
        typeDependency,
        dependencyName,
        pathOfInstalledDependency,
        dependencyVersion,
      } = data || {};

      // uninstalling dependecies
      runDeleteDependency({
        dependencyName,
        path: pathOfInstalledDependency,
      });

      const pckgeInConfig = findSelectedDependency({
        path: pathOfInstalledDependency,
        typeDependency,
        dependencyName,
        dependencyVersion,
      });

      const arrayIndex = getIndexOfDependency({
        typeDependency,
        dependencyName,
        dependencyVersion,
      });

      if (pckgeInConfig.enforceOn.length < 1) {
        packageConfig[typeDependency].splice(arrayIndex, 1);
      } else {
        packageConfig[typeDependency][arrayIndex] = pckgeInConfig;
      }

      fs.writeFileSync(
        './package.config.js',
        `const packageConfig = ${JSON.stringify(
          packageConfig,
          null,
          2
        )}; module.exports = packageConfig;`
      );

      child.execSync('yarn run format', { stdio: [0, 1, 2] });

      return [];
    },
  });
};

const runDeleteDependency = ({
  path,
  dependencyName,
}: {
  path: Array<string>;
  dependencyName: string;
}) => {
  path.forEach((path) => {
    const clearedPath = path
      .split('/')
      .filter((path) => path !== 'package.json')
      .join('/');

    process.chdir(clearedPath);

    child.execFileSync('yarn', ['add', dependencyName], {
      stdio: [0, 1, 2],
    });

    const backToRoot = clearedPath
      .split('/')
      .map(() => '..')
      .join('/');

    process.chdir(backToRoot);
  });
};

const findSelectedDependency = ({
  dependencyVersion,
  typeDependency,
  dependencyName,
  path,
}: {
  dependencyVersion: string;
  typeDependency: string;
  dependencyName: string;
  path: Array<string>;
}) => {
  let pckgeInConfig;
  if (dependencyVersion) {
    pckgeInConfig = packageConfig[typeDependency].find(
      (pckge) =>
        pckge.name === dependencyName && pckge.version === dependencyVersion
    );
  } else {
    pckgeInConfig = packageConfig[typeDependency].find(
      (pckge) => pckge.name === dependencyName
    );
  }

  path.forEach((dependecies) => {
    pckgeInConfig = {
      ...pckgeInConfig,
      enforceOn: pckgeInConfig.enforceOn.filter((path) => path !== dependecies),
    };
  });

  return pckgeInConfig;
};

const getIndexOfDependency = ({
  dependencyVersion,
  typeDependency,
  dependencyName,
}: {
  dependencyVersion: string;
  typeDependency: string;
  dependencyName: string;
}) => {
  let arrayIndex;

  if (dependencyVersion) {
    arrayIndex = packageConfig[typeDependency].findIndex(
      (obj) => obj.name === dependencyName && obj.version === dependencyVersion
    );
  } else {
    arrayIndex = packageConfig[typeDependency].findIndex(
      (obj) => obj.name === dependencyName
    );
  }

  return arrayIndex;
};
