[![Build Status](https://travis-ci.org/kaelzhang/generator-py.svg?branch=master)](https://travis-ci.org/kaelzhang/generator-py)
<!-- [![Coverage](https://codecov.io/gh/kaelzhang/generator-py/branch/master/graph/badge.svg)](https://codecov.io/gh/kaelzhang/generator-py) -->
<!-- optional appveyor tst
[![Windows Build Status](https://ci.appveyor.com/api/projects/status/github/kaelzhang/generator-py?branch=master&svg=true)](https://ci.appveyor.com/project/kaelzhang/generator-py)
-->
<!-- optional npm version
[![NPM version](https://badge.fury.io/js/generator-py.svg)](http://badge.fury.io/js/generator-py)
-->
<!-- optional npm downloads
[![npm module downloads per month](http://img.shields.io/npm/dm/generator-py.svg)](https://www.npmjs.org/package/generator-py)
-->
<!-- optional dependency status
[![Dependency Status](https://david-dm.org/kaelzhang/generator-py.svg)](https://david-dm.org/kaelzhang/generator-py)
-->

# generator-py

Yeoman generator to create a python project with test/coverage ready

## Install

```sh
$ npm i -g generator-py yo
```

## Usage

```sh
# It is recommanded to clone the empty repo first,
# `generator-py` reads the git remote url and set default prompts values.
git clone git@github.com:my-name/my-empty-repo.git

cd my-empty-repo

yo py

# Install dependencies
make install

# run tests
make test
```

## License

[MIT](LICENSE)
