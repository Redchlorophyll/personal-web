const packageConfig = {
  dependencies: [
    {
      name: '@hookform/resolvers',
      version: '^2.9.10',
      enforceOn: ['apps/storybook/package.json', 'apps/web/package.json'],
    },
    {
      name: 'next',
      version: '13.0.0',
      enforceOn: ['apps/storybook/package.json', 'apps/web/package.json'],
    },
    {
      name: 'react',
      version: '^18.2.0',
      enforceOn: [
        'apps/storybook/package.json',
        'apps/web/package.json',
        'packages/web/ui/package.json',
        'packages/shared/ui/package.json',
      ],
    },
    {
      name: 'react-dom',
      version: '^18.2.0',
      enforceOn: [
        'apps/storybook/package.json',
        'apps/web/package.json',
        'packages/web/ui/package.json',
        'packages/shared/ui/package.json',
      ],
    },
    {
      name: 'react-hook-form',
      version: '^7.41.5',
      enforceOn: ['apps/storybook/package.json', 'apps/web/package.json'],
    },
    {
      name: 'react-intersection-observer',
      version: '^9.4.0',
      enforceOn: [
        'apps/storybook/package.json',
        'apps/web/package.json',
        'packages/web/ui/package.json',
        'packages/shared/ui/package.json',
      ],
    },
    {
      name: 'shared-core',
      version: '*',
      enforceOn: [
        'apps/storybook/package.json',
        'packages/shared/ui/package.json',
      ],
    },
    {
      name: 'shared-icon',
      version: '*',
      enforceOn: [
        'apps/storybook/package.json',
        'packages/web/ui/package.json',
        'packages/shared/ui/package.json',
      ],
    },
    {
      name: 'shared-ui',
      version: '*',
      enforceOn: ['apps/storybook/package.json'],
    },
    {
      name: 'storybook',
      version: '^7.4.6',
      enforceOn: ['apps/storybook/package.json'],
    },
    {
      name: 'web-ui',
      version: '*',
      enforceOn: ['apps/storybook/package.json'],
    },
    {
      name: 'yup',
      version: '^0.32.11',
      enforceOn: ['apps/storybook/package.json', 'apps/web/package.json'],
    },
    {
      name: 'firebase',
      version: '^9.15.0',
      enforceOn: ['apps/web/package.json'],
    },
    {
      name: 'swiper',
      version: '^8.4.5',
      enforceOn: ['apps/web/package.json'],
    },
    {
      name: 'redux-setup-custom',
      version: '*',
      enforceOn: ['apps/web/package.json', 'packages/shared/ui/package.json'],
    },
    {
      name: '@emotion/react',
      version: '^11.10.5',
      enforceOn: [
        'packages/web/ui/package.json',
        'packages/shared/ui/package.json',
      ],
    },
    {
      name: 'next',
      version: '^13.4.19',
      enforceOn: ['packages/web/ui/package.json'],
    },
    {
      name: 'react-awesome-reveal',
      version: '^4.1.0',
      enforceOn: [
        'packages/web/ui/package.json',
        'packages/shared/ui/package.json',
      ],
    },
    {
      name: '@reduxjs/toolkit',
      version: '^1.9.5',
      enforceOn: ['packages/shared/ui/package.json'],
    },
  ],
  devDependencies: [
    {
      name: '@babel/preset-env',
      version: '^7.19.4',
      enforceOn: [
        'apps/storybook/package.json',
        'apps/web/package.json',
        'packages/web/ui/package.json',
        'packages/shared/ui/package.json',
        'packages/shared/core/package.json',
      ],
    },
    {
      name: '@babel/preset-react',
      version: '^7.18.6',
      enforceOn: [
        'apps/storybook/package.json',
        'apps/web/package.json',
        'packages/web/ui/package.json',
        'packages/shared/ui/package.json',
        'packages/shared/core/package.json',
      ],
    },
    {
      name: '@babel/preset-typescript',
      version: '^7.18.6',
      enforceOn: [
        'apps/storybook/package.json',
        'apps/web/package.json',
        'packages/web/ui/package.json',
        'packages/shared/ui/package.json',
        'packages/shared/core/package.json',
      ],
    },
    {
      name: '@storybook/addon-essentials',
      version: '^7.4.6',
      enforceOn: ['apps/storybook/package.json'],
    },
    {
      name: '@storybook/addon-interactions',
      version: '^7.4.6',
      enforceOn: ['apps/storybook/package.json'],
    },
    {
      name: '@storybook/addon-links',
      version: '^7.4.6',
      enforceOn: ['apps/storybook/package.json'],
    },
    {
      name: '@storybook/addon-onboarding',
      version: '^1.0.8',
      enforceOn: ['apps/storybook/package.json'],
    },
    {
      name: '@storybook/addon-styling-webpack',
      version: '^0.0.5',
      enforceOn: ['apps/storybook/package.json'],
    },
    {
      name: '@storybook/blocks',
      version: '^7.4.6',
      enforceOn: ['apps/storybook/package.json'],
    },
    {
      name: '@storybook/nextjs',
      version: '^7.4.6',
      enforceOn: ['apps/storybook/package.json'],
    },
    {
      name: '@storybook/react',
      version: '^7.4.6',
      enforceOn: ['apps/storybook/package.json'],
    },
    {
      name: '@storybook/testing-library',
      version: '^0.2.2',
      enforceOn: ['apps/storybook/package.json'],
    },
    {
      name: '@svgr/webpack',
      version: '^7.0.0',
      enforceOn: ['apps/storybook/package.json', 'apps/web/package.json'],
    },
    {
      name: '@testing-library/dom',
      version: '^8.18.1',
      enforceOn: [
        'apps/storybook/package.json',
        'apps/web/package.json',
        'packages/web/ui/package.json',
      ],
    },
    {
      name: '@testing-library/jest-dom',
      version: '^5.16.5',
      enforceOn: [
        'apps/storybook/package.json',
        'apps/web/package.json',
        'packages/web/ui/package.json',
      ],
    },
    {
      name: '@testing-library/react',
      version: '^13.4.0',
      enforceOn: ['apps/storybook/package.json', 'apps/web/package.json'],
    },
    {
      name: '@testing-library/user-event',
      version: '^14.4.3',
      enforceOn: [
        'apps/storybook/package.json',
        'apps/web/package.json',
        'packages/web/ui/package.json',
      ],
    },
    {
      name: '@types/node',
      version: '^17.0.12',
      enforceOn: ['apps/storybook/package.json', 'apps/web/package.json'],
    },
    {
      name: '@types/react',
      version: '^18.0.22',
      enforceOn: [
        'apps/storybook/package.json',
        'apps/web/package.json',
        'packages/web/ui/package.json',
        'packages/shared/ui/package.json',
        'packages/shared/core/package.json',
      ],
    },
    {
      name: '@types/react-dom',
      version: '^18.0.7',
      enforceOn: [
        'apps/storybook/package.json',
        'apps/web/package.json',
        'packages/web/ui/package.json',
        'packages/shared/ui/package.json',
        'packages/shared/core/package.json',
      ],
    },
    {
      name: 'autoprefixer',
      version: '^10.4.7',
      enforceOn: [
        'apps/storybook/package.json',
        'apps/web/package.json',
        'packages/web/ui/package.json',
        'packages/shared/ui/package.json',
      ],
    },
    {
      name: 'eslint-config-custom',
      version: '*',
      enforceOn: [
        'apps/storybook/package.json',
        'apps/web/package.json',
        'packages/web/ui/package.json',
        'packages/shared/ui/package.json',
      ],
    },
    {
      name: 'eslint-plugin-storybook',
      version: '^0.6.15',
      enforceOn: ['apps/storybook/package.json'],
    },
    {
      name: 'next-transpile-modules',
      version: '^9.0.0',
      enforceOn: ['apps/storybook/package.json', 'apps/web/package.json'],
    },
    {
      name: 'postcss',
      version: '^8.4.14',
      enforceOn: [
        'apps/storybook/package.json',
        'apps/web/package.json',
        'packages/web/ui/package.json',
        'packages/shared/ui/package.json',
      ],
    },
    {
      name: 'tailwind-config',
      version: '*',
      enforceOn: [
        'apps/storybook/package.json',
        'apps/web/package.json',
        'packages/shared/ui/package.json',
      ],
    },
    {
      name: 'tailwind-scrollbar',
      version: '^2.0.1',
      enforceOn: [
        'apps/storybook/package.json',
        'apps/web/package.json',
        'packages/web/ui/package.json',
        'packages/shared/ui/package.json',
      ],
    },
    {
      name: 'tailwindcss',
      version: '^3.1.5',
      enforceOn: [
        'apps/storybook/package.json',
        'apps/web/package.json',
        'packages/web/ui/package.json',
        'packages/shared/ui/package.json',
      ],
    },
    {
      name: 'testing-library-react-custom',
      version: '*',
      enforceOn: [
        'apps/storybook/package.json',
        'packages/shared/ui/package.json',
      ],
    },
    {
      name: 'tsconfig',
      version: '*',
      enforceOn: [
        'apps/storybook/package.json',
        'apps/web/package.json',
        'packages/web/ui/package.json',
        'packages/shared/ui/package.json',
        'packages/shared/icon/package.json',
        'packages/shared/core/package.json',
      ],
    },
    {
      name: 'typescript',
      version: '^4.5.3',
      enforceOn: [
        'apps/storybook/package.json',
        'apps/web/package.json',
        'packages/shared/core/package.json',
      ],
    },
    {
      name: 'babel-jest',
      version: '^29.3.1',
      enforceOn: ['apps/web/package.json', 'packages/shared/ui/package.json'],
    },
    {
      name: 'concurrently',
      version: '^7.2.2',
      enforceOn: [
        'apps/web/package.json',
        'packages/web/ui/package.json',
        'packages/shared/ui/package.json',
      ],
    },
    {
      name: 'file-loader',
      version: '^6.2.0',
      enforceOn: ['apps/web/package.json'],
    },
    {
      name: 'jest',
      version: '^29.0.1',
      enforceOn: [
        'apps/web/package.json',
        'packages/web/ui/package.json',
        'packages/shared/ui/package.json',
        'packages/shared/core/package.json',
      ],
    },
    {
      name: 'jest-environment-jsdom',
      version: '^29.0.1',
      enforceOn: [
        'apps/web/package.json',
        'packages/web/ui/package.json',
        'packages/shared/ui/package.json',
      ],
    },
    {
      name: 'jest-transform-stub',
      version: '^2.0.0',
      enforceOn: [
        'apps/web/package.json',
        'packages/web/ui/package.json',
        'packages/shared/ui/package.json',
        'packages/shared/core/package.json',
      ],
    },
    {
      name: 'shared-core',
      version: '*',
      enforceOn: ['apps/web/package.json'],
    },
    {
      name: 'shared-icon',
      version: '*',
      enforceOn: ['apps/web/package.json'],
    },
    {
      name: 'shared-ui',
      version: '*',
      enforceOn: ['apps/web/package.json'],
    },
    {
      name: 'web-ui',
      version: '*',
      enforceOn: ['apps/web/package.json'],
    },
    {
      name: '@tailwindcss/typography',
      version: '^0.5.4',
      enforceOn: [
        'packages/web/ui/package.json',
        'packages/shared/ui/package.json',
      ],
    },
    {
      name: '@testing-library/react',
      version: '^14.0.0',
      enforceOn: ['packages/web/ui/package.json'],
    },
    {
      name: 'eslint',
      version: '^7.32.0',
      enforceOn: [
        'packages/web/ui/package.json',
        'packages/shared/ui/package.json',
      ],
    },
    {
      name: 'tsup',
      version: '^6.1.3',
      enforceOn: [
        'packages/web/ui/package.json',
        'packages/shared/ui/package.json',
        'packages/shared/icon/package.json',
      ],
    },
    {
      name: 'typescript',
      version: '^4.5.2',
      enforceOn: [
        'packages/web/ui/package.json',
        'packages/shared/ui/package.json',
        'packages/shared/icon/package.json',
      ],
    },
    {
      name: 'ts-jest',
      version: '^29.1.1',
      enforceOn: [
        'packages/web/ui/package.json',
        'packages/shared/ui/package.json',
        'packages/shared/core/package.json',
      ],
    },
    {
      name: '@svgr/cli',
      version: '^7.0.0',
      enforceOn: ['packages/shared/icon/package.json'],
    },
    {
      name: '@reduxjs/toolkit',
      version: '^1.9.5',
      enforceOn: ['packages/shared/core/package.json'],
    },
    {
      name: '@types/react-redux',
      version: '^7.1.25',
      enforceOn: ['packages/shared/core/package.json'],
    },
    {
      name: '@vitejs/plugin-react-swc',
      version: '^3.3.2',
      enforceOn: ['packages/shared/core/package.json'],
    },
    {
      name: 'vite',
      version: '^4.0.0',
      enforceOn: ['packages/shared/core/package.json'],
    },
  ],
};

module.exports = packageConfig;
