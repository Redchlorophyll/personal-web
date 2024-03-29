const workspace = require('../../../workspace.config.js');

import fs from 'fs-extra';
import * as child from 'child_process';
import type { PlopTypes } from '@turbo/gen';

export const packageGenerator = (plop: PlopTypes.NodePlopAPI) => {
  return plop.setGenerator('package', {
    description: 'Add a new package',
    prompts: [
      {
        type: 'input',
        name: 'packageName',
        message: 'create new package with kebab-case (example: "shared-ui")',
        validate: (data: string) => {
          if (data.trim() === '') {
            return 'App Name Is Required.';
          }

          return true;
        },
      },
      {
        type: 'list',
        name: 'type',
        message:
          'what type of package you thought want to make (example: "ui")',
        choices: workspace.packageTypes,
      },
      {
        type: 'list',
        name: 'isAllPackages',
        message: 'do you want apply the package into all apps?',
        choices: ['Yes', 'No'],
      },
      {
        when: (answer) => answer.isAllPackages === 'No',
        type: 'checkbox',
        name: 'affectedApp',
        message: 'what app that will consume this package',
        choices: workspace.apps,
        validate: (data: Array<any>) => {
          if (data.length === 0) {
            return 'App Name Is Required.';
          }

          return true;
        },
      },
    ],
    actions: (data) => {
      const { affectedApp, isAllPackages, type } = data || {};

      let plopActionForAffectedApp: Array<PlopTypes.ActionType> = [];
      let apps: Array<string> = [];

      const appsToProcess =
        isAllPackages === 'Yes' ? workspace.apps : affectedApp || [];

      apps = appsToProcess.map((app) => app.name);

      if (type === 'ui') {
        plopActionForAffectedApp = appsToProcess.map((app) => ({
          type: 'append',
          path:
            app.value !== 'storybook'
              ? `apps/${app.value}/pages/_app.tsx`
              : 'apps/storybook/.storybook/preview.ts',
          pattern: `/* PLOP_INJECT_STYLING */`,
          template: `import '{{packageName}}/styles.css';`,
        }));

        apps = appsToProcess.map((app) => app.name);
      }

      return [
        {
          type: 'addMany',
          destination: 'packages/{{pathCase packageName}}',
          base: 'templates/package/{{type}}',
          templateFiles: [
            // for config files, applicable for all package type.
            'templates/package/{{type}}/**.hbs',
            'templates/package/{{type}}/src/**.hbs',

            // for ui type package
            'templates/package/{{type}}/src/components/**.hbs',

            // for icon type package
            'templates/package/{{type}}/src/svg/**.hbs',

            // for data type package
            'templates/package/{{type}}/src/data/**.hbs',

            // for core type package
            'templates/package/{{type}}/src/enums/**.hbs',

            // for util type package
            'templates/package/{{type}}/src/interfaces/**.hbs',
            'templates/package/{{type}}/src/stores/**.hbs',
            'templates/package/{{type}}/src/utils/**.hbs',
          ],
        },
        ...plopActionForAffectedApp,
        function addPackageInsideApp(answers: {
          affectedApp?: Array<string>;
          packageName?: string;
        }) {
          if (!answers.affectedApp && isAllPackages === 'No') {
            return 'no apps provided, skipping append file';
          }

          apps.forEach((app) => {
            const packageJson = JSON.parse(
              fs.readFileSync(`apps/${app}/package.json`, 'utf-8')
            );

            packageJson.dependencies[answers.packageName || ''] = '*';

            const newPackageJson = JSON.stringify(packageJson, null, 2);

            fs.writeFileSync(
              `apps/${app}/package.json`,
              newPackageJson,
              'utf-8'
            );
          });

          return apps
            .map((app) => '\x1b[34m•\x1b[0m ' + `/apps/${app}/package.json`)
            .join('\n');
        },
        function runNodeInstallAfterCreation() {
          // after package creation we need to run this.
          // when this successfully run we doesn't require to install dependency again
          child.execSync('yarn install', { stdio: [0, 1, 2] });

          return 'node_modules installed';
        },
        {
          type: 'append',
          path: 'workspace.config.js',
          pattern: '/* PLOP_INJECT_PACKAGE */',
          template: `
      {
        name: '{{packageName}}',
        value: '{{pathCase packageName}}',
      },`,
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
