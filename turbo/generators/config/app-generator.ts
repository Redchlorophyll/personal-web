const workspace = require('../../../workspace.config.js');

import fs from 'fs-extra';
import * as child from 'child_process';
import type { PlopTypes } from '@turbo/gen';

export const appGenerator = (plop: PlopTypes.NodePlopAPI) => {
  const groupedPackages = {};

  workspace.packages
    .filter((pckge) => {
      const parentFolder = pckge.value.split('/')[0];

      return parentFolder !== 'shared';
    })
    .forEach((pckge) => {
      const parentFolder = pckge.value.split('/')[0];

      if (groupedPackages[parentFolder]) {
        groupedPackages[parentFolder] = [
          ...groupedPackages[parentFolder],
          pckge.name,
        ];
      } else {
        groupedPackages[parentFolder] = [pckge.name];
      }
    });

  const groupCheckbox = Object.keys(groupedPackages).map((group) => ({
    value: group,
    name: group,
  }));

  return plop.setGenerator('app', {
    description: 'Add a new nextjs app',
    prompts: [
      {
        type: 'input',
        name: 'appName',
        message: 'create new app name with kebab-case (example: "web-blog")',
        validate: (data: string) => {
          if (data.trim() === '') {
            return 'App Name Is Required.';
          }

          return true;
        },
      },
      {
        type: 'list',
        name: 'isAllPackages',
        message:
          'do you want apply all packages in this new app? shared lib will be added by default',
        choices: ['Yes', 'No'],
      },
      {
        when: (answer) => answer.isAllPackages === 'No',
        type: 'checkbox',
        name: 'affectedPackage',
        message: 'what app that will consume this package (can skip this)',
        choices: groupCheckbox,
      },
    ],
    actions: (data) => {
      const { appName, affectedPackage, isAllPackages } = data || {};

      let packageList: Array<string> = [];

      switch (isAllPackages) {
        case 'Yes':
          packageList = groupCheckbox
            .map((pckge) => {
              return groupedPackages[pckge.value.split('/')[0]];
            })
            .flat();
          break;
        case 'No':
          packageList = affectedPackage
            .map((pckge) => {
              return groupedPackages[pckge];
            })
            .flat();
      }

      packageList = [...packageList, 'shared-ui', 'shared-core', 'shared-icon'];

      return [
        {
          type: 'addMany',
          destination: 'apps/{{kebabCase appName}}',
          base: 'templates/app',
          templateFiles: [
            'templates/app/**.hbs',
            'templates/app/pages/**.hbs',
            'templates/app/public/**.hbs',
            'templates/app/assets/styles/**.hbs',
          ],
        },
        {
          type: 'append',
          path: 'workspace.config.js',
          pattern: `/* PLOP_INJECT_APP */`,
          template: `
      {
        name: '{{appName}}',
        value: '{{appName}}',
      },`,
        },
        function addPackageInsideApp(answers: {
          affectedPackage?: Array<string>;
        }) {
          if (!answers.affectedPackage && isAllPackages === 'No') {
            return 'no package provided, skipping append file';
          }

          packageList.forEach((pckge) => {
            const packageJson = JSON.parse(
              fs.readFileSync(`apps/${appName}/package.json`, 'utf-8')
            );

            packageJson.dependencies[pckge || ''] = '*';

            const newPackageJson = JSON.stringify(packageJson, null, 2);

            fs.writeFileSync(
              `apps/${appName}/package.json`,
              newPackageJson,
              'utf-8'
            );
          });

          return packageList
            .map(
              (app) =>
                '\x1b[34m•\x1b[0m ' +
                `added ${app} in => '/apps/${appName}/package.json'`
            )
            .join('\n');
        },
        function runNodeInstallAfterCreation() {
          child.execSync('yarn install', { stdio: [0, 1, 2] });

          return 'node_modules installed';
        },
        function syncAfterInstall() {
          child.execSync('yarn run dependencies:sync', {
            stdio: [0, 1, 2],
          });

          return 'sync dependencies successs';
        },
      ];
    },
  });
};
