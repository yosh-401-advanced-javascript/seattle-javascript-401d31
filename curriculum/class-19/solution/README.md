# Solution: Socket.io Namespaces and Rooms

## Lab Requirements
Students will be writing a server that accepts connections to 2 namespaces: `numbers` and `letters`, each with a room (`negative` and `lowercase`) that can be optionally joined by a client.

Students should also compose an `app.js` that runs an interval and emits the `next-number` and `next-letter` events periodically.

[Running Client Application](https://pmww0ww42q.codesandbox.io/)

#### Grading Standards & Notes
  * Features
    * The server must respond to 2 events: `next-number` and `next-letter` and emit `number` and `letter` events with some payload.
    * For connections that join the rooms, those rooms must emit `_number` and `_letter` events **only to sockets that have joined** the `negative` and `lowercase` channels, respectively.
  * Code Quality
    *
  * Testing
    *
  * Deployment
    * Travis Only
    * React app is the visual validator
  * Documentation
    * README Standards
    * JSDoc Required

#### Lab Assistance Notes


