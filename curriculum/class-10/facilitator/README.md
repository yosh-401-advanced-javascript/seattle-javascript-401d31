# Facilitators Guide: Block 2 - DS&A, Designs, Comp Sci, Recap 

At the end of this Block the students are presented with 3 assignments:

* End of Block "Project": Book App v2
  * 25 Points
  * Paired
  * Due prior to the start of the next Block
* Design Challenge
  * 10 Points
  * Due prior to the end of the next Block
* Data Structure Implementation: Stacks and Queues
  * 10 Points
  * Due prior to the start of the next class
    * Will be used in subsequent code challenges
    
## Learning Objectives
* Stacks and Queues
  * Theory/History
  * How JS Uses this in the Event Loop
  * Implementation
* Scalable Designs and CSS
  * Navigation and Lists
  * Vertical and Horizontal lists/menus
  * Checkbox Trick for Hamburgers
  * Icons
* Refactoring 
  * Approaches
  * Best Practices


## Preparation

* Get the Book App from 301 up and running
* Get Book App v2 (this class solution) up and running

## Lecture Main Topics & Overall Flow
### DS&A - Stacks and Queues
* DS&A Lecture on Stacks and Queues
* We have previously talked about the JS Event Loop in Class 03 (Async).
  * Now, we can see how that process uses an actual Stack and Queue to function.
  * There's a demo called `event-loop.js` that uses a stack and a queue to simlate this (poorly, but the point gets made...)
  
### SASS
* For this lab, the students will be working on navigation and lists.
* SASS lecture should center around ways and tactics to manipulate layouts for menus
  * `float`, `flex`, `inline-block`
  * The "checkbox trick" for hamburgers
  * Drop down menu strategies
  * Using the browser inspector to force hover/active states for testing.   

### Project/Lab Prep: Refactoring
The end of block project is "Book App v2", which requires the students to completely refactor the 301 book app.

Work this with the student on the white board.  How do you break that app down? Where are the modules? What gets split out? How do we model the data? Do we replicate the app using Mongo instead of PG, or do we write an app that uses our API as a service? 

Lots of big and fun decisions. Let them learn to be engineers while you mentor and mediate the discussion.

  * Migrating to Mongo from PG 
  * ... yet maintaining support for PG
  * Modularization
  * Proper Data Modeling


  
## What bugs, issues, or surprises have come up in the past for this class?

## General Comments and Notes
