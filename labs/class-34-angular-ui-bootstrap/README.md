![cf](https://i.imgur.com/7v5ASc8.png) Lab 34 - Angular UI Bootstrap
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
  * Include the `angular-ui-bootstrap` and `bootstrap-sass` modules as application dependencies
  * Implement an accordion menu that will hide/show "sections" of content on the homepage
    * **note:** this should be fully styled and be creative with it's usage - this is up to you to determine
  * Implement 1 additional, fully styled, `angular-ui-bootstrap` UI feature - this can be anything included within the module (carousel, pager, modal, etc)
