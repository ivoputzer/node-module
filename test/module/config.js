const {equal} = require('assert')

describe('test/module/config', function () {
  it('has analytics disabled', () => {
    equal(process.env.npm_package_config_analyze, 'false')
  })
})
