/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ['@simple-checkout/eslint-config/next.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
};
