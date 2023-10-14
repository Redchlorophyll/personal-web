const workspace = {
  apps: [
    /* PLOP_INJECT_APP */

    {
      name: 'web',
      value: 'web',
    },
  ],
  packages: [
    /* PLOP_INJECT_PACKAGE */

    {
      name: 'web-ui',
      value: 'web/ui',
    },

    {
      name: 'shared-ui',
      value: 'shared/ui',
    },

    {
      name: 'shared-icon',
      value: 'shared/icon',
    },

    {
      name: 'shared-core',
      value: 'shared/core',
    },
  ],
  packageTypes: [
    {
      name: 'ui',
      value: 'ui',
    },

    {
      name: 'core',
      value: 'core',
    },

    {
      name: 'icon',
      value: 'icon',
    },

    {
      name: 'data',
      value: 'data',
    },
  ],
};

module.exports = workspace;
