# Facilitators Guide: DS&A, Designs, Comp Sci, Recap

For this class, and the students end of block project, we will be deploying 3 servers to 3 separate cloud providers and connecting them all with the Q server.

To test it, we'll have a React application that we can use to create/delete/update database records on the API server and receive/log messages from the other 2 servers which all use a common Q to tie it all together.

## Preparation
* Get your AWS and Azure accounts opened
* Practice a few deployments

## Lecture Main Topics & Overall Flow

### DS&A 

There's no new DSA introduced for this class.  Use this time to review the previously introduced structures, recursion techinques, white boarding, etc

### SASS - Tables

Tables are relatively easy to style, once you understand the structure of the underlying markup. 

* Review full table markup
* Review the sordid history of tables
  * No longer used for design and layout
  * Have a much more predictable and interactive purpose today
  * Show some examples (there are some good ones linked in the design assignment)

Responsive tables are a different ballgame
* Table markup cannot be responsive
* We can use other structures to go responsive
  * Caveats -- accessibility concerns
  * The Markup can become CSS driven (tight coupling)

For demo, review the starter code (in the design-assignments folder) and look at the table markup for both normal and responsive tables

### Cloud Server Deployment

* What is the cloud
  * Draw a picture depicting cloud infrastructure
  * What are regions and how do they help 
* Azure Services and walkthrough
* AWS Services and walkthrough
* Live Demo: Deploy the simple node server to both Azure and AWS to demonstrate the process
  * This will be manual
  * DevOps professionals are employed to automate this!

## What bugs, issues, or surprises have come up in the past for this class?

* This is a big mental jump for the students from a simple deployed app into a more robust architecture with multiple services running in the cloud.
* How the servers virtually connect will feel like magic.  It is, but they're making that magic themselves.

## General Comments and Notes
