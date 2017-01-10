![cf](https://i.imgur.com/7v5ASc8.png) Lab 19 - Intro to Angular and Webpack
======

## To Submit this Assignment
  * create a new branch off of the branch that you created yesterday (lab-16)
  * write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-brian`
  * push to your repository
  * submit a pull request to this repository
  * submit a link to your PR in canvas
  * write a question and observation on canvas

## Include
  * `.eslintrc`
  * `.gitignore`
  * `package.json`
    * create an npm `watch` script for running `webpack-dev-server --inline --hot`
    * create an npm `lint` script for linting your JS with `eslint`
  * **ignore the build directory**
  * `webpack.config.js`

## Description
  * create an **app/index.html** file that contains your HTML markup
    * *hint:* be sure to include the `ng-app` directive to point to your default angular module
  * create an **app/entry.js** to house your application logic
    * require in your **app/scss/main.scss**
  * setup an angular module and create a controller for your application logic

## Client Functionality
  * in your `index.html` file, include an `input` and `pre` tag that will be used to dynamically update the text of your cow
  * the `pre` tag should be a preview, showing the result of what was typed into the `input` field *(two way data-binding)*
  * add custom styles *(no wireframe based requirements - just be creative!)*

## Bonus
  * **1pt** add a button that uses the `ng-click` directive to populate a second `pre` tag with the current `pre` tag's state
  * **1pt** add an additional button that uses the `ng-click` directive to reset the second `pre` tag with the content it last showed
