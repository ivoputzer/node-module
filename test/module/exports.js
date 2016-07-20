const {deepEqual} = require('assert')

describe('test/module/exports', function () {
  it('exports an empty object', () => {
    deepEqual(require('../..'), {})
  })
})
