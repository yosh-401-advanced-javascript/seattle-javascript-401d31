![cf](http://i.imgur.com/7v5ASc8.png) 02: Tools and Context
=====================================


## Learning Objectives
* Students will be able to define npm scripts for automating command line tasks
* Students will be able to control a functions context using call, apply, and bind
* Studnets will be able to handle thrown errors using try and catch 
* Students will be able to interperate the diffent types of errors in Javascript

## Resources 
#### package.json Resources
* read [about package.json]

#### NPM Script Resources
* skim [npm scripts as build tools]
* skim [npm scripts docs]

#### Context resources
* read [mdn this]
* watch [javascript context tutorial]

#### Prototype resources
* skim [mdn new]
* skim [mdn object prototype]
* read [mdn inheritance and the prototype chain]

#### Error Resources
* read [node error docs]

## package.json
The `package.json` file is used to descibe and configure a NodeJS package. The only two fields that are required by a package.json are `name` and `version`. If a package has external dependieces they are list by name and version under the fileds `dependencies` and `devDependencies`. If the core package depenends on an extenral package to run the external package should be listed under `dependencies`. If the external package is only need by its developers (like a testing framework) that package should be listend under `devDependencies`. package.json files can have a `scripts` section where keys can be associated with unix commands. npm scripts have an added benifit that they can run any command line utility (CLI) defined in a dependiecie, without globally installing the CLI on you opperating system. 

## Node Errors
Error messages are super important tools for debuging broken code. Javscript has many built in Error messages, but you can create your own errors through your program. Errors happen not only in development, but while a product is in production. Error logs are usually kept in order to debug applications in production. Writing good error messages is difficult, but a very important skill. 

#### Writing good error messages
A great error message should have the following features
* a timestamp so that a timeline of the error can be made
* a message about the problem that occured
* a message about the cause of the problem
* a consistent format (so that it can be parsed and searched)
* a severity level (low, med high) or (0 - 10)

#### Error
* a generic error
* `.stack` - a **String** describing the point in the code where the `Error` was instantiated
* `.message` - a **String** description set by calling the `new Error(message)`  

#### ReferenceError
* indicates that an attempt is being made to access a variable that is not defined
* `ReferenceError` is a subclass of `Error`  

#### SyntaxError
* indicates a program is not valid javascript
* `SyntaxError` is a subclass of `Error`  

#### TypeError
* indicates that a provided argument is not an allowable type
* `TypeError` is a subclass of `Error`    

#### SystemError
* `.code` - A **String** describing the error code
* `.errno` - A **Number** describing the error code
* `.syscall` - A **String** describing the system call that failed
* `SystemError` is **not** a subclass of `Error`
* Common System Errors
  * `EACCESS` - an attempt to access a file without the right permissions
  * `EADDRINUSE` - an attempt to start a server on a PORT that is already in use
  * `ECONNREFUSED` - a connection was deliberately refused by the target machine
  * `ECONNRESET` - a connection was forcibly closed by a peer
  * `EEXIST` - a file exists and the attempted action required that it didn't
  * `EISDIR` - an action expected to act on a file but found a directory
  * `EMFILE` - too many files were open for your operating system to handle
  * `ENOENT` - an action expected a file, but did not find one
  * `ENOTDIR` - an action expected a directory, but found something else
  * `ENOTEMPTY` - an action expected an empty directory, but found one with data in it
  * `EPERM` - an attempt to do something that you currently don't have permissions to do
  * `EPIPE` - an attempt to write data to a connection that had been closed

## Throw Try Catch
* if an error is thown and is not handled, the program will crash
* `try`/`catch` blocks allow you to safely throw an error and handle it
``` javascript
let userInput = '{'
try {
 let data = JSON.parse(userInput)
 // do something with data
} catch(e) {
  console.error(e)
}
```

### Call, Bind, Apply
* when a function has a `this`, we say that `this` is the function's context
* unlike scope, a function's context can be configured
* if a function is not a property on an object, by default it has no context
* if a function is a property on an object, by default, that object is the context for that function
* `call`, `bind`, and `apply` are function prototype methods that allow us to change the context of a function
* `call` is a method on a function that invokes a function with a specified context and arguments  
  * `call` passes comma separated arguments
* `apply` is a method on a function that invokes a function with a specified context and arguments  
  * `apply` passes arguments from an array  
* note: don't mess with the `__proto__` property - it's slow
  * if you want to determine an object's prototype, use `Object.getPrototypeOf(someObject)`
  * nesting a large amount of prototype methods will have a performance impact on your code - be careful!

<!--links -->
[node error docs]: https://nodejs.org/dist/latest-v6.x/docs/api/errors.html
[about package.json]: https://docs.npmjs.com/files/package.json
[npm scripts as build tools]: https://www.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/
[npm scripts docs]: https://docs.npmjs.com/misc/scripts
[mdn new]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new

[mdn object prototype]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype
[mdn inheritance and the prototype chain]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
[mdn this]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
[Javascript Context Tutorial]: https://www.youtube.com/watch?v=fjJoX9F_F5g
