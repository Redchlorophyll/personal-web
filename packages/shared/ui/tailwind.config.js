const tailwindConfig = require('tailwind-config');

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...tailwindConfig.default,
  content: [
    // app content
    `src/**/*.{js,ts,jsx,tsx}`,
    // include packages if not transpiling
    // "../../packages/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
    colors: {
      ...tailwindConfig.default.theme.colors,
    },
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
  variants: {
    scrollbar: ['rounded'],
  },
};
