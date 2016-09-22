![cf](https://i.imgur.com/7v5ASc8.png) lab-03-fs-async
======

## To Submit this Assignment
  * fork this repository
  * write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-duncan`
  * push to your repository
  * submit a pull request to this repository
  * submit a link to your PR in canvas
  * write a question and observation on canvas

## Description
* create these directorys to organize your code
 * lib
 * data
 * test
* create three diffrent json files that model a read world object in the data directory for example

``` json
{
  "name": "Grocery List",
  "user": "slugbyte",
  "items": ["fish", "apple", "chips"]
}
``` 
  
* create a **readFiles** module that will read a array of filepaths in parallel, parse the json, and return in an array of parsed objects
* create a CLI that uses your file reading module to print the contents of a list of JOSN files provided on `process.argv`
* also, you must guarantee that three files are read and console logged in the order they were passed in on `process.argv`
* you can use any method of handling async except nested callback. aka. dont use nested calls to `fs.readFile` with anynomus function callbacks
 
## Test:
* write a test that guarantees your readFiles module will read all of the files passed in
* write a test that guarantees your CLI prints the files in the order that the filepath arguments were provided

##Rubric:
  * Async Handling: 4pts
  * Use of fs: 2pts
  * Testing: 4pts
