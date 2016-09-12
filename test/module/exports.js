const {deepEqual, doesNotThrow} = require('assert')

describe('test/module/exports', function(){
  it('returns an empty object', () => {
    const mainFile = process.env.npm_package_main || process.cwd()
        , exports = require.main.require(mainFile)
    deepEqual(exports, {})
  })
  it('has a compliant project manifest', () => {
    const boundFn = require.main.require.bind(require.main, process.env.npm_package_main)
    doesNotThrow(boundFn)
  })
})
