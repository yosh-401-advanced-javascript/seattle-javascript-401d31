401 JS -- Lab 02 build tools
===

## Submision Instructions
  * Work in a fork of this repository
  * Work in a branch on your fork
  * Write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-duncan`
  * Submit a pull request to this repository
  * Submit a link to your pull request on canvas
  * Submit a question, observation, and how long you spent on canvas  
  
## Learning Objectives  
* Students will be able to manage a dependiecies with a package.json
* Students will be able to create automated tasks using gulp
* Students will be able to create automated tasks using npm scripts

## Resources  
* [Gulp API docs](https://github.com/gulpjs/gulp/blob/master/docs/API.md)  

## Requirements  
#### Configuration  
* add a gulpfile **gulpfile.js** 
 
#### Feature Tasks  
* Create a gulpfile
 * with a `test` task for running mocha
 * with a `lint` task for running eslint
 * with a `dev` task for running `test` and `lint` when any javascript project file chages
 * with a `default` task fro running `test` and `lint` once
* Add `lint` script to the **package.json** for running eslint
* Add `test` script to the **package.json** for running mocha

###### BONUS 1pt
* Create a CLI that uses command line arguments to pass a name into the greet function
 * The cli should be in new module named index.js

####  Documentation  
* In your **README.md** write documation to explain how Javascript's data types are passed by value or passed by reference

#### Testing  
###### BONUS 1pt
* Write a test for the index.js CLI

## Rubric  
* 2ps Configuration
* 3pts Feature Tasks
* 3pts Tests
* 2pts Documentation
