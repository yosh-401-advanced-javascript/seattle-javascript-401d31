# Facilitators Guide: Data Modeling With NoSQL Databases

## Learning Objectives
**Students will be able to ...**

* Understand the differences between SQL and noSQL Databases
* Understand the MongoDB Ecosystem
* Modeling Data / Schemas
* Lifecyle Hooks
* Be able to use various MongoDB Clients
  * mongo cli
  * compass
* Remote Mongo
  * mLab
  * Atlas
  * Dynamo (AWS)
* ORMs (i.e. mongoose)

## Preparation
* Make sure your own mongo is up and running locally
* Review the [Student Facing README](../README.md) as it contains the information the students should be retaining. It helps to drive your lecture to hit all of those basic points.
* Helps to install compass as well to show a GUI
* Have an [mLab](https://mlab.com/) account so that you can show a remote mongo installation/interface
* Also, an [Atlas](https://www.mongodb.com/cloud/atlas) account to give yet another view of dbs in the cloud.


## Lecture Main Topics & Overall Flow

### Data Modeling
* This should be a review of the techniques and reasons for modeling data
* Schemas -
  * Input sanitization
  * Data normalization
  * Type and Error checking

### NOSQL Databases and Mongo
* We built this already ... in memory and with a JSON file
* MongoDB codifies it, and makes that concept scale, really well
* Schemas for document definition
* Show the students the mongo setup, command line tooling
* Discuss briefly how it stores data
  * Collections of Documents vs Tables and Rows
  * The students will work with Mongo data stores for the rest of the course.
    * The intricacies emerge as you go, so be "ok" with the "use and demo to teach" model over a long theoretical discussion of noSQL databases
* `mongo` CLI tool
  * This is just like `pg`, but a different tool
  * `show dbs` to show the databases
  * `use <db>` to select a db
  * `show collections` to show tables/collections in a db
  * `find()`, etc to query data
  * Show students the mongo cheatsheet in the class repo under `reference`
* Introduce Compass and any other tools that you like to use or are familiar with
* ORMS
  * Mongoose is an ORM that wraps all of the core functionality for us, in a native JS Library
  * In the demo portion, we'll make a few models and use it for real, to show the ability of it to shape unstrucured data and provide CRUD methods.
  * Talk through schemas and a light touch on pre/post hooks

## What bugs, issues, or surprises have come up in the past for this class?


## General Comments and Notes
