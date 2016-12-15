401 JS -- class 02 gulp, npm, ref vs val, errors
===

## Gulp Resources

## package.json Resources
* Read [about package.json]

## Error Resources
* Read [node Error docs]

## Learning Objectives
<!-- unordered list of learning objectives --> 

## Overview
#### package.json
* a package.json is a config file used for configuring metadata about a node project
* It only requires a name and version filed, but a typical package.json has much more inforamtion
* dependencies vs dev-dependencies
 * dependencies - a list of packages required to run the main program
 * dev-dependencies - a list of packages required to work on the project
* npm scripts are used to manage common tasks for working a node project  
* Setting up a project
 * create a new directory named after your project
 * navagate inside your directory
 * run `npm init` and answer the questions
 * now you should find a package.json inside your current directory :)

#### Node Errors
###### Error 
* a generic error 
* `.stack` - a **String** describe the point in the code where the `Error` was instantiated
* `.message` - a **String** description set by calling the `new Error(message)`  

###### ReferenceError
* indicates that an attempt is being made to access a variable that is not defined
* `ReferenceError` is a subclass of `Error`  

###### SyntaxError
* indicates a program is not valid javascript
* `SyntaxError` is a subclass of `Error`  

###### TypeError
* indicates that a provided argument is not an allowable type
* `TypeError` is a subclass of `Error`    

###### SystemError
* `.code` - A **String** describing the error code
* `.errno` - A **Number** describing the error code
* `.syscall` - A **String** describing the syscall that failed
* `SystemError` is **not** a subclass of `Error`
* Common System Errors
 * `EACCESS` - An attempt to access a file without the right permissions
 * `EADDRINUSE` - An attempt to start a server on a PORT that is allready in use
 * `ECONNREFUSED` - A connection was deliberatly refused by the target machine
 * `ECONNRESET` - A connection was forcibly closed by a peer
 * `EEXIST` - A file exists and the attempted action required that it didnt
 * `EISDIR` - An action expected to act on a file but found a directory
 * `EMFILE` - To many files were open for your operating system to handle
 * `ENOENT` - An action expected a file, but did not find one
 * `ENOTDIR` - An action expected a directory, but found something else
 * `ENOTEMPTY` - An action expected an empty directory, but found one with data in it
 * `EPERM` - An attempt to do something that you currently dont have permissions to do
 * `EPIPE` - An attempt to write data to a connection that had been closed

<!--links -->

<!-- to use links like this just put [link name] somwhere -->
[node Error docs]: https://nodejs.org/dist/latest-v6.x/docs/api/errors.html
[about package.json]: https://docs.npmjs.com/files/package.json
