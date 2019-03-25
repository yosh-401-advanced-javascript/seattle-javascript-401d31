# Solution: API Server

## Lab Requirements
For this assignment, the students will be writing very little code. The primary requirement for the lab is for them to take a deep dive into the inner workings of the completed server and fully document it.

What we're looking for is:

* UML Diagram of the entire system - mapping the data/functional path for each route.
* Full and complete JSDoc covering every class, module, and function
* Full, complete, working Swagger doc for the routes
  * Model and ID parameters properly spelled out
  * Proper schemas for the output
  * Note that for the input schemas, they should specify JSON, not data shape -- with a dynamic model, you cannot provide that to swagger
* A completed set of tests that cover each of the data models, middleware, and basic expectations that exercise the routes, 404 and 500 middleware.


#### Grading Standards & Notes
  * Testing
    * All tests completed
  * Deployment
    * Travis for Tests
    * Heroku for the API Server
  * Documentation
    * README Standards 
    * JSDoc Required
    * Swagger for the API
    * Proper UML Drawings
    
#### Lab Assistance Notes

Due to time constraints, it's unlikely that students will fully complete all of the above requirements. The learning goal for the day is to understand exactly how the system works and how things tie together. There's a lot of class inheritance and new modularity happening here.

Focus them first and foremost on a solid set of UML drawings (understanding the wiring) and the JSDoc (understanding what does what). 

Swagger is a great layer on top of that, which makes them really see how things work in concert. Testing, while important as a matter of process is less instructive in this lab, but extremely supportive in seeing the system work well under scrutiny.

Ensure that they get whatever they get done fully deployed.



