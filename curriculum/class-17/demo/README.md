# Demo: TCP Server & Events

## Live Coding Demo(s)

The demo for this class will be the beginnings of a "Message Queue" server system, where one server is always running and listening for "Events" to happen, and then broadcasting those events out other connected clients. Those clients can then choose to act on those events as they see fit.

This is the basis for AWS "Lambda" functions and many other such systems in large companies where disconnected services need to let each other know that things are happening. It's easy to code, but tough to understand at a high level for ths students. Make sure that you're prepared to answer questions and draw diagrams to support the model.

Note that for these demos, we've setup a simple system whereby a client connects to a server and sends a string of text where the first word is an event name, and the rest is the data for the event. Each component needs to know that and adhere to it (yes, this is brittle! Talk about it with the students)

Once completed, you'll run in 3 terminals: `server.js`, `logger.js`, and `app.js` ... students will absolutely struggle with the concept of multiple servers running that are listening and talking to one another.

---

**`server.js`** - TCP Event Server

This server will manage all connections, receive all inbound messages and broadcast any that look like events to all connected clients.

* Opens up and listens on a port    
* Adds connected sockets to a pool (object, keyed by random ID)
* On disconnect, remove socket from the pool
* Whenever data comes in, see if the first word is a recognized "event" and then broadcast it by looping all sockets

**Talking Points** - 
    * How can we better manage the events? 
    * How can we more easily broadcast them only to connections that care?
    * How can we alter this to allow objects/arrays as event data?

---

**`logger.js`** - Listener

This "server" connects to the event server and just listens for it to broadcast events. It's "dumb" in the fact that it listens to all events and just logs them out.

* Connect to the server by host and IP
* On incoming data, log it out.

**Talking Points** - How can this be setup to care about specific events, and maybe even handle them differently?

---

**app.js** - Sample Application

Assume you have an application (perhaps a database) that wants to let the world know that things happen, such as when a record is created, deleted, etc.  This demo connects to the server and randomly barks out events.  

* Write a simple setInterval that writes a random event to the server every so often.
* Note that the event format is a single stream of data

**Talking Points** - Note that the server won't care about all of the events that this app produces. Is it more efficient for an app to connect/disconnect on every event?
