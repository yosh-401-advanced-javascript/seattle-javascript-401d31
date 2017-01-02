401 JS -- Class 01 Lab modular patterns
===

## Submision Instructions
  * Work in a fork of this repository
  * Work in a branch on your fork
  * Write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-duncan`
  * Submit a pull request to this repository
  * Submit a link to your pull request on canvas
  * Submit a question, observation, and how long you spent on canvas  
  
## Learning Objectives  
* Students will be able to set up a directory for creating an npm package
* Students will be able to create and use CommonJS modules
* Students will be able to write synchronous unit tests

## Resources  
* [Node assert docs](https://nodejs.org/dist/latest-v4.x/docs/api/assert.html)
* [Mocha docs](http://mochajs.org/#getting-started)

## Requirements  
#### Configuration  
<!-- list of files, configurations, tools, ect that are required -->
Your lab directory must include  
* **README.md** -- with a documention about your lab
* **.gitignore** -- with a robust gitignore
* **.eslintrc** -- with the class .eslintrc file
* **.eslintignore** -- with the class .eslintignore
* **.package.json** -- with all dependencies and dev-dependencies 
* **lib/** -- a lib direcotry for holding your modules
* **test/** -- a test directory for holding your unit tests 
 
#### Feature Tasks  
* Create a nodejs module named greet.js that exports a single function
 * The greet function should have a single paramiter name that should expect a string 
 * The greet function should return the input name concatinated with "Hello, " 
 * The greet function should return null if the input is not a string
* Creeate a nodejs module named arithmetic
 * The arithmetic.js module should have `add` and `sub` methods
 * `add` should have to params that should expect a number, it should return the sum of the to numbers 
 * `sub` should have to params that should expect a number, it should return the first argument minus the second argument
 * decide on an expected behavior for non number inputs

#### Testing  
* Write a test the expects the greet module to return "Hello, wolrd!" when invoded with "world!"
* Write a test that expects the greet moudlue to return null when you use non string values
* Write test for the `add` and `subtract` methods on the arithmetic module
 * Write a test that ensures the functions work as you expect with number inputs
 * Write a test that ensures the functions work as expected with non number inputs
 
####  Documentation  
* Write a description of your project in your README.md
