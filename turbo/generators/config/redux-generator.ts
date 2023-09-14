const workspace = require('../../../workspace.ts');

import type { PlopTypes } from '@turbo/gen';

export const reduxGenerator = (plop: PlopTypes.NodePlopAPI) => {
  return plop.setGenerator('redux', {
    description: 'Add a new Redux',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'create new redux name with kebab-case (example: "new-redux")',
        validate: (data: string) => {
          if (data.trim() === '') {
            return 'Redux Name Is Required.';
          }
          return true;
        },
      },
      {
        type: 'list',
        name: 'package',
        message:
          'package where redux want to be added (example: "shared/core")',
        default: 'shared/core',
        choices: workspace.packages.filter((pckage) => {
          const splittedName = pckage.name.split('-');

          return splittedName[1] === 'core';
        }),
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'packages/{{package}}/src/stores/{{kebabCase name}}/{{kebabCase name}}.tsx',
        templateFile: 'templates/store/store.hbs',
      },
      // {
      //   type: 'add',
      //   path: 'packages/{{package}}/src/stores/{{kebabCase name}}/{{kebabCase name}}.test.tsx',
      //   templateFile: 'templates/store/test.hbs',
      // },
      {
        type: 'append',
        path: 'packages/{{package}}/src/index.tsx',
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `export * from './stores/{{kebabCase name}}/{{kebabCase name}}';`,
      },
      {
        type: 'append',
        path: 'configs/redux-setup-custom/src/store.ts',
        pattern: `/* PLOP_INJECT_IMPORT_REDUCER */`,
        template: `import { {{camelCase name}}Slice } from '{{kebabCase package}}';`,
      },
      {
        type: 'append',
        path: 'configs/redux-setup-custom/src/store.ts',
        pattern: `/* PLOP_INJECT_REDUCER */`,
        template: `{{camelCase name}}: {{camelCase name}}Slice.reducer,`,
      },
    ],
  });
};
