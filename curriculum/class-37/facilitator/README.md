# Facilitators Guide:  `<Login />` and `<Auth />`

## Preparation
This lesson hits on 2 major points
* Login using Basic and Oauth
* Authorization to hide/show components & controls conditionally

For implementation and testing purposes, we have a running API server at: https://javascript-401-api.herokuapp.com
  * Logins/Passwords:
    * user:USER
    * editor:EDITOR
    * admin:ADMIN

The login piece is a big build, as you'll have to account for the server connection for both Basic and Bearer Auth. In addition to the pure implementation of hitting the server to get logged in, we will be using this opportunity to introduce the React Context API

 Practice working with Context. It can be confusing and difficult to pass state through it, as it does require a function in the consumer in order to function.  Ensure that your demo is tight and well practiced, and be ready to field questions regarding how things are wired and sent through context to the child components.

 Introduce Login as the reason to use Context as you don't want to use Redux for something so "simple", yet passing props all over the place is overkill.  Context lets us more tightly control this bit of global state.

 Have some good use cases in hand for using authorization.  Our component will be a wrapper around things to protect. In this example, the button only shows to logged in users that are allowed to delete.

 ```javascript
 <Auth capability="delete">
  <button onClick={this.deleteRecord}>Delete</button>
</Auth>
 ```

## Lecture Main Topics & Overall Flow
* Do a full code review of the API server
  * ... these are topics covered and built in the 1st half of the course, but we should revisit to level-set
  * How does our auth system work again?
    * What does the server return (if we use ajax?)
  * How does OAuth work?
    * The server can't return ... where does it redirect?
  * What does our database look like?
  * How are we defining Users, Roles, and tie-ing them together?

* Demo a working Login/Auth component (the solution code), highlighting that you can login and logout and see the login form and content change based on that status.
* Draw a diagram of code you want users to be able to use (`<Auth />`)
* Draw a UML diagram of how we're going to get there and solve the problem.
* Students will struggle with the moving parts, so have a good reference point to consistently remind them of where in the process we are as our demo is being written and the code is running.


## What bugs, issues, or surprises have come up in the past for this class?
* Note that codesandbox.io, heroku and other providers won't let you set cookies from the server to the client. You will need some client code to physically set the cookie.

## General Comments and Notes
*

