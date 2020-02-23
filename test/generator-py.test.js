const path = require('path')

const helpers = require('yeoman-test')
const assert = require('yeoman-assert')

const git = 'git@github.com:kaelzhang/generator-py.git'
const name = 'generator-py'
const description = 'Yeoman generator to create a python project with test/coverage ready'

describe('generator-py', () => {
  it('could generate a python project', () =>
    // The object returned acts like a promise, so return it to wait until the process is done
    helpers.run(path.join(__dirname, '../generators/app'))
    // .withOptions({foo: 'bar'})      // Mock options passed in
    // .withArguments(['name-x'])        // Mock the arguments
    .withPrompts({
      git,
      name,
      description
    })   // Mock the prompt answers
    // .withLocalConfig({lang: 'en'}) // Mock the local config
    .then(() => {
      // assert something about the generator

      assert.file([
        'generator_py/__init__.py',
        'test/test_generator_py.py',
        '.gitignore'
      ])
    })
  )
})
