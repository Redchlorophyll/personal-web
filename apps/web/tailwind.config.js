const tailwindConfig = require('tailwind-config');

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...tailwindConfig.default,
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './modules/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
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
