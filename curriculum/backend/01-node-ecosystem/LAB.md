![CF](https://camo.githubusercontent.com/70edab54bba80edb7493cad3135e9606781cbb6b/687474703a2f2f692e696d6775722e636f6d2f377635415363382e706e67) 01: Node Ecosystem
===

## Submission Instructions
  * work in a fork of this repository
  * work in a branch on your fork
  * write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-susan`
  * submit a pull request to this repository
  * submit a link to your pull request on canvas
  * submit a question, observation, and how long you spent on canvas  

## Resources  
* [node assert docs](https://nodejs.org/dist/latest-v4.x/docs/api/assert.html)
* [mocha docs](http://mochajs.org/#getting-started)

## Requirements

#### Configuration  
<!-- list of files, configurations, tools, etc that are required -->
* include the following:
  * **README.md** - contains documentation about your lab
  * **.gitignore** - contains a robust `.gitignore` file
  * **.eslintrc** - contains the provided `.eslintrc` file
  * **.eslintignore** - contains the provided `.eslintignore` file
  * **lib/** - should contain your modules
  * **test/** - should contain your unit tests

#### Feature Tasks  
* create a node.js module (`greet.js`) that exports a single function
  * the `greet` function should have a single parameter that should expect a string as it's input
  * the `greet` function should return the input name, concatenated with "hello <name>"
  * the `greet` function should return `null` if the input is not a string
* create a node.js module named `arithmetic.js`
  * this module should have `add` and `sub` methods
  * the `add` method should contain 2 parameters
    * these parameters should be numbers and the method should return the sum of the 2 numbers
  * the `sub` method should contain 2 parameters
    * these parameters should be numbers and the method should return the first number minus the second number
* decide on the expected behavior for non-number inputs

#### Testing  
* write a test the expects the greet module to return "hello world!"
  * this should happen when invoked with "world!" as a parameter
* write a test for the `add` and `subtract` methods on the arithmetic module
  * this should ensure that your functions work with number inputs

####  Documentation  
* write a description of your project (this should be in your `README.md` file)

###### BONUS 1pt
* write a test that expects the greet module to return null when you use non string values
* write a test that ensures the functions work as expected with non number inputs

## Rubric  
* 2pts configuration
* 3pts feature tasks
* 3pts tests
* 2pts documentation
