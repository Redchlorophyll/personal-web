const workspace = require('../../../workspace.config.js');

import type { PlopTypes } from '@turbo/gen';

export const methodGenerator = (plop: PlopTypes.NodePlopAPI) => {
  return plop.setGenerator('method', {
    description: 'Add a new method',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message:
          'create new method name with kebab-case (example: "new-method")',
        validate: (data: string) => {
          if (data.trim() === '') {
            return 'Method Name Is Required.';
          }
          return true;
        },
      },
      {
        type: 'list',
        name: 'package',
        message:
          'package where method want to be added (example: "shared/core")',
        default: 'shared/core',
        choices: workspace.packages.filter((pckage) => {
          const splittedName = pckage.name.split('-');

          return splittedName[splittedName.length - 1] === 'core';
        }),
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'packages/{{package}}/src/utils/{{kebabCase name}}/{{kebabCase name}}.ts',
        templateFile: 'templates/method/method.hbs',
      },
      // will comment out this line until test file already added in template generator

      {
        type: 'add',
        path: 'packages/{{package}}/src/utils/{{kebabCase name}}/{{kebabCase name}}.spec.ts',
        templateFile: 'templates/method/test.hbs',
      },
      {
        type: 'append',
        path: 'packages/{{package}}/src/index.ts',
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `export * from './utils/{{kebabCase name}}/{{kebabCase name}}';`,
      },
    ],
  });
};
