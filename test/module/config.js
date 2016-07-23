const {fail, ok, equal} = require('assert')
const {exec} = require('child_process')

describe('test/module/config', function () {
  it('enables npm git version tags', (done) => {
    exec('npm get git-tag-version', is('false').bind(done))
  })
  it('disables npm progress bar', (done) => {
    exec('npm get progress', is('false').bind(done))
  })
  it('disables package analytics', () => {
    const {npm_package_config_analytics:analytics} = process.env
    equal(analytics, 'false')
  })
})

function is(expected){
  return function(err, stdout){
    equal(stdout.trim(), expected.trim())
    this()
  }
}
