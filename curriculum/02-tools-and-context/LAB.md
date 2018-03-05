![cf](https://i.imgur.com/7v5ASc8.png) 02: Tools and Context
======

## Submission Instructions
* Work in a fork of this repository
* Work in a branch on your fork
* Write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-susan`
* Open a pull request to this repository
* Submit on canvas a question and observation, how long you spent, and a link to your pull request

## Configuration 
Configure the root of your repository with the following files and directories. Thoughtfully name and organize any additional configuration or module files.
* **README.md** - contains documentation
* **.gitignore** - contains a [robust](http://gitignore.io) `.gitignore` file 
* **.eslintrc.json** - contains the course linter configuratoin
* **.eslintignore** - contains the course linter ignore configuration
* **package.json** - contains npm package config
  * create a `lint` script for running eslint
  * create a `test` script for running tests
* **lib/** - contains module definitions
* **\_\_test\_\_/** - contains unit tests

## Feature Tasks

##### FP Module
Create a module in the lib/ directory named fp.js that exports an object and it's associated methods. Create stand alone `map`, `filter`, `reduce`, and `slice` functions that use the `call` and `apply` function methods. In each function, error-check all parameters and throw an `Error` (with a meaningful message) if the function is invoked with invalid arguments. Do not use any third party libraries in the FP module - only use `jest` for testing.

##### Method Requirements
* `fp.map` and `fp.filter` should have the function signature `(callback, collection) => Array`
* `fp.reduce` should have the function signature `(callback, initialState, collection) => data`
* `fp.slice` should have the function signature `(begin, end, collection) => Array`

## Testing
##### FP Module Tests
Create a NodeJS module in the \_\_test\_\_/ directory named `fp.test.js` that asserts the correctness of the fp module.  

1. Use the `describe` and `it` (or `test`) methods to define descriptive tests and increase readablity
1. Each `it` callback should aim to test a small, well defined, feature of a function - this may include:
  * tests that ensure the fp module functions correctly with error-check parameters
  * tests that the correct errors are thrown with invalid arguments exist
  * tests to ensure that the fp module functions return the correct results when invoked with valid arguments

##  Documentation
In your `README.md`, describe the exported values of each module you have defined. Every function description should include it's airty (expected number of parameters), the expected data for each parameter (data-type and limitations), and it's behavior (for both valid and invalid use). Feel free to add any additional information in your `README.md` that you would like.