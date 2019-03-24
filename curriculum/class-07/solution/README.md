# Solution: Express

## Lab Requirements

### Middleware
* The students need to put out 4 routes
  * /a says "Route A"
  * /b should return a number (which is some other number squared)
  * /c should return a random number
  * /d should return a 500 error
  * anything else should return a 404
* This needs to be deployed at Heroku. You'll be able to see the output of the routes, but not the console logs that are also required.  You'll need to assess the code for that.

### Testing
* We've given the students starter code with hints
* They'll need to export an object in server.js that contains 2 properties:
  * server: the express app object
  * start: a method that starts up the server
* Have an index.js file that imports and starts the servrer
* Modify the included test file to do the 404 and 500 tests.
  * This will not work if the server isn't exported right

### API Server
* `The solution code has the middleware pulled out into modules as well as the posts model. 
* Students will likely have the posts logic rolled into the server.js which is an ok first try, so long as they are sanitizing the input and using a constructor to maintain control.
* The students will likely not get to the full modularization.  However, the "tricks" within the solution code could all be achieved even in a single monolithic server. 
* Advanced students might want to try making multiple models DRY and somewhat sane, by providing a schema/shape and then using a parent class to wrangle it is a pretty cool trick.  Help the students see how that might be possible.
* `models/categories.js` file which keeps an in-memory database with all crud methods. 
  * Note the use of REST verbs as the method names
    * Not required, but helpful to keep the verbiage consistent
  * This is a good template from which to create other models
    * ...although, that could become pretty repetitive
      
#### Grading Standards & Notes
  * Features
    * Middleware and Testing Labs must be completed in full
    * API Lab MVP: 
      * Fully working routes
      * Fully integrated Swagger
  * Code Quality
    * Modularity
    * Data model with a solid constructor/validator pattern
  * Testing
    * The testing lab is required
    * Complete all tests on the API Server (bascially the same as the testing practice lab)
  * Deployment
    * Travis for all labs
    * Heroku for the API Lab
    * The API lab should now properly power their react app
  * Documentation
    * README Standards 
    * JSDoc Required
    * Swagger for the API
    
#### Lab Assistance Notes




