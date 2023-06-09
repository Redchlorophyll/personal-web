import type { PlopTypes } from '@turbo/gen';
import workspace from '../../workspace';

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
        type: 'append',
        path: 'packages/{{package}}/src/index.tsx',
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `export * from './components/{{kebabCase name}}/{{kebabCase name}}';`,
      },
    ],
  });

  plop.setGenerator('package', {
    description: 'Add a new package',
    prompts: [
      {
        type: 'input',
        name: 'package',
        message: 'create new package with kebab-case (example: "shared-ui")',
      },
      {
        type: 'list',
        name: 'type',
        message:
          'what type of package you thought want to make (example: "ui")',
        choices: workspace.packageTypes,
      },
    ],
    actions: [
      {
        type: 'addMany',
        destination: 'packages/{{pathCase package}}',
        base: 'templates/package/{{type}}',
        templateFiles: [
          'templates/package/{{type}}/**.hbs',
          'templates/package/{{type}}/src/**.hbs',
          'templates/package/{{type}}/src/components/**.hbs', // for ui type package
          'templates/package/{{type}}/src/svg/**.hbs', // for icon type package
          'templates/package/{{type}}/src/data/**.hbs', // for data type package
          'templates/package/{{type}}/src/util/**.hbs', // for util type package
        ],
      },
      {
        type: 'append',
        path: 'workspace.ts',
        pattern: `/* PLOP_INJECT_PACKAGE */`,
        template: `
    {
      name: '{{package}}',
      value: '{{pathCase package}}',
    },`,
      },
    ],
  });
}
