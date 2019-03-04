![cf](http://i.imgur.com/7v5ASc8.png) Facilitators Guide: Socket.io Client
==========================================================================

## Preparation
In this session, we'll be introducing the basics of socket.io, managing application state through the use of `Context` and `Hooks`.  Over the course of this and the next lecture, we will be building out a simplistic Twitter-like application.

This first session is all about setup and wiring.  The goal needs to be limited to getting a server up, running and deployed, and a client created that can syn/ack with it.

* Work through the demos and prepare a server and client through which you can send and receive messages.  
* You might encounter issues with SSL (esp if you use code sandbox and your local server). Chrome is notorious for not allowing Socket.io to work from an ssl site (code sandbox) to a non-ssl server (your local)
* Create a self-signed cert [how-to-article](https://medium.freecodecamp.org/how-to-get-https-working-on-your-local-development-environment-in-5-minutes-7af615770eec) and get your IO server running securely on your local
* Also, deploy it to Heroku to ensure that you can wire it up
* This way, you can demo and talk through all scenarios, should it come up.

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
