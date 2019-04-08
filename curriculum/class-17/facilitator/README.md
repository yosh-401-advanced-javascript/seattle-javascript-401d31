![cf](http://i.imgur.com/7v5ASc8.png) Facilitators Guide: TCP Server
=========================================================================

## Preparation
Today is all about the OSI model and working within a TCP layer.  You'll want to be comfortable with both the native NodeJS `net` module as well as node events in order to create a TCP event server for the daily lecture demo.  
 
## Lecture Main Topics & Overall Flow
  
* Describe the OSI Networking model
  * Note that we've been living in part of this with HTTP
  * TCP also belongs here
  * How does the internet *really* work, given this new view of it?

* TCP Protocol processes data in chunks
* TCP Sessions can remain connected, so state can be preserved
  * You will need to manage the state of the connections
  * Handle connections and disconnections
  * Handle inbound and outbound communication
  * Massive security concerns

## What bugs, issues, or surprises have come up in the past for this class?

We have been doing lots of client/server applications to this point. This is the first time we'll be running multiple servers. Students will struggle mightily with this concept.

* Where do the servers reside?
* Where is the data?
* Why are we doing this?

It's critical that you draw lots of pictures to describe the process of multiple servers talking to one another and triggering each other to "do work"

## General Comments and Notes
Students have been working with basic NodeJS event programmig concepts, async programming, binary data, and file system I/O during the past week.  This week is all about how the internet works, starting with the build of a TCP application, then moving into HTTP based applications for the remainder of the course.  You'll want to discuss how HTTP is built on top of TCP and what processes take place to get data from one communication channel to the other.
