import * as path from 'path';

const rules = [
  './errors',
  './imports',
  './react-hooks',
  './react',
  './style',
  './es6',
  './variables',
  './typescript',
].map((rule) => require.resolve(path.join(__dirname, rule)));

export default {
  env: {
    browser: true,
    es2022: true,
    node: true,
  },

  extends: ['eslint:recommended', 'prettier', ...rules],

  rules: {
    strict: 'error',
  },
};
