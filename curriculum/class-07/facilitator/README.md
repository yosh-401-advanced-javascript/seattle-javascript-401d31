![cf](http://i.imgur.com/7v5ASc8.png) Facilitators Guide: Express
=================================================================
## Preparation
We're going to take the next 2 classes and replace json-server with one of our own making. This will start with an exploration of express routing and middleware.

* Practice the demo on express middleware so that you can show the flow with next and the ability to manipulate the request object as it gets passed around
  * What other possibilities can your class come up with?
* We will be building a simple API today, with an in memory database that starts with the db.json file as used by json-server. Be comfortable manipulating JSON in memory and dumping it out to file.
* A light touch of in the realm of data models (with arrays/objects, not true persistence) will also be on the docket, so be comfortable in manipulating arrays of objects. If you can do it with rest/spread/ES6 magic, even better. The students need to see that as often as possible.
* Practice testing with `supertest` as this will be the way that we test out our serve routes.

## Lecture Main Topics & Overall Flow

* Express Middleware
  * What does it do?
    * Runs `req, res` through a function
    * Application Middleware
      * Error Handling
      * Bringing in other routes
      * Defaults
      * Body and Form Parsing
    * Routing Middleware
      * Dealing with specific things for a route
      * Generally, things many routes would participate in
    * Draw the "train" picture (in the assets folder) and explain how each middleware calls next to keep the train moving (and can throw stuff onto the request) or force an error.
* How can we take advantage?
  * Logging
  * Dynamic Model Loading
  * Consistent Data Transition/Modeling/Preparation (Pre-Render)
* Express Routing
  * Event driven system
  * req, res being sent around everywhere
    * Dig into these objects
* The Request Object
  * /:Params and Query Params
* The Response Object
  * Basice look at status codes and response types
* Testing Servers
  * Exporting a server module
  * Supertest for end-to-end testing
* Introduction to data models
  * Very light...
  * Building a simple API server today, so just use an object/array for storage 
  * Talk about constraints, ids, etc. Use the word "model"
  * Suggest pulling the model out to a different module
  * Provide some common methods to access it
  * Will dive in deeper in the next lecture
  
### LAB Prep
* Following demo ...
* Talk about separation of concerns and break the demo server down
  * Get on the whiteboard and show the students how you might modularize it. Take their input and draw that out as a class
  * Talk through data modeling and remind them about extending classes 
  * Lead them to the stretch goal with this conversation.
  * You will be doing that in the next code review session anyway

## What bugs, issues, or surprises have come up in the past for this class?
* This is a HUGE lab. It'll challenge them in big ways, specifically in how to break down monolithic code. It's their first time doing this, so help them to see where the separation is.
* Make assurances that the next code review will cover the gaps

## General Comments and Notes
*
