![CF](https://i.imgur.com/7v5ASc8.png) Lab 01: Modular Patterns and Testing
===

## To Submit this Assignment
  * fork this repository
  * write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-duncan`
  * push to your repository
  * submit a pull request to this repository
  * submit a link to your PR in canvas
  * write a how much time you spent, a question, and an observation on canvas

## Resources
* [Node assert docs](https://nodejs.org/dist/latest-v4.x/docs/api/assert.html)
* [Mocha docs](http://mochajs.org/#getting-started)

## Project Stucture
* Create these directores
 * lib -> for modules
 * test -> for test files
* Include a .gitignore
* Include the coures .eslintrc

## Directions
* Create a module named greet in the lib directory that exports a single function
* The greet module should take in a name as a parameter and returnd shte string `'hello ' + name`

## Tests
* Your code should pass the **.eslintrc** included in this repository.  
* Write a test that expects the string 'hello test user' to be and use your greet module to make it pass.

## Bonus:
* For an extra point, create a command line utility that will be run using `node greet.js 'some name'` and will pass the input contained in that argument to the greet function and output the result to the screen.
* For a second bonus point, write a test that makes sure that the arguments are being processed.
