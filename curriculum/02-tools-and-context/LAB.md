![cf](https://i.imgur.com/7v5ASc8.png) 02: Tools and Context
======

## To Submit this Assignment
  * fork this repository & create a new branch for your work
  * write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-susan`
  * push to your repository
  * submit a pull request to this repository
  * submit a link to your PR in canvas
  * write a question and observation on canvas

## Directions
  * create a `/lib` and `/test` directory
  * add a robust `.gitignore` file
  * include a `package.json`
  * include the provided `.eslintrc` file
  * create a `lint` script for running eslint
  * create a `test` script for running mocha
  * create a `lib/fp.js` file for holding the following:
    * create stand alone `map`, `filter`, `reduce`, `concat`, and `splice` functions using the `call`, and `apply` methods we discussed today
    * you are welcome to use/experiment with `bind` too!
  * *note:* - all functions should be created using the es6 lexical arrow function syntax

# Tests
  * create a test for each of your custom functions in `lib/fp.js`
    * note - feel free to create additional tests, if you choose!

## Bonus 2pts
  * create a CLI (`index.js`) that will use your new `map` function to uppercase all command line arguments and print them to the screen: 1pt
    * **hint:** - you'll want to check out the `process` object (and it's methods) to get an array of provided command line arguments
  * test your CLI: 1pt
