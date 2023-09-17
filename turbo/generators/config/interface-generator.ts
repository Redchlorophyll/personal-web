const workspace = require('../../../workspace.ts');

import type { PlopTypes } from '@turbo/gen';

export const interfaceGenerator = (plop: PlopTypes.NodePlopAPI) => {
  return plop.setGenerator('interface', {
    description: 'Add a new interface',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message:
          'create new interface name with kebab-case (example: "new-interface")',
        validate: (data: string) => {
          if (data.trim() === '') {
            return 'interface Name Is Required.';
          }
          return true;
        },
      },
      {
        type: 'list',
        name: 'package',
        message:
          'package where interface want to be added (example: "shared/core")',
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
        path: 'packages/{{package}}/src/interfaces/{{kebabCase name}}-interface/{{kebabCase name}}.interface.ts',
        templateFile: 'templates/interface/interface.hbs',
      },
      {
        type: 'append',
        path: 'packages/{{package}}/src/index.ts',
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `export * from './interfaces/{{kebabCase name}}-interface/{{kebabCase name}}.interface';`,
      },
    ],
  });
};
