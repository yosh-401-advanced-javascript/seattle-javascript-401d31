# Facilitators Guide: API Server Project

## Preparation
* The server should mostly be ready by this time. The class has been building it out in dribs and drabs over the last 2 blocks. 

This project is all about tightening it up and making sure that it's enterprise ready.

## Lecture Main Topics & Overall Flow
* Review the requirements with the class
* Documentation: JSDoc, Swagger, README
* Full Test Coverage (and run through Travis)
* Dynamic Models
  * Ship with 2 connected models
* Common API Route
* Authenticated Access Control (overridable)
* Deployable (Heroku)
* Proper error and 404 handling middleware
* Fully checked and validated inputs (type checking, valididy)
* Static Route Handler
* Optionally connected to the queue server
  * Models raise events on write ops
  * Auth raises events (hack warnings)


## Live Coding Demo(s)
* No code demo today
* Do an architectural drawing of the system
* Re-Confirm Swagger Format
* Re-Confirm JSDoc Format

## Lab Prep
* Group the students and have them work through a whiteboard session before starting 

** Grading Advice / What to look for**
* Perfection
* Needs to be deployed
* Needs to handle all routes on a stock model

## What bugs, issues, or surprises have come up in the past for this class?

## General Comments and Notes
