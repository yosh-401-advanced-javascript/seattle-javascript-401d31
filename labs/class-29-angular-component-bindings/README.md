![cf](https://i.imgur.com/7v5ASc8.png) Lab 29 - Component Bindings
======

## To Submit this Assignment
  * work on a new branch from your previous fork
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

## Clone
  * Clone, setup, and run the `slugram-backend` application in order for your angular app to communicate with the server
  * [slugram-backend](https://github.com/slugbyte/slugram-backend)
    * **note** - this application should be running on the `staging` branch
    * **note** - **DO NOT** include this application with your assignment submission

## Description
  * Create these directories to organize your code:
    * app
    * app/config
    * app/view
    * app/view/home
    * app/view/landing
    * app/scss
    * app/scss/lib
    * app/scss/lib/base
    * app/scss/lib/layout
    * app/scss/lib/theme
    * app/service
    * app/component
    * app/component/gallery
    * app/component/gallery/create-gallery
    * app/component/gallery/edit-gallery
    * app/component/gallery/gallery-item
    * app/component/landing
    * app/component/navbar
  * include a **main.scss**
  * include an `scss` partial for your `edit-gallery` and `gallery-item` components
  * style your application to meet the `galleryedit.png` and `update.png` mockups provided in the `wireframes` directory of this repo

## Functional Requirements
  * Create a component for displaying, editing, and deleting a gallery
  * This should be configured to pass a `gallery` object into it - using one way data binding
  * This should include a button that will trigger a **DELETE** request to the `slugram-backend` API and remove the current gallery information from the view
  * Create an `edit-gallery` component that is nested in the component used to display gallery information
  * A **submit event** should trigger a **PUT** request to the `slugram-backend` API which will update the gallery info and then update the view to reflect the changes

## POST `/api/gallery`
  * use this route to create a gallery
  * headers required
    * `Authorization` :  `Bearer <token>`
    * `Accept` :  `application/json`
    * `Content-Type` :  `application/json`
  * request body requirements
    * name: **String**
    * desc: **String**  
  * should return `200` response
  * this should return an object with the data for the gallery that was just created

## GET `/api/gallery`
  * use this route to get an array of all of a users galleries
  * headers required
    * `Authorization` :  `Bearer <token>`
    * `Accept` :  `application/json`
  * should return a `200` response
  * this should return an array of the last 50 galleries created by the user   

## PUT `/api/gallery/<galleryID>`
  * use this route to update an gallery with new info
  * headers required
    * `Authorization` :  `Bearer <token>`
    * `Accept` :  `application/json`
    * `Content-Type` :  `application/json`
  * should return a `200` response
  * this should return an object with the data for the gallery that was just updated

## DELETE  `/api/gallery/<galleryID>`
  * use this route to delete a gallery
  * headers required
    * `Authorization` :  `Bearer <token>`
    * `Accept` :  `application/json`
  * this should return a `204` response
