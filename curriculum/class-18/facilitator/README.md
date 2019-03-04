![cf](http://i.imgur.com/7v5ASc8.png) Facilitators Guide: Socket.io
==========================================================================

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
  
## Live Coding Demo(s)
These are designed to work in concert. The server acts as controller, hearing all inbound events and pushing out subsequent events to clients that care.  The app.js pumps a bunch of events **into** the server, while 'some-other-app.js' simply sits there and hears messages as they arrive.  You could theoretically create a system with 10 'some-other-app.js' type of apps that care about different events, and have app.js pump out random events (instead of always 'speak') to simulate a busy system.

Build this up slowly, with just server and app, and have app hear events (even though they're just responses to it's own events) from the server.  Have the server send directed events.  Then bring in 'some-other-app' to show how you can have many other clients connecting in.

You can even open up https://amritb.github.io/socketio-client-tool and connect it to your server as well. If you use it to emit events your app should show them logging out as well.  Note -- that only works against localhost OR an SSL server

### Server -- `demo/server.js`
* Sets up a listener on port 3000
* On each client's connect, it sets a listener on "speak"
* On speak, it emits a "message" event

### Client -- `demo/app.js`
* Connects to the server
* Every 750ms, emits a 'speak' event.
* This simulates a database api server that is notifying the world when a record gets saved

### Client -- `demo/some-other-app.js`
* Connects to the server
* Has a listener on 'message' events, which logs out the contents.

## Lab Prep
This lab will require students to unwire the demo code, which works well but is just a bunch of random events and clients that don't do anything of substance. 

The assignment is to have app.js actually do some work (like read/write files) and shout out status messages. This is effectively the same lab as from Class 06 (the first event lab), but with disconnected client apps instead of one giant application that has eventing wired within itself.

## What bugs, issues, or surprises have come up in the past for this class?

## General Comments and Notes
