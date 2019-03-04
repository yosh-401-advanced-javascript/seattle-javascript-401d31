![CF](http://i.imgur.com/7v5ASc8.png) SOLUTION - Socket.io Namespaces and Rooms
==========================================================

Students will be writing a server that accepts connections to 2 namespaces: `numbers` and `letters`, each with a room (`negative` and `lowercase`) that can be optionally joined by a client.

The server must respond to 2 events: `next-number` and `next-letter` and emit `number` and `letter` events with some payload.

For connections that join the rooms, those rooms must emit `_number` and `_letter` events **only to sockets that have joined** the `negative` and `lowercase` channels, respectively.

Students should also compose an `app.js` that runs an interval and emits the `next-number` and `next-letter` events periodically.

---

We have deployed a front-end application written in React that will connect a socket.io server running at http://localhost:3000 to the namespaces '/numbers` and '/letters' and which will join the rooms noted above.

When the events (`number`, `_number`, `letter`, `_letter` are emitted from the server to the client, the app will automatically refresh itself with the output from the server.

[Running Client Application](https://pmww0ww42q.codesandbox.io/)

