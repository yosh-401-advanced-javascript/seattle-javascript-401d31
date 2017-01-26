![cf](https://i.imgur.com/7v5ASc8.png) Lab 28 - Client Side Auth
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

## Description
  * Create these directories to organize your code:
    * app
    * app/config
    * app/view
    * app/view/home
    * app/view/landing
    * app/scss
    * app/service
    * app/component
    * app/component/gallery
    * app/component/gallery/create-gallery
    * app/component/landing
    * app/component/navbar
  * include a **main.scss**
  * include `.scss` partials in your components
  * use `require.context` to add all of your angular construct definitions

## Functional Requirements
  * Create 2 views: `/#/`, `/#/home/`
    * each view should have its own controller
    * the `/#/` view should be the default landing page
    * the landing page markup should contain `<signup>` and `<login>` components
  * Create an auth service with for making `http` requests to the `slugram-backend` application
    * this should have contain methods for sign up and sign in routes
    * this should have methods to `get` and `delete` a token from local storage
  * Create a sign up component
    * this should have its own controller and use the `controllerAs` syntax
    * this should have a form with username, email, and password fields
    * this should use the auth service to signup and store a token
    * this should redirect the page to `/#/home` on a successful form submit
  * Create a login component
    * this should have its own controller and use the `controllerAs` syntax
    * this should have a form with username and password fields
    * this should use the auth service to login and store a token
    * this should redirect the page to `/#/home` on success
