# Facilitators Guide: Data Modeling

## Learning Objectives
**Students will be able to ...**

* Model real world data
* Create models with constraints, type checking, validity
* Create an extensible interface and an implementation for a data model

## Preparation

## Lecture Topics / Flow

* What is Data Modeling?
  * Describe the shape of data
  * Describe how to interact with data
  * Defines how we persist data
  * Application of business rules
* Data modeling in Javascript is the process of taking a real world or conceptual idea and encoding it into Javascript's built in data types.
  * Data Typs in JS
    * objects, arrays, strings, numbers, and booleans
* Modeling behaviors
  * CRUD - Basic Data Operations
    * **CREATE** - Add a record to a data store
    * **READ** - Retrieve a record from a data store
    * **UPDATE** - Update a record within a data store
    * **DELETE**  - Remove a record from a data store
* Interface
  * A modeling technique providing common access points in an API (i.e. the CRUD methods) that is agnostic to the storage medium and techniques
  * Implementation
    * The specific means by which a data model interacts with a persisentce layer (file, mongo, postgres, etc)
  * Normalization and Validation
    * Sanity checking data to ensure that it conforms to the modeling rules, integrity checks, etc prior to doing any operations with it.

Technically, there isn't a right or wrong way to model data in software development because it has been proven that any idea can be represented using any data structure. However, it is important to follow several practices to boost software readability and maintainability. Boolean values should be used when the data can have only two states. Numbers should be used when the data could support arithmetic operations. Strings should be used when the data is representing a natural language. Arrays should be used to bundle multiple pieces of like data. Objects should be used to bundle multiple pieces of different data.

## What bugs, issues, or surprises have come up in the past for this class?


## General Comments and Notes
