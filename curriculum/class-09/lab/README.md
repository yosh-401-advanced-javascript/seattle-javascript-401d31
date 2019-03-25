# LAB: Classes, Inheritance, Functional Programming

## Before you begin
Refer to *Getting Started* in [lab-instructions.md](../../../reference/submission-instructions/labs.md) for complete setup instructions

## Getting Started
* You will be continuing to work on your API server
* Provided for you is a working server, which you may use as a starter

## Requirements

### Assignment - Technical Writing
* Create a folder called `/docs` at the root of the project
* Create sub-folder under `/docs` called `/config` where you will store your swagger and jsdoc configuration files

#### UML
Create a UML diagram that describes the code (and potential data) flow for each route.
  * `GET /api/v1/:model`
  * `GET /api/v1/:model/:id`
  * `POST /api/v1/:model`
  * `DELETE /api/v1/:model/:id`
  * `PUT /api/v1/:model/:id`
  
Your diagram should include proper module and functional definitions, connections and parameter/data transfers.

  * Each function that gets called from when the route is fired until the results are sent to the browser
  * What params are being sent between the functions?
  * What data is coming back?
  * Is the request object being modified
  
#### JSDoc
This server works great, but isn't very developer friendly at this point. Document the entire system using JSDoc.

* Copy a proper jsdoc config file (ref: configs folder, class repo) into the `/docs/config` folder
* Create a `jsdoc` script in your package.json that will use that config file to generate documentation in the `/docs` folder
* Create a static route in `/api/v1.js` that uses `express.static()` to map `/doc` to the `/docs` folder that will house the generated jsdoc.
* Write proper jsdoc for every function, module, and class.
  * Be descriptive about the functions' purpose
  * Declare data types for params and return values

#### Swagger
Now that the server has been upgraded to support dynamic models in the routes using the `/:model` url parameter, we need to revisit our swagger documentation to reflect this.

* Create a folder called `/docs` at the root of the project
* Create sub-folder under `/docs` called `/config` where you will store your swagger.json file
* Create a get route in the `/api/v1.js` file called `/api/v1/doc` that will use the swagger-ui-express node module to render swagger documentation using a swagger.json file that you created and stored in the `/docs/config` folder
* This should pull up the swagger live docs and allow you to fully run and test your API.

### Testing
* Complete all of the data model and server tests
* Use `supergoose`

## Assignemnt Submission Instructions
Refer to the [lab-instructions.md](../../../reference/submission-instructions/labs.md) for the complete lab submission process and expectations

### Deployment Note
* Get this server deployed to production. Although you aren't writing code against it, your documentation must be accessible through the links in your readme.  

