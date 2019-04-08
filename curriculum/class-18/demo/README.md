# Demo: Socket.io

This is effectively the **SAME** server that we built in class 17, refactored to use `socket.io` instead of raw TCP. This is a chance to not only talk through the advantages of web sockets, but also revisit the multi-service architecture that we're building.

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
