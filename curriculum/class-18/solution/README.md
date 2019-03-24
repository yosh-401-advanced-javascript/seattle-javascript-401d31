# Solution: Socket.io

## Lab Requirements
* This is effectively the same solution as from Class 06
* The difference being the use of socket.io instead of node events
  * Requirement of a server to be running
  * Requirement of logger to be running
* Students will need to mock both `fs` and `socket.io` to make this work
  * Specifically, if they don't mock `socket.io` the test will try and connect to a non-running server.
  * Killer teaching moment there ^^^

#### Grading Standards & Notes
  * Features
  * Code Quality
  * Testing
    * Certainly all the units need to be tested
    * If they can mock out socket.io and do a full functional round, that would be awesome
  * Deployment
    * Travis Only
  * Documentation
    * README Standards
    * JSDoc Required

#### Lab Assistance Notes

