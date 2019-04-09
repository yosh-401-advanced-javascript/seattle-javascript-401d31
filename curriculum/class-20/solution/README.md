# Solution: Q Server

## Grading Standards & Notes
  * Deployment
    * API Server running at Heroku
    * Queue Server running at AWS
    * Logger Server running at Azure
  * Testing / Verification
    * Use Postman to POST, PUT, DELETE records in the API
    * View logs on Azure Server
      * The Q Server at AWS should broadcast the events
      * The Logger server at Azure should respond to them

## Lab Assistance Notes
  * Ensure that all servers have the correct ENV variables set
    * QUEUE_SERVER is required for the API and the Logger
    * Likely, AWS will not require a specific port, just a URL
