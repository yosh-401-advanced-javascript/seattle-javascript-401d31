# Facilitators Guide: Express Routing & Connected API

## Learning Objectives

**Students will be able to ...**

* Build an API server with error handling, logging, and dynamic modeling
* Build an in-memory data store with file persistence.

This is a big build day for the instructor. The concepts are actually not too heavy (routing and mongo) but they make more sense emerging from code demos that pure lecture.  Plan your lecture accordingly, to be building and teaching as you go.

## Preparation

The core takeaways from the day are introducing the students to
* Express Routing
  * express.Router()
  * Prefixed and Self-Contained Routes
* Firmer Grasp on Separation of Concerns, Modularization Strategies

## Lecture Main Topics & Overall Flow

* Express Middleware Review
  * Installing logging and cors into the server
  * Why each are important
  * Review middleware wiring again as we install these.
    * `app.use(morgan('dev'))` is a good opportunity to re-review curried middleware
    * Spend some time on ordering and feeding
* Express Routing Middleware
  * This specialized middleware allows you to create your own route libraries
  * Use this as a means of modularizing your routes
  * We will use this in this lecture to match route modules to data models
    * This will definitely not be DRY.  Don't worry, we'll clean that up in the next class.
* Wiring in external models
  * Covered in the demo, but make the points in lecture ...
  * Remove any actual work/logic from the route handers.
  * Technically, they're controllers and should reference logic, but not own it (i.e. call functions elsewhere to do the dirty work)

## What bugs, issues, or surprises have come up in the past for this class?

## General Comments and Notes
