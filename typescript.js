const airbnbExtended = require('eslint-config-airbnb-extended')
const base = require('./base')

module.exports = [
  ...base,
  airbnbExtended.plugins.typescriptEslint,
  ...airbnbExtended.configs.base.typescript,
  {
    rules: {
      'no-shadow': 'off',
      'no-useless-constructor': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/explicit-member-accessibility': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-parameter-properties': 'off',
      '@typescript-eslint/no-shadow': 'error',
    },
  },
  {
    files: ['*.tsx', '**/*.tsx'],
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },
]
