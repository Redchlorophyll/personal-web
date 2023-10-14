module.exports = {
  extends: ['next', 'turbo', 'prettier'],
  env: {
    browser: true,
    node: true,
  },
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    'react/jsx-key': 'off',
    'react-hooks/exhaustive-deps': 'off',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', '.'],
          ['~', '.'],
        ],
        extensions: ['.js', '.ts', '.jsx', '.tsx'],
      },
    },
  },
};
