# SOLUTION - Socket.io Client

## Lab Requirements

* Create a context and hook that integrate with the socket.io server

#### Grading Standards & Notes
  * Features
    * Proper Context -- Hook relationship
    * Code should be extensible and ready to fold in Q
    * The words and form components need to be cleared of chat logic
  * Code Quality
  * Testing
    * Not required
    * ... Too much network mocking required.
  * Deployment
    * Sandbox is ok for the client
    * Server should be at Heroku so we can test it
  * Documentation
    * README Standards
    * React Doc Required

#### Lab Assistance Notes
* This is going to be a tough lab for the students.
* They will first need to create a context wrapper
* Then, they can create a custom hook that uses `useContext()`
* This hook should then be used to provide state and methods
* Notice how the solution code has no actual socket/chat logic in the `<Words />` and `<Form />` components. This will allow us to switch out that logic from socket.io to Q at any time.
