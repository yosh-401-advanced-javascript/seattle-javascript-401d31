# Facilitators Guide: Socket.io - Message Queue Server

## Preparation
* Re-familiarize yourself with the demo and solution code from class 17.
* Get the 3 servers and the app from this demo up and running before you start class so that you can see it working.
* There's quite a few moving parts in this demo, so get comfortable with the various parts/servers and how they connect.

## Lecture Main Topics & Overall Flow
* To this point, we've been doing simple work (reading files) and raising events based on success/failure
* This is very tactical, and therefore not highly scalable
* A true event driven architecture allows for many disparate services to connect to a common "message queue" so that they can easily respond to systemic changes.
* This is known as enterprise scale pub/sub
* There can be many queues
* Each queue can respond to many events
* A queue's job:
  * Manage clients
  * Listen for events
  * Broadcast valid events
  * Keep tabs on which clients have received the events
  * If a client goes "dark", replay the events in order (a queue) when they reconnect
* Our queue server will be built using a library to manage the above
* How can we handle those requirements?
  * Good opportunity to whiteboard some ideas with the students.
* What does a message queue architecture look like?
  * Draw an imaage similar to this, with the students to describe
  

## What bugs, issues, or surprises have come up in the past for this class?

* This is a big mental jump for the students from a simple event driven app into a more robust architecture with multiple services.

## General Comments and Notes
