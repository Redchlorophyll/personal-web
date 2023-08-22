import fs from 'fs-extra';
import type { PlopTypes } from '@turbo/gen';
import workspace from '../../workspace';
import * as child from 'child_process';

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator('component', {
    description: 'Add a new component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message:
          'create new component name with kebab-case (example: "new-component")',
      },
      {
        type: 'list',
        name: 'package',
        message: 'package where component want to be added (example: "shared")',
        default: 'shared/ui',
        choices: workspace.packages,
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'packages/{{package}}/src/components/{{kebabCase name}}/{{kebabCase name}}.tsx',
        templateFile: 'templates/component/component.hbs',
      },
      {
        type: 'add',
        path: 'packages/{{package}}/src/components/{{kebabCase name}}/{{kebabCase name}}.test.tsx',
        templateFile: 'templates/component/test.hbs',
      },
      {
        type: 'append',
        path: 'packages/{{package}}/src/index.tsx',
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `export * from './components/{{kebabCase name}}/{{kebabCase name}}';`,
      },
    ],
  });

  plop.setGenerator('app', {
    description: 'Add a new nextjs app',
    prompts: [
      {
        type: 'input',
        name: 'appName',
        message: 'create new app name with kebab-case (example: "web-blog")',
      },
    ],
    actions: [
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
        path: 'workspace.ts',
        pattern: `/* PLOP_INJECT_APP */`,
        template: `
    {
      name: '{{appName}}',
      value: '{{appName}}',
    },`,
      },
      function runNodeInstallAfterCreation() {
        child.execSync('yarn install', { stdio: [0, 1, 2] });

        return 'node_modules installed';
      },
    ],
  });

  plop.setGenerator('package', {
    description: 'Add a new package',
    prompts: [
      {
        type: 'input',
        name: 'packageName',
        message: 'create new package with kebab-case (example: "shared-ui")',
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
            {
              type: 'append',
              path: `apps/${app}/pages/next.config.js`,
              pattern: `/* PLOP_INJECT_CORE_PACKAGE */`,
              template: `'${packageName}',`,
            },
          ];
        });

      return [
        {
          type: 'addMany',
          destination: `packages/{{pathCase packageName}}`,
          base: 'templates/package/{{type}}',
          templateFiles: [
            `templates/package/${type}/**.hbs`,
            `templates/package/${type}/src/**.hbs`,
            `templates/package/${type}/src/components/**.hbs`, // for ui type package
            `templates/package/${type}/src/svg/**.hbs`, // for icon type package
            `templates/package/${type}/src/data/**.hbs`, // for data type package
            `templates/package/${type}/src/enums/**.hbs`, // for core type package
            `templates/package/${type}/src/interfaces/**.hbs'=`, // for util type package
            `templates/package/${type}/src/stores/**.hbs`, // for util type package
            `templates/package/${type}/src/utils/**.hbs`, // for util type package
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
}
