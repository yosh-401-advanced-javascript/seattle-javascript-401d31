![cf](http://i.imgur.com/7v5ASc8.png) Facilitators Guide: Data Modeling
=======================================================================

This is a big build day for the instructor. The concepts are actually not too heavy (routing and mongo) but they make more sense emerging from code demos that pure lecture.  Plan your lecture accordingly, to be building and teaching as you go.

## Preparation

The core takeaways from the day are introducing the students to
* Data Modeling
  * NOSQL Databases
  * Mongoose as an ORM
  * Mongoose Pre and Post hooks (middleware)
* Express Routing
  * express.Router()
  * Prefixed and Self-Contained Routes
* Firmer Grasp on Separation of Concerns, Modularization Strategies


## Lecture Main Topics & Overall Flow

### Express Middleware Review
* Installing logging and cors into the server
* Why each are important
* Review middleware wiring again as we install these.
  * `app.use(morgan('dev'))` is a good opportunity to re-review curried middleware
  * Spend some time on ordering and feeding

### Express Routing Middleware
* This specialized middleware allows you to create your own route libraries
* Use this as a means of modularizing your routes
* We will use this in this lecture to match route modules to data models
  * This will definitely not be DRY.  Don't worry, we'll clean that up in the next class.

### Data Modeling
* Input sanitization
* Data normalization 
* Type and Error checking

### NOSQL Databases and Mongo
* Schemas for document definition
* Show the students the mongo setup, command line tooling
  * This is just like `pg`, but a different tool
* Discuss briefly how it stores data
  * Collections of Documents vs Tables and Rows
  * The students will work with Mongo data stores for the rest of the course. 
    * The intricacies emerge as you go, so be "ok" with the "use and demo to teach" model over a long theoretical discussion of noSQL databases
* In the demo portion, we'll make a few models and use it for real
* Talk through schemas and a light touch on pre/post hooks

## What bugs, issues, or surprises have come up in the past for this class?

## General Comments and Notes
