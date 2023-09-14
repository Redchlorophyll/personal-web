const workspace = require('../../../workspace.ts');

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
      const { affectedApp, type, packageName } = data || {};

      const plopActionForAffectedApp: Array<Array<PlopTypes.ActionType>> =
        affectedApp.map((app) => {
          return [
            {
              type: 'append',
              path: `apps/${app}/pages/_app.js`,
              pattern: `/* PLOP_INJECT_STYLING */`,
              template: `import '${packageName}/styles.css';`,
            },
          ];
        });

      return [
        {
          type: 'addMany',
          destination: `packages/{{pathCase packageName}}`,
          base: 'templates/package/{{type}}',
          templateFiles: [
            // for config files, applicable for all package type.
            `templates/package/${type}/**.hbs`,
            `templates/package/${type}/src/**.hbs`,

            // for ui type package
            `templates/package/${type}/src/components/**.hbs`,

            // for icon type package
            `templates/package/${type}/src/svg/**.hbs`,

            // for data type package
            `templates/package/${type}/src/data/**.hbs`,

            // for core type package
            `templates/package/${type}/src/enums/**.hbs`,

            // for util type package
            `templates/package/${type}/src/interfaces/**.hbs'=`,
            `templates/package/${type}/src/stores/**.hbs`,
            `templates/package/${type}/src/utils/**.hbs`,
          ],
        },
        {
          type: 'append',
          path: 'workspace.ts',
          pattern: `/* PLOP_INJECT_PACKAGE */`,
          template: `
      {
        name: '${packageName}',
        value: '{{pathCase packageName}}',
      },`,
        },
        ...plopActionForAffectedApp.flat(),
        function addPackageInsideApp(answers: {
          affectedApp?: Array<string>;
          package?: string;
        }) {
          if (!answers.package) {
            return 'no package provided, skipping append file';
          }

          if (!answers.affectedApp) {
            return 'no apps provided, skipping append file';
          }

          answers.affectedApp.forEach((app) => {
            const packageJson = JSON.parse(
              fs.readFileSync(`apps/${app}/package.json`, 'utf-8')
            );

            packageJson.devDependencies[answers.package || ''] = '*';

            const newPackageJson = JSON.stringify(packageJson, null, 2);

            fs.writeFileSync(
              `apps/${app}/package.json`,
              newPackageJson,
              'utf-8'
            );
          });

          return answers.affectedApp
            .map((app) => `/apps/${app}/package.json`)
            .join(' & ');
        },
        function runNodeInstallAfterCreation() {
          // after package creation we need to run this.
          // when this successfully run we doesn't require to install dependency again
          child.execSync('yarn install', { stdio: [0, 1, 2] });

          return 'node_modules installed';
        },
      ];
    },
  });
};
