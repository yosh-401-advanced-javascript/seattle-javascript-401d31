# Solutions: HTTP and REST
==============================================================

## Grading Standards & Notes
  * Features
    * Working API Server
      * Test with Postman/HTTPIE
    * Connected to their own Web Application 
      * See live data changes
  * Code Quality
    * Complete Swagger
      * Params
      * Schema
  * Testing
    * Not Required
  * Deployment
    * Only a properly forked Web App is required
  * Documentation
    * README Standards 
    * Swagger Required
    
    
### API: json-server
* Perform an `npm install -g json-server`
* This will get you (and the student) a running JSON API Server
* Students will create a few data models using the json-server app
  * That should be as simple as creating a db.json file
  * Look for a db.json file in their lab repo, you should be able to run against that json file.
  * For grading purposes, just make sure it's there and it works with REST Routes
  
### Web Application
* The students will submit a react web server which is a fork of [this sandbox](https://codesandbox.io/s/w638oyk7o8);
* The .env file in that server holds the URL to the API Server
* For this lab, you'll need to run it against the one on localhost
* For future labs, this web app will be re-used to live test their express APIs
  

### Swagger Doc
The big part of this lab will be learning how to write swagger documentation for an api (and really, understanding what that is).

This is the students second "RTFM" lab, so push them in that direction.

* Students will use the swagger online tools to write "swagger doc" for their API.
  * They need to first build their server and tinker with it so they know how it works.
  * Leave it running
  * Write swagger doc that they can run against their own server.
  * They have been provided a simple starter swagger.json file (GET only) that they can paste into the swagger online editor.
    * They must document all of the rest routes (GET,PUT,POST,PATCH,DELETE) and the correct schema in the swagger.json file
* To prove that this works, you will need to fire up json-server at their db.json file and then paste in their swagger.json into the editor at swagger.io. 
 * Once you've done that, you can do the "Try It Ot" button in the swagger website to actually run their routes.
  
### Stretch Goal: Upgrade the API
* The json-server data output isn't standard. If the students hit the stretch goal ...
  * It should respond to /api/v1/:model routes
  * It should return a properly formatted object (see below) instead of an array of objects
  * The Swagger Docs should reflect this.
  
```json
{
  count: 2,
  results: [
    {},
    {}
  ]
}

```
