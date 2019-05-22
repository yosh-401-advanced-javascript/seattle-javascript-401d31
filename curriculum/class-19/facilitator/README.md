# Facilitators Guide: Socket.io - Message Queue Server

## Learning Objectives

**Students will be able to ...**

* Describe and Draw the architecture for a Message Queue server
* Describe namespaces and rooms in Socket.io

In this block, we've been focusing primarily on the "how"
  * Event Driven Apps
  * TCP and Sockets
  * Socket.io and event driven messaging
  
In this class, we'll tighten some of that up with library that makes the complex "easy", while focusing primarily on the "why" event driven program is so useful and what real world problems it can solve.

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
  * Draw an image similar to this, with the students to describe

**Real World Queues**
* [RabbitMQ](https://www.rabbitmq.com) (free, but support is $$)
* [Cloud AMQ](https://www.cloudamqp.com/plans.html) ($3500/mo - Hosted RabbitMq)
* [BusMQ](https://github.com/capriza/node-busmq) (open source, uses reddis)
  

## What bugs, issues, or surprises have come up in the past for this class?

* This is a big mental jump for the students from a simple event driven app into a more robust architecture with multiple services.

## General Comments and Notes
