import * as child from 'child_process';
import type { PlopTypes } from '@turbo/gen';

export const appGenerator = (plop: PlopTypes.NodePlopAPI) => {
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
};
