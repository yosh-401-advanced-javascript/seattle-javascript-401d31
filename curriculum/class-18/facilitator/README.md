# Facilitators Guide: Socket.io

## Preparation
* Practice building a socket.io server and client
* Understand how namespaces work
* Namespaces are implemented like a route
  * No Namespace: `const io = require('socket.io')('http://localhost');`
  * "sports" Namespace: `const io = require('socket.io')('http://localhost/sports');`
* Understand how rooms work
  * Within any namespace, a client can `join` any arbitrary room
    * `io.join('seahawks-talk')`
  * The server can query and communicate with connections to any room
    * `io.to('seahawks-talk').emit('custom-event', payload);`
* Use them both to ensure uniqueness
  * `io.of('sports').to('seahawks-talk').emit('event', 'message');`

## Lecture Main Topics & Overall Flow

* What's the main difference between socket.io and TCP?
  * TCP is a protocol
  * TCP is client-less
  * Socket.io uses TCP over HTTP
    * Must work to keep the connectionopen
    * Must have a connected client (code) to function
* Socket.io Advantages
  * Connection pool management
    * Can always query `.clients()` in a namespace to see who is connected
  * Namespaces (i.e. "sports")
  * Rooms within a namespace (i.e. "Seahawks")
  * Can stand alone
  * Can integrate with and use express or http as a service
---
* Standard node events are sent with `emit()` and received with `on()` ... Socket.io uses the same methodology/terminology.

* In an event driven node app, the entire app is in memory, and (through a common event pool), all parts of your application can emit and hear events, communicating with each other.  However, no outside application can participate in these events natively.

* With Socket.io, the entire purpose is to have events shared between 'disconnected' participants.  Through a mediator (server), clients connect, emit events, and respond to events from the server.  A typical flow works like this:

* Client Applications 1, 2, 3, x ... connect to a running Socket.io server
* Client Application 1 emits an event called 'speak' to the server, with the data 'Hello World'
* Server has an `on('speak', (data) => {})` which "hears" that event
* Upon processing the event, the server may elect to `emit()` an event of it's own.
  * i.e. `socket.emit('incoming-message', data)`
* Other client applications that have connected into the server that have a listener on that event type, can then "hear" it as well... 
  * i.e. `socket.on('incoming-message', text => console.log(text)`
  * Not every client will have a listener for every event.
  * The server may not have a listener for every event a client sends
  
## Lab Prep
This lab will require students to revisit the same starter code as on classes 16 and 17, but refactor them this time using `socket.io`

We're keeping the starter code largely the same so that they build up some muscle memory on the file/promise code, but more importantly, we want the students to focus on a new architecture, not a new problem domain. 

## What bugs, issues, or surprises have come up in the past for this class?

## General Comments and Notes
