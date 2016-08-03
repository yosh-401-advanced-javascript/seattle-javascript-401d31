# Create an Error Handler Factory Service
Create a "factory" style service (basically a constructor function) that should return a function that can be passed into a promise as the second function of a `.then` call or a `.catch`. This function should also be callable in other parts of your app. Your initial function call should take all the information/data structures that are pertinent to the error handling function.

# Requirements
  * A constructor function that returns a function. The initial constructor function should be injectible as a service in your Angular app.
  * A way of communicating errors to both a developer and user of the application.
  * A way to customize your error messages and where they go.
