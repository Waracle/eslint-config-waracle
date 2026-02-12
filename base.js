const airbnbExtended = require('eslint-config-airbnb-extended');
const prettier = require('eslint-config-prettier');
const js = require('@eslint/js');
const jest = require('eslint-plugin-jest');

module.exports = [
  js.configs.recommended,
  ...airbnbExtended.configs.recommended,
  prettier,
  {
    rules: {
      'class-methods-use-this': 'off',
      'no-await-in-loop': 'off',
      'no-restricted-syntax': 'off',
      'no-shadow': 'off',
      'no-template-curly-in-string': 'off',
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          js: 'never',
          jsx: 'never',
          ts: 'never',
          tsx: 'never',
        },
      ],
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: ['**/*.spec.ts', '**/*.spec.tsx'],
        },
      ],
      'import/prefer-default-export': 'off',
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
    files: ['**/*.spec.ts'],
    plugins: {
      jest,
    },
    rules: {
      ...jest.configs.recommended.rules,
      'jest/no-disabled-tests': 'warn',
      'jest/no-focused-tests': 'error',
      'jest/no-identical-title': 'error',
      'jest/prefer-to-have-length': 'warn',
      'jest/valid-expect': 'error',
    },
  },
];
