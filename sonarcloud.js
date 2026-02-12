const sonarjs = require('eslint-plugin-sonarjs');
const base = require('./base');

module.exports = [...base, sonarjs.configs.recommended];
