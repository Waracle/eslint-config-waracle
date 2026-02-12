# ESLint Config Waracle

> [ESLint configs](https://eslint.org/docs/user-guide/configuring) for [Waracle JavaScript Style Guide](https://waracle.com) heavily based on the excellent [Airbnb](https://www.npmjs.com/package/eslint-config-airbnb) rule set.

## Installation

The config is in the main npm registry so no authentication is required and it's licensed under [MIT](./LICENSE.md)

```sh
npm install eslint-config-waracle --save-dev
```

## Usage

### Default

For non-TypeScript projects, use

In `.eslintrc.json`:

```json
{
  "extends": ["waracle"]
}
```

### Typescript

For TypeScript projects use the configuration _typescript_

```json
{
  "extends": ["waracle/typescript"]
}
```

### Sonarcloud

For projects using [SonarCloud](https://sonarcloud.io), **also** use the configuration _sonarcloud_

```json
{
  "extends": ["waracle", "waracle/sonarcloud"]
}
```

OR

```json
{
  "extends": ["waracle/typescript", "waracle/sonarcloud"]
}
```

## Rules

- [eslint](https://www.npmjs.com/package/eslint)
- [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)

## Contributing

PRs are welcome but please follow the commit message [template](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit) enforced using [commitizen](https://commitizen.github.io/cz-cli/)

## Versioning

[Semantic-Release] will automatically version and deploy via github actions

## License

[MIT](./LICENSE.md)
