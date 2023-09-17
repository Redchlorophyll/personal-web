const withTM = require('next-transpile-modules')(['shared-ui']);
const path = require('path');
const workspace = require('../../workspace.ts');

const packages = workspace.packages.map((pckge) => pckge.name);

module.exports = withTM({
  reactStrictMode: true,
  images: {
    domains: ['i.pinimg.com', 'lh3.googleusercontent.com', 'media.licdn.com'],
  },
  experimental: {
    transpilePackages: [...packages],
    outputFileTracingRoot: path.join(__dirname, '../../'),
  },
  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg')
    );

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: /url/ }, // exclude if *.svg?url
        use: ['@svgr/webpack'],
      }
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
});
