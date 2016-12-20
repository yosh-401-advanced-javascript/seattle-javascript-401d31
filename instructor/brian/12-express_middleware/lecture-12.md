![cf](http://i.imgur.com/7v5ASc8.png) 12: Express Middleware
=====================================

## Middleware
  * **Overview**
    * middleware functions are functions that have access to the `req` and `res` objects in the middle of the request/response cycle (WRRC)
    * in addition to having access to the `req` and `res` objects, middleware can access the next middleware in the chain by calling `next()`
    * middleware is highly useful for manipulating data on the `req` and `res` objects
    * middleware also allows us the ability to end the WRRC at any point

  * **Types of Middleware**
    * **application level** - lets us bind custom (or prebuilt) middleware components using the `app.use()` construct
    * **router level** - lets us bind router constructs to an instance of `express.Router`
    * **error handling** - lets us handle errors in a single location *(note: you must pass in an `err` property as the first parameter of your callback function defined in an `app.use` call in order to make this work)*
    * **built-in** - this gives us access to methods like: `express.static`
    * **3rd party** - this lets us use 3rd party middleware in our own application by passing them into an `app.use` call - ex: `app.use(morgan('dev'))`

## Express `Router`
  * **Overview**
    * the `express.Router` class provides us with the ability to create route handlers by creating an instance of the `express.Router` object
    * this provides us with a complete and modularized routing system
    * we'll be using this in our `express` API application to create a custom `note-router` with access to `get`, `post`, and `put` routes

## Express API Visualization
  ![visualization](https://s3-us-west-2.amazonaws.com/s.cdpn.io/154088/express-api.png)
