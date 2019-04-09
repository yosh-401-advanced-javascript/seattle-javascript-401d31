# LAB - Data Modeling

You have been provided a partially working API server. The assignment for today is to complete the server's functionality by creating the data models and writing a full test suite

## Before you begin
Refer to *Getting Started* in [lab-instructions.md](../../../reference/submission-instructions/labs.md) for complete setup instructions

* install uuid, supertest, mongodb-memory-server
* start mongo server: `mongod --dbpath=/Users/path/to/data/db`

## Requirements

### Task 1: Modeling
The provided API server is setup to work, but the data models are missing

* Work in the `models` folder in the starter code
* You will find the models (with empty methods) in the models folder
* Implement each data model, in different manners, using only TDD
* **Categories**
  * Create this as a class
  * Create a mongoose schemas for this collection
  * The model class should hold and manage the data in memory
  * The model class should expose methods that match REST verbs
    * `get()`
    * `post()`
    * `put()`
    * `delete()`
* **Products**
  * Create this as a class
  * Create a mongoose schemas for this collection
    * Use a pre-save hook to manipulate some part of the input (uppercase something, for example)
  * The model class should expose methods that match REST verbs yet use mongoose data access methods
    * `get()`
    * `post()`
    * `put()`
    * `delete()`
* Refer to the API server for guidance on how to properly implement the model interfaces (This is the interface contract)
  * How is the server calling each of the model methods?
  * What does the server expect back in terms of data?
  * How do the models need to return that data?

**Engineering Note** Data contracts (APIs) are the heart of a system. When it's well established and agreed upon, code is movable and extendable
  
---

### Task 2: INTEGRATING
* Once the models are completed and tested, you can integrate them into the API Server.
* Copy those models into the server's `src` folder and the the server routes should begin to call into your newly minted models and "just work", 
  * Don't forget to copy over your tests as well...
* So long as your models obey the interface contract, your API routes should work
  * Verify this manually
  * Write supertest tests to verify that your routes are functioning
    * /post saves a new record
    * /get gets all records
    * ...etc
    
---

### Task 3: MODULARIZING

* Move the 2 sets of routes and functions into separate, external routers
  * They should go into a `routes` folder as separate files
  * They will need to export an express router instance
  * The app will now need to import and use these routes
* Once you've moved the routes out, the tests that you wrote should still work.

**Engineering Note** This is a main benefit of testing -- asserting that major changes don't effect functionality!

### Testing
* Write a complete set of tests for all data routes and REST operations, independent of the server
* For testing the server and routes, use `supergoose` to do end-to-end testing


## Assignment Submission Instructions
Refer to the [lab-instructions.md](../../../reference/submission-instructions/labs.md) for the complete lab submission process and expectations



