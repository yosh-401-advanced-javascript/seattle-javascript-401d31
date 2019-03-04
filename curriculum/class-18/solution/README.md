![CF](http://i.imgur.com/7v5ASc8.png) SOLUTION - Socket.io
==========================================================

## Notes

* This is effectively the same solution as from Class 06
* The difference being the use of socket.io instead of node events
  * Requirement of a server to be running
  * Requirement of logger to be running
* Students will need to mock both `fs` and `socket.io` to make this work
  * Specifically, if they don't mock `socket.io` the test will try and connect to a non-running server.  
  * Killer teaching moment there ^^^
