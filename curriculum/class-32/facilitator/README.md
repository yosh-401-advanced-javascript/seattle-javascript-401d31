# Facilitators Guide: Socket.io Client

## Learning Objectives

**Students will be able to ...**

* Create and deploy a Socket.io server
* Create and deploy a Socket.io client
* Wire up events and listeners (Pub/Sub) on both ends
* Connect a react application to a realtime server using socket.io
* Subscribe to remote events
* Emit events and data back to the server

## Preparation
In this session, we'll be introducing the basics of socket.io, from the React side, and reinforcing the managing of application state through the use of `Context` and `Hooks`.  

This first session is all about setup and wiring.  The goal needs to be limited to getting a server up, running and deployed, and a client created that can communicate with it.

* Work through the demos and prepare a server and client through which you can send and receive messages.  

## Lecture Main Topics & Overall Flow
* What is Socket.io?
  * This is a revisit from the earlier portion of the class, where we built out a bigger I/O server.
  * Might be a good idea to bring that back up and do a feature and code review on it.
  * Keeps a pipe open between client and server
  * Keeps communication pathway open
  * Responds to events that one side or the other `emits`
  * Publish an Event `socket.emit('run', tellEveryoneToRun)`
  * Respond to an Event `socket.on('run', doTheRunningMan)`
* On the React side, you can respond to an event and add it's payload to state, or use a state change to trigger an `emit`


## What bugs, issues, or surprises have come up in the past for this class?
*

## General Comments and Notes
*
