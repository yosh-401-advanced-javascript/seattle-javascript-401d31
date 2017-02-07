![cf](https://i.imgur.com/7v5ASc8.png) Lab 33 - Testing Components
======

## To Submit this Assignment
  * create a fork of this repository
  * push to your repository
  * submit a pull request to this repository
  * submit a link to your PR in canvas
  * write a question and observation on canvas

## Include
  * `.eslintrc`
  * `.babelrc`
  * `.gitignore`
  * `package.json`
    * create an npm `build` script for running `webpack`
    * create an npm `build-watch` script for running `webpack-dev-server --inline --hot`
    * create an npm `test` script for running karma and all associated tests
    * create an npm `test-watch` script for running karma on file system changes
    * create an npm `lint` script for linting your JS with `eslint`
  * **ignore the build directory**
  * `webpack.config.js`
    * this should include all of the production environment configurations used in lecture code
  * `karma.config.js`
  * **note:** *do not* forget to `npm uninstall -D camelcase` and reinstall it to use version 3.0 (`npm i -S camelcase@3.0.0`)

## Description
  * Create a custom `filter` that will allow for fuzzy searching of galleries
  * Create a custom `filter` that will uppercase the output of an angular expression
  * Create a custom `filter` that will lowercase the output of an angular expression
  * Create a `directive` that will allow for the use of a custom `<sidebar></sidebar>` element
