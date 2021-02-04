module.exports = {
  extends: ["eslint:recommended", "airbnb", "prettier"],
  rules: {
    "no-shadow": "off",
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
        allowAfterThis: true,
      },
    ],
    "class-methods-use-this": "off",
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
