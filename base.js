const airbnbExtended = require('eslint-config-airbnb-extended')
const prettier = require('eslint-config-prettier')
const js = require('@eslint/js')
const jest = require('eslint-plugin-jest')

module.exports = [
  js.configs.recommended,
  airbnbExtended.plugins.stylistic,
  airbnbExtended.plugins.importX,
  airbnbExtended.plugins.node,
  ...airbnbExtended.configs.base.recommended,
  prettier,
  {
    rules: {
      'class-methods-use-this': 'off',
      'no-await-in-loop': 'off',
      'no-restricted-syntax': 'off',
      'no-shadow': 'off',
      'no-template-curly-in-string': 'off',
      'import-x/extensions': [
        'error',
        'ignorePackages',
        {
          js: 'never',
          jsx: 'never',
          ts: 'never',
          tsx: 'never',
        },
      ],
      'import-x/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: ['**/*.spec.ts', '**/*.spec.tsx'],
        },
      ],
      'import-x/prefer-default-export': 'off',
      'no-underscore-dangle': [
        'error',
        {
          allow: ['_id', '__v'],
          allowAfterThis: true,
        },
      ],
    },
  },
  {
    files: ['**/*.spec.ts', '**/*.spec.tsx'],
    ...jest.configs['flat/recommended'],
    settings: {
      jest: {
        version: 29,
      },
    },
    rules: {
      ...jest.configs['flat/recommended'].rules,
      'jest/no-disabled-tests': 'warn',
      'jest/no-focused-tests': 'error',
      'jest/no-identical-title': 'error',
      'jest/prefer-to-have-length': 'warn',
      'jest/valid-expect': 'error',
    },
  },
]
