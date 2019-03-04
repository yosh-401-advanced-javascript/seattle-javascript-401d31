![cf](http://i.imgur.com/7v5ASc8.png) Facilitators Guide: Socket.io Namespaces and Rooms
===================================================================

## Preparation
* Spend a lot of time both in the demo and the solution code.
* Namespaces and Rooms in socket.io can be finicky if you're unsure of how it all connects.
* Definitely rewrite the demo a few times, using  your own ideas for namespaces and rooms
* Try different combinations of clients and apps to raise and hear events, and different ways to pass payload around.
* Its very easy to get into a situation where a client never sees an event or sees every event, even when things look right.  So ... practice
* Live in the socket.io docs. They're minimalist, but there's good examples within.

## Lecture Main Topics & Overall Flow
* Discuss the nature of namespaces and rooms
* Slack is a perfect example of how this works.
    * Workspace = Namespace
    * Channel = Room
* Ultimately, it's still pub/sub
* We're just now letting you categorize
* Looking ahead, we can start to think about using rooms in alternative ways
  * Because we can get a list of clients in a namespace or in a room, we can use rooms as dopplegangers for events to track subscribers.

## Live Coding Demo(s)
The demo for this topic is comprised of many files ... if you run nodemon on ALL of them, you will see everyone connect, and then the app starts firing off events, to which the server can respond and emit.  Only the properly connected parties can see messages to which they are registered for.  This is really cool once its all up and running.  Build this out piece by piece.  Just app, server and student, and then start laying more on.

* `server.js` 
  * Sets up the socket.io connection
  * A global listener (default namespace)
  * A namespace called "codefellows"
  * A join listener in codefellows for the rooms
  * Generic and room specific listeners in codefellows
* `student.js`
  * Connects to the codefellows namespace
  * Joins the 'students' rooom
  * Sets up some listeners for lunch and grades
* `instructors.js`
  * Connects to the codefellows namespace
  * Joins the 'instructors' rooom
  * Sets up some listeners for lunch and grades
* `public.js`
  * Connects to the default namespace
  * Sets up a simple greeting listener
* `app.js`
  * Connects to the default and codefellows namespaces
  * Runs an interval and sends out random messages

## Lab Prep
Please refer to the text in the [Solution Documentation](./solution/README.md) to see a full treatise on the student expectations as well as the test app that they will be running their servers against.

## What bugs, issues, or surprises have come up in the past for this class?

## General Comments and Notes
