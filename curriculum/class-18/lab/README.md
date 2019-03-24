# LAB: Socket.io

Create a multi-client, event driven "smart app"

## Before you begin
Refer to *Getting Started* in [lab-instructions.md](../../../reference/submission-instructions/labs.md) for complete setup instructions

## Getting Started

## Requirements

Refactor the provided application using best practices for modularization, asynchronous file access, and test-ability.

The application currently uses a nested callback to accept a file from the user and perform various operations on it. It throws errors on failure and logs out success messages.

The task for today is to refactor the application to use events to surface errors and completion status, while also moving away from the big un-testable callback.

### Assignment
* The application must accept a filename as a command line parameter
  * Read the file from the file system
  * Convert it's contents to upper case
  * Write it back to the file system
* Following the write operation, report back to the user (console.log) the status
* Any and all errors must be thrown

#### Server
* Create a socket.io server
* Setup listeners for `file-save` and `file-error` events
* When they occur, `emit()` the appropriate event and payload to clients (specficially, the 'logger' will pick this up)

#### Logger
* Connect to the socket.io server
  * Listen for `err` and `save` events
  * console.log() both error and save messages

#### Application
* Connect to the socket.io server
* Refactor the use of callbacks for fs operations into promises
  * You can use util.promisify() to do this.
* Separate the functionality of that big callback into it's parts, so that you can run them independently as well as test.
  * Read in a file
  * Uppercase it's contents (stringify the buffer, upper case it, re-buffer-ize it)
  * Save back to the file.
* Rather than throwing errors and console.log() inline, fire `file-error` and `file-save` events
* Modularize the system
  * File Reading/Writing/Uppercasing should happen in one module
    * Each operation should be in a separate function
    * Read/Write should be done in promises, not callbacks


### Operations
* Start your server on port 3000
* In a separate terminal window, start your logger (it should connect to the server)
* In a separate terminal window, run the application from the CLI to alter the file
* You should observe the event stream in the client and errors on the server


### Testing
* app.js - Write tests around all of your units
  * File Read, File Save, Uppercase
  * Mock the fs module methods so that your tests don't use actual files
* logger.js - Test event handler functions (not event listeners themselves)
  * Use spies to help testing your logger methods (assert that console.log was called right)


### Assignemnt Submission Instructions
Refer to the [lab-instructions.md](../../../reference/submission-instructions/labs.md) for the complete lab submission process and expectations

* Your server need not be deployed to Heroku for this lab
