# Facilitators Guide: Authentication

## Learning Objectives

**Students will be able to ...**
* Describe cryptographic hash and cypher algorithms
* Model a User and safely store their sensitive data
* Implement a Basic Authorization parser
* Create a Bearer Authentication parser

## Preparation
* Prepare a demo on ciphers and encryption so that the students can fully understand

* There's no way around it, this first day of auth requires a lot of code to get through, and the topic is large enough to warrant a full hour+ of pure lecture about the core concepts surrounding authentication, passwords, security, etc.  Students will struggle with all of it ... but typically, they also come up with lots of ah-ha moments and great clarifying questions ('So, is that why they want to verify with a pin over the phone?')

* Have some great examples and talking points about web security, password storage, password hashing, salting, etc. Once you open up those topics, the questions pour in.


## Lecture Main Topics & Overall Flow
* Topic
  * Sub
  
## Lab Prep

* This first class' lab is going to give them 90% of the code you demo as their starting point. It's broken in various ways and must be fixed. Rather than have them try and code up the entire thing, having them spend time in the code, tinkering around and using breakpoints to find issues is a great way to really have to examine how it all ties together.
* Continue to work with the students on setting breakpoints to troubleshoot
* Assert with them the ways to know that things are working properly 
  * Unit and Integration Tests
  * Manual testing with httpie, postman, RESTy

## What bugs, issues, or surprises have come up in the past for this class?


## General Comments and Notes

While we can make mention of the API server that was built in the previous block, this block is all about authentication (we're going to marry the 2 servers as the Capstone for this week), so beginning with this demo, work in a server that essentially only does authentication.  It'll have a couple of test routes in it, but nothing of consequence.

As Instructor, you'll be building off of this demo server each day

Note -- it won't be all that much different (if at all) from what the students will ultimately build. This Block is much more about concept and wiring than code logic, so be sure and cement the core concepts as you build.

