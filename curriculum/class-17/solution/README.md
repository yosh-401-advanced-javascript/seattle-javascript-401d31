# Solution: TCP Server / Message Application


#### Grading Standards & Notes
  * Features
    * `app.js` must connect to a server and write the correct events
    * `server.js` must hear, process, and broadcast valid ('save' and 'error') events.
    * `logger.js'` must hear and log only events that it is tasked with hearing ('save' and 'error') in this case.
    * Stretch Goal: Multiple loggers, multiple events
  * Code Quality
    * `app.js` must be refactored in the same way it was for class 16, with promises and separate testable functions for manipulating the file
    * The servers should be configured to run with environment variables for host and port
    * Ideally, the list of accepted events should be dynamic
    * Handle the allowed events in a scalable manner 
    * Handlers and utility functions should be exposed to allow for testing
  * Testing
    * Test the units, not the events
  * Deployment
    * Travis only
    * Heroku will not present it's TCP port
  * Documentation
    * README Standards
    * JSDoc Required

#### Lab Assistance Notes
