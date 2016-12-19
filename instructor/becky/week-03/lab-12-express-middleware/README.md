![cf](https://i.imgur.com/7v5ASc8.png) lab 12 express middleware
======

# To Submit this Assignment
  * fork this repository
  * write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-duncan`
  * push to your repository
  * submit a pull request to this repository
  * submit a link to your PR in canvas
  * write a question and observation on canvas

# Directions
* this lab is an extension of lab-11
 * use the same fork from lab-11
* add the express middleware `morgan` to your app
* write an `error-response` module that is an express middleware
 * should add a method to the respnose object of a request `res.sendError`

## `res.sendError`
* should take in an error as first paramiter
* should log the `err.message` to standard error
* if the error is an `AppError`
 * respond with err.statusCode and err.responseMessage
* if ther error is **not** an `AppError`
 * respond with statusCode 500 and your server error message
