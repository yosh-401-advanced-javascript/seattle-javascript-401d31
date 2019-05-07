# SOLUTION - Dynamic Forms

## Lab Requirements

### Lab Assignment 1
*

#### Grading Standards & Notes
  * Features
    * All CRUD functionality
  * Code Quality
    * Multiple Reducers or Complex Reducer
    * Required: Model/Schema fetching
  * Testing
    * Basic Store Tests, Mock Store
  * Deployment
    * Travis Only
  * Documentation
    * README Standards
    * React Doc Required
    
## Lab Assistance Notes
* Students will implementing PUT, GET, PATCH in the redux starter app. DELETE has been done for them.  What they'll need to get to is how to pass a record ID down to the <Record> component and then how to manipulate state in the reducer. They'll need to dive into spread, deconstruction, and all of those functional methods.
* We'll also be hooking into an API server. Grading that could be tough if they set up their react apps to use a local server. There's a remote API deployed that you can hook into, by changing their API url: https://api-js401.herokuapp.com/api/v1/
* Definitely looking for them to do a full integration with the API for all methods.
* Sticking points for them will be in getting the reducers right and handling multiple reducers
* Basic tests using a store will be required, but not full coverage. There's a lot of other work to complete, but getting the core Redux test wiring in place is a baseline goal for today.
