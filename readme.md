node-module [![Build Status](https://travis-ci.org/ivoputzer/node-module.svg)](https://travis-ci.org/ivoputzer/node-module)

====
this project is meant to be a handy [nodejs][1] module boilerplate. it provides coffeescript and ecmascript6 integrations out of the box. assets are compiled into javascript before they get version-bumped automatically (so they still are available for install over the git protocol).

- coffee-script (file extension `.coffee `)
- babel (file extension `.es`)

## bootstrap a new package

```
git clone ivoputzer/node-module my-module
cd my-modyle
rm -rf .git
git init
git create ivoputzer/my-module
# or alternatively: git remote add origin git@github.com:USERNAME/REPOSITORY.git
npm i
npm version patch

travis setup npm
travis setup releases

```

- install github's utility: [hub][2]

```bash
brew install hub
echo "$(hub alias -s)" >> ~/.bash_profile
```

[1]: https://nodejs.org/
[2]: https://github.com/github/hub
