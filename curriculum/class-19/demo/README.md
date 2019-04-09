# Demo: Socket.io - Message Queue Server

Following the theme of this block, the demo for this class is a refactor of the demo from the previous class. 

In this demo, you'll be moving from a very tactical `socket.io` implementation where the server, logger, and app simply connect via port and use commonly named events to communicate.

For this demo, we'll be building out a much more scalable solution, using the `@qms/q` npm module, which provides a stable API for servers, clients, and publishers to use categorized "Queues" to pass data through events.

Focus this live demo on the usage of this module to build a robust queue server.

Given time (a demo stretch goal), pull down the module from github and code review it's wiring so that students can witness the mechanism by which this system has been wired.

**During the coding of this demo, refer back to the image you drew during the lecture and reiterate which parts of that image are being served by each server/app in the demo.**

## Live Coding Demo(s)
These demo servers are designed to work in concert. The server acts as controller, hearing all inbound events and pushing out subsequent events to clients that care.  

The Logger hears certain events that the server re-broadcasts

The app "does some work" and then publishes events and data to the server.

When it's all put together, you should be able to run the app, which will raise events on the server, which are then heard by the logger (and potentially other apps) which then act upon them.

Note that running all of this will require multiple console windows. The "server" and "logger" are separate servers that always run, and the app is an application that triggers events between them. 


### Starting Point -- `demo/starter`
In this folder, you'll find the final demo code from the last class. Review how this works with the students, and begin to modify this in place, ending with the code in the `final` folder.

You will be moving `app.js`, `logger.js`, and `server.js` into their own folders, each with its own package.json that pulls in the `@nms/q` libraries as described below


### Server -- `demo/final/server/server.js`
Code this up first and start it with nodemon. As you build out the other apps, you'll start seeing messages in the console detailing each connection.

* Sets up a Q server on port 3333
* Opens up 2 "queues" called "database" and "network"
* Each of these queues specifies some events that will be monitored
* When a publisher publishes one of these events to the right queue, the server will then broadcast that out to any connected clients.

### Logger Client -- `demo/final/logger/logger.js`
Once the server is running, code the logger and start it with nodemon. You should see console logs that describe which queues it's successfully connected to and which events have been subscribed.

* Connects to the queue server's "database" and "network" queues
* Subscribes to a number of events in each queue
* Whenever a subscribed event is fired from the server, the appropriate callbacks are run

### Network Client -- `demo/final/network/network.js`
As with the logger client, code it up and start it with nodemon and keep an eye on the logs.

* Connects to the queue server's "network" queue
* Subscribes only to the "attack" event within it.
* Whenever a subscribed event is fired from the server, the appropriate callback is run

### App -- `demo/final/publisher/publisher.js`
Code this up last. You'll want to highlight how this will make things happen.  As this application publishes events:

* The server will hear the event
* If the event is valid, it'll broadcast it
* If any other servers (i.e. logger, network) are connected to those queues and subscribed to those events, they will be captured and logged.

### DEMO STRETCH GOAL

If you finish the demo early, and the class is able to take the deep dive, explore ...

How does `@nmq/q` work?

* View the [docs](https://www.npmjs.com/package/@nmq/q) at npm
* Clone the [repo](https://github.com/jetcitysoftware/q)
* Do a code review of how the Queues/Events are setup
  * Queues are socket.io namespaces
  * Events are rooms within the namespaces
  * Publish pushes events to clients in the correct namespace and room

