module.exports = {
  extends: ["eslint:recommended", "airbnb", "prettier"],
  rules: {
    "class-methods-use-this": "off",
    "no-await-in-loop": "off",
    "no-restricted-syntax": "off",
    "no-shadow": "off",
    "no-template-curly-in-string": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: ["**/*.spec.ts", "**/*.spec.tsx"],
      },
    ],
    "import/prefer-default-export": "off",
    "no-underscore-dangle": [
      "error",
      {
        allow: ['_id'],
        allowAfterThis: true,
      },
    ],
  },
  overrides: [
    {
      files: ["**/*.spec.ts"],
      env: {
        jest: true,
      },
      plugins: ["jest"],
      rules: {
        "jest/no-disabled-tests": "warn",
        "jest/no-focused-tests": "error",
        "jest/no-identical-title": "error",
        "jest/prefer-to-have-length": "warn",
        "jest/valid-expect": "error",
      },
    },
  ],
};
