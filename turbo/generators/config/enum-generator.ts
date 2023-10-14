const workspace = require('../../../workspace.config.js');

import type { PlopTypes } from '@turbo/gen';

export const enumGenerator = (plop: PlopTypes.NodePlopAPI) => {
  return plop.setGenerator('enum', {
    description: 'Add a new Enum',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'create new enum name with kebab-case (example: "new-enum")',
        validate: (data: string) => {
          if (data.trim() === '') {
            return 'Enum Name Is Required.';
          }
          return true;
        },
      },
      {
        type: 'list',
        name: 'package',
        message: 'package where Enum want to be added (example: "shared/core")',
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
        path: 'packages/{{package}}/src/enums/{{kebabCase name}}-enum/{{kebabCase name}}.enum.ts',
        templateFile: 'templates/enum/enum.hbs',
      },
      {
        type: 'append',
        path: 'packages/{{package}}/src/index.ts',
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `export * from './enums/{{kebabCase name}}-enum/{{kebabCase name}}.enum';`,
      },
    ],
  });
};
