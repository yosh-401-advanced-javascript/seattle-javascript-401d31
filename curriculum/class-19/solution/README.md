# Solution: Socket.io Message Queue Server

## Lab Requirements

### Assignment 1: File Writer
* This is effectively the same solution as from Class 06
* The difference being the use of the queue server instead of straight socket.io
  * Requirement of a server to be running
  * Requirement of logger to be running
  
### Assignment 2: API Server
* Adding Q Publishing to the API
* To execute, students need to:
  * Require `@nmq/q/client` in the `models/mongo.js` file
  * Publish "database" / "create|update|delete" events in the appropriate methods, following those operations

#### Grading Standards & Notes
  * Features
    * Server and Logger need to be running and passing events
    * File reader (4th run) should be perfect by now
      * Uses the Message Queue server
    * API Server needs to have the correct events firing on CRUD operations (or errors)
  * Code Quality
  * Testing
    * Spies should be placed on the event running functions
  * Deployment
    * All servers to deployed to Heroku
    * Heroku logs should show the output
    * Since TAs can't get there, students should provide a screenshot to prove.
  * Documentation
    * README Standards
    * JSDoc Required

#### Lab Assistance Notes

