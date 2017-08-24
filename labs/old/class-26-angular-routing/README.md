![cf](https://i.imgur.com/7v5ASc8.png) Lab 26 - Angular Routing
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

## Directions
  * Create these directories to organize your code:
    * app
    * app/config
    * app/view
    * app/view/\<your-views-dir\>
    * app/scss
  * Include a **main.scss** file
    * add a layer of "lo-fi" styling - only use the following colors: `#fff`, `#000`, `#444`, `#888`
  * Include an **entry.js** file
    * use `require.context` to add all of your angular construct definitions

## Requirements
  * Create three views `/#/home`, `/#/signup/`, `/#/gallery`
    * each view should have a controller
    * each controller should have a title property
    * each view should have a template
    * the template should use an angular expression to set the content of an `<h1>` to its controllers title property
    * each view should include a `.scss` file

## Tests
  * Write a test to ensure that the `title` property is set for each controller
    * `/test/home-controller-test.js`
    * `/test/gallery-controller-test.js`
    * `/test/signup-controller-test.js`
