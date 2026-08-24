const {describe, it} = require('node:test')
const assert = require('node:assert')
const {ESLint} = require('eslint')

const baseConfig = require('../base')
const typescriptConfig = require('../typescript')
const sonarcloudConfig = require('../sonarcloud')
const indexConfig = require('../index')

describe('eslint-config-waracle', () => {
  it('should export valid flat config arrays', () => {
    assert.ok(Array.isArray(baseConfig), 'baseConfig should be an array')
    assert.ok(
      Array.isArray(typescriptConfig),
      'typescriptConfig should be an array',
    )
    assert.ok(
      Array.isArray(sonarcloudConfig),
      'sonarcloudConfig should be an array',
    )
    assert.strictEqual(
      indexConfig,
      baseConfig,
      'indexConfig should match baseConfig',
    )
  })

  it('should lint JavaScript code without errors using base config', async () => {
    const eslint = new ESLint({
      overrideConfigFile: true,
      overrideConfig: baseConfig,
    })

    const code = `export const add = (a, b) => a + b;\n`
    const results = await eslint.lintText(code, {filePath: 'src/math.js'})

    assert.strictEqual(results[0].errorCount, 0, 'Should have 0 errors')
  })

  it('should lint Jest spec files without errors using base config', async () => {
    const eslint = new ESLint({
      overrideConfigFile: true,
      overrideConfig: baseConfig,
    })

    const code = `describe('math', () => {
  it('adds numbers', () => {
    expect(1 + 1).toBe(2);
  });
});
`
    const results = await eslint.lintText(code, {filePath: 'src/math.spec.ts'})

    assert.strictEqual(results[0].errorCount, 0, 'Should have 0 errors')
  })

  it('should lint TypeScript code without errors using typescript config', async () => {
    const eslint = new ESLint({
      overrideConfigFile: true,
      overrideConfig: [
        ...typescriptConfig,
        {
          languageOptions: {
            parserOptions: {
              projectService: {
                allowDefaultProject: ['src/*.ts'],
              },
            },
          },
        },
      ],
    })

    const code =
      'export const greeting = (name: string): string => `Hello, ${name}`;\n'
    const results = await eslint.lintText(code, {filePath: 'src/greeting.ts'})

    assert.strictEqual(results[0].errorCount, 0, 'Should have 0 errors')
  })

  it('should lint JavaScript code with sonarcloud config', async () => {
    const eslint = new ESLint({
      overrideConfigFile: true,
      overrideConfig: sonarcloudConfig,
    })

    const code = `export const multiply = (x, y) => x * y;\n`
    const results = await eslint.lintText(code, {filePath: 'src/multiply.js'})

    assert.strictEqual(results[0].errorCount, 0, 'Should have 0 errors')
  })
})
