const {equal} = require('assert')

describe('module/config', function(){
  it('enables git tags within `npm version` command', () => {
    equal(process.env.npm_config_git_tag_version, 'true')
  })
})
