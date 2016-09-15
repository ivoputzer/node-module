const {ok, equal} = require('assert')
const {spawnSync:spawn} = require('child_process')

describe('module/bin', function(){
  Object
    .keys(process.env)
    .filter(prop => /npm_package_bin/.test(prop))
    .forEach(function(prop){
      it(`has executable for ${prop}`, () => {
        equal(spawn(process.env[prop]).error, undefined)
      })
    })
})


