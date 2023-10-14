const fs = require('fs');
const workspace = require('../../../workspace.config.js');
const packageConfig = require('../../../package.config.js');

import { PlopTypes } from '@turbo/gen';
import * as child from 'child_process';

interface ChoiceInterface {
  name: string;
  value: string;
}

type AddingApproachType =
  | 'All'
  | 'Manual'
  | 'All Apps'
  | 'All Package'
  | 'Specific Package Type';

export const addDependenciesGenerator = (plop: PlopTypes.NodePlopAPI) => {
  const packageRoutes: Array<ChoiceInterface> = workspace.packages.map(
    (pckge) => {
      return {
        name: pckge.name,
        value: 'packages/' + pckge.value,
      };
    }
  );

  const appRoutes: Array<{ name: string; value: string }> = workspace.apps.map(
    (app) => {
      return {
        name: app.name,
        value: 'apps/' + app.value,
      };
    }
  );

  const allPackageAndAppRoutes: Array<ChoiceInterface> = [
    ...packageRoutes,
    ...appRoutes,
  ];

  return plop.setGenerator('add-dependencies', {
    description: 'add new dependencies into internal packages',
    prompts: [
      {
        type: 'input',
        name: 'packageWantToBeInstall',
        message: 'write package name want to be added',
        validate: (data: string) => {
          if (data.trim() === '') {
            return 'Package Is Required.';
          }
          return true;
        },
      },
      {
        type: 'input',
        name: 'packageVersion',
        message:
          'write package version want to be added (empty to get latest version)',
      },
      {
        type: 'list',
        name: 'saveAs',
        message: 'what kind of save you want to?',
        choices: ['save', 'save-dev'],
      },
      {
        when: (answers) => {
          // Access the 'addDependency' value from previous prompt
          const validatePackageExistence = findPackageByName({
            packageName: answers.packageWantToBeInstall,
            version: answers.packageVersion,
            saveAs: answers.saveAs,
          }).condition;

          return validatePackageExistence === 'name found';
        },
        type: 'list',
        name: 'wantAbort',
        message:
          'warning: dependencies added is already exists in current config. want to abort command?',
        choices: ['Yes (recomended)', 'No, I want to add this version'],
      },
      {
        when: (answer) => answer.wantAbort !== 'Yes (recomended)',
        type: 'list',
        name: 'addingApproach',
        message:
          'do you want install package in all project, including internal package and apps?',
        choices: (answers) => {
          const validatePackageExistence = findPackageByName({
            packageName: answers.packageWantToBeInstall,
            version: answers.packageVersion,
            saveAs: answers.saveAs,
          });

          if (
            validatePackageExistence.condition === 'name found' ||
            validatePackageExistence.condition === 'name & version found'
          ) {
            return ['Manual'];
          }

          return [
            'All',
            'Manual',
            'All Apps',
            'All Package',
            'Specific Package Type',
          ];
        },
      },
      {
        when: (answer) =>
          answer.addingApproach === 'Manual' &&
          answer.wantAbort !== 'Yes (recomended)',
        type: 'checkbox',
        name: 'manualApproach',
        message: 'what app that will consume this package',
        choices: allPackageAndAppRoutes,
        validate: (data: Array<string>) => {
          if (data.length < 1) {
            return 'Package Is Required.';
          }
          return true;
        },
      },
      {
        when: (answer) =>
          answer.addingApproach === 'Specific Package Type' &&
          answer.wantAbort !== 'Yes (recomended)',
        type: 'list',
        name: 'specificPackageTypeApproach',
        message: 'what app that will consume this package (can skip this)',
        choices: workspace.packageTypes.map(
          (pckge) => pckge.value
        ) as Array<string>,
      },
    ],
    actions: (data) => {
      const {
        packageWantToBeInstall,
        packageVersion,
        saveAs,
        wantAbort,
        addingApproach,
        manualApproach,
        specificPackageTypeApproach,
      } = data || {};

      if (wantAbort === 'Yes (recomended)') process.exit(1);

      let pckgeVersion = packageVersion;

      if (packageVersion === '') {
        pckgeVersion = getPackageVersion(packageWantToBeInstall);
      }

      const validatePackageExistence = findPackageByName({
        packageName: packageWantToBeInstall,
        version: pckgeVersion,
        saveAs: saveAs,
      });

      let enforceOnList: Array<string> = [];

      if (validatePackageExistence.condition === 'name & version found') {
        const concatenatedArray = [
          ...validatePackageExistence.dependencies.enforceOn,
          ...manualApproach,
        ];

        // Use a Set to automatically remove duplicates
        const uniqueArray = Array.from(new Set(concatenatedArray));

        enforceOnList = [...uniqueArray];
      } else {
        enforceOnList = mapEnforcedPackageJsonFile({
          addingApproach,
          manualApproach,
          specificPackageTypeApproach,
          allPackageAndAppRoutes,
          packageRoutes,
          appRoutes,
        });
      }

      // remove string contained package.json
      enforceOnList = enforceOnList.map((path) => {
        return path
          .split('/')
          .filter((path) => path !== 'package.json')
          .join('/');
      });

      // remove duplicate string
      enforceOnList = Array.from(new Set(enforceOnList));

      runDependencyInstallation({
        path: enforceOnList,
        packageName: packageWantToBeInstall,
        pckgeVersion: pckgeVersion,
        saveAs,
      });

      // add package.json suffix back to array
      const dependenciesObjStr = {
        name: packageWantToBeInstall,
        version: pckgeVersion,
        enforceOn: enforceOnList.map(
          (pathToPckgeJson) => pathToPckgeJson + '/package.json'
        ),
      };

      if (validatePackageExistence.condition === 'name & version found') {
        const arrayIndex = packageConfig[
          saveAs === 'save' ? 'dependencies' : 'devDependencies'
        ].findIndex(
          (obj) =>
            obj.name === packageWantToBeInstall && obj.version === pckgeVersion
        );

        packageConfig[saveAs === 'save' ? 'dependencies' : 'devDependencies'][
          arrayIndex
        ] = dependenciesObjStr;
      } else {
        packageConfig[
          saveAs === 'save' ? 'dependencies' : 'devDependencies'
        ].push(dependenciesObjStr);
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

const mapEnforcedPackageJsonFile = ({
  addingApproach,
  manualApproach,
  specificPackageTypeApproach,
  allPackageAndAppRoutes,
  packageRoutes,
  appRoutes,
}: {
  addingApproach: AddingApproachType;
  manualApproach: Array<string>;
  specificPackageTypeApproach: string;
  allPackageAndAppRoutes: Array<ChoiceInterface>;
  packageRoutes: Array<ChoiceInterface>;
  appRoutes: Array<ChoiceInterface>;
}): Array<string> => {
  let enforcedPackageJsons: Array<string> = [];
  switch (addingApproach) {
    case 'All':
      enforcedPackageJsons = allPackageAndAppRoutes.map((pckge) => pckge.value);
      break;
    case 'All Apps':
      enforcedPackageJsons = appRoutes.map((pckge) => pckge.value);
      break;
    case 'All Package':
      enforcedPackageJsons = packageRoutes.map((pckge) => pckge.value);
      break;
    case 'Manual':
      enforcedPackageJsons = manualApproach.map((pckge) => pckge);
      break;
    case 'Specific Package Type':
      const filteredPackageBasedOfType: Array<string> = workspace.packages
        .filter((pckge) => {
          const splitedFolder = pckge.value.split('/');
          return (
            splitedFolder[splitedFolder.length - 1] ===
            specificPackageTypeApproach
          );
        })
        .map((pckgeBaseName) => {
          return 'packages/' + pckgeBaseName.value;
        });

      enforcedPackageJsons = filteredPackageBasedOfType;
      break;
  }

  return enforcedPackageJsons;
};

const findPackageByName = ({
  packageName,
  version,
  saveAs,
}: {
  packageName: string;
  version: string;
  saveAs: string;
}) => {
  let pckgeVersion = version;
  let condition = '';

  let dependencies = packageConfig[
    saveAs === 'save' ? 'dependencies' : 'devDependencies'
  ].find((dependency) => dependency.name === packageName);

  if (dependencies && dependencies.version === version) {
    dependencies = dependencies; // Both name and version match
    condition = 'name & version found';
  } else if (dependencies) {
    dependencies = dependencies; // Only name matches, return the object with the matching name
    condition = 'name found';
  } else {
    return {
      dependencies,
      condition: 'not found',
    };
  }

  return {
    dependencies,
    condition,
  };
};

const getPackageVersion = (packageName: string) => {
  console.info('getting dependency version, please wait...');

  try {
    const stdout = child.execSync(`npm view ${packageName} version`, {
      encoding: 'utf8',
    });

    const pckgeVersion = `^${stdout.trim()}`;
    // Extract and print the latest version
    console.info('package version: ', pckgeVersion);
    return pckgeVersion;
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
};

const runDependencyInstallation = ({
  path,
  saveAs,
  pckgeVersion,
  packageName,
}: {
  path: Array<string>;
  saveAs: string;
  pckgeVersion: string;
  packageName: string;
}) => {
  path.forEach((targetFile) => {
    // go to folder first.
    process.chdir(targetFile);

    const dependencyFlag = saveAs === 'save' ? '--save' : '--save-dev';
    const dependenciesVersion = pckgeVersion ? `@${pckgeVersion}` : '';

    child.execFileSync(
      'yarn',
      ['add', `${packageName}${dependenciesVersion}`, dependencyFlag],
      { stdio: [0, 1, 2] }
    );

    // go back to root folder.
    const backToRoot = targetFile
      .split('/')
      .map(() => '..')
      .join('/');

    process.chdir(backToRoot);
  });
};
