# ESLint Config Waracle

> [ESLint configs](https://eslint.org/docs/latest/use/configure/configuration-files) for [Waracle JavaScript Style Guide](https://waracle.com) based on the [Airbnb Extended](https://www.npmjs.com/package/eslint-config-airbnb-extended) rule set with ESLint Flat Config support.

## Installation

The config is in the main npm registry so no authentication is required and it's licensed under [MIT](./LICENSE.md).

```sh
npm install eslint-config-waracle --save-dev
```

## Usage

This configuration is designed for ESLint's Flat Config system (`eslint.config.js` or `eslint.config.mjs`).

### Default (JavaScript)

For JavaScript projects:

In `eslint.config.mjs`:

```javascript
import waracle from 'eslint-config-waracle'

export default [...waracle]
```

Or in CommonJS (`eslint.config.js`):

```javascript
const waracle = require('eslint-config-waracle')

module.exports = [...waracle]
```

### TypeScript

For TypeScript projects, use the `waracle/typescript` export:

In `eslint.config.mjs`:

```javascript
import waracleTs from 'eslint-config-waracle/typescript'

export default [...waracleTs]
```

Or in CommonJS (`eslint.config.js`):

```javascript
const waracleTs = require('eslint-config-waracle/typescript')

module.exports = [...waracleTs]
```

### SonarCloud

For projects using [SonarCloud](https://sonarcloud.io), use the `waracle/sonarcloud` export:

In `eslint.config.mjs`:

```javascript
import waracleSonar from 'eslint-config-waracle/sonarcloud'

export default [...waracleSonar]
```

Or in CommonJS (`eslint.config.js`):

```javascript
const waracleSonar = require('eslint-config-waracle/sonarcloud')

module.exports = [...waracleSonar]
```

## Rules

- [eslint](https://www.npmjs.com/package/eslint)
- [eslint-config-airbnb-extended](https://www.npmjs.com/package/eslint-config-airbnb-extended)
- [eslint-plugin-sonarjs](https://www.npmjs.com/package/eslint-plugin-sonarjs)
- [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier)
- [eslint-plugin-jest](https://www.npmjs.com/package/eslint-plugin-jest)

## Contributing

PRs are welcome but please follow the commit message [template](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit) enforced using [commitizen](https://commitizen.github.io/cz-cli/).

## Versioning

[Semantic-Release](https://github.com/semantic-release/semantic-release) will automatically version and deploy via GitHub Actions.

## License

[MIT](./LICENSE.md)
