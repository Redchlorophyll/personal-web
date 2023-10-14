const workspace = require('../../../workspace.config.js');

import type { PlopTypes } from '@turbo/gen';

export const componentGenerator = (plop: PlopTypes.NodePlopAPI) => {
  return plop.setGenerator('component', {
    description: 'Add a new component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message:
          'create new component name with kebab-case (example: "new-component")',
        validate: (data: string) => {
          if (data.trim() === '') {
            return 'Component Name Is Required.';
          }
          return true;
        },
      },
      {
        type: 'list',
        name: 'package',
        message:
          'package where component want to be added (example: "shared/ui")',
        default: 'shared/ui',
        choices: workspace.packages.filter((pckage) => {
          const splittedName = pckage.name.split('-');

          return splittedName[splittedName.length - 1] === 'ui';
        }),
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
        path: 'packages/{{package}}/src/components/{{kebabCase name}}/{{kebabCase name}}.spec.tsx',
        templateFile: 'templates/component/test.hbs',
      },
      {
        type: 'add',
        path: 'packages/{{package}}/src/components/{{kebabCase name}}/{{kebabCase name}}.stories.tsx',
        templateFile: 'templates/component/stories.hbs',
      },
      {
        type: 'append',
        path: 'packages/{{package}}/src/index.tsx',
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `export * from './components/{{kebabCase name}}/{{kebabCase name}}';`,
      },
    ],
  });
};
