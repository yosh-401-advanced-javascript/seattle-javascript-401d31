![cf](http://i.imgur.com/7v5ASc8.png) Facilitators Guide: OAuth
===============================================================

## Preparation
* Understand the full OAuth flow and the history of this API/Process/Workflow.
* Ensure that your .env file is well explained, because you will need to add a bunch of SECRET stuff to it. Important to teach this as you go.
* Practice, practice practice. By its nature, OAuth is a 5 step handshake process. The devil is in the details for sure. It's a good idea to build up the demo step by step (log out the result of each promise in the chain).  This does 2 things for you:
  * First, it gives you a chance to explain each part of this long process step by step, and see things build up.
  * Second, because this process is such a pain, it gives YOU a chance to either force error conditions (to have some teaching moments) or recover from unforseen issues that come up in the process


## Lecture Main Topics & Overall Flow
Before getting into OAuth, make sure and do a **SOLID** code review of the authentication solution code. It's imperative that we have a solid foundation of basic authentication (conceptually) and the auth-server as built before moving on and adding a new layer of complexity to it.

In this lecture, we introduce OAuth, which is quite a handshake process, but at the end of the day, we end up in the same place -- a user is "Logged In" to our server and we send back a token.

The principle difference is that in OAuth, we must conflate the login and signup processes.  If a user grants access (i.e. from Google), we may not yet have an account for them on our end, so the login process might beget a signup/create process.
  * Sub


## Live Coding Demo(s)
#### Demo Name -- `demo/www-server`
* This is a simple one -- the server just throws up the index.html file and uses jQuery to build the google login link dynamically, based on all the variables.
* Its important to have this as an actual server, otherwise the students couldn't deploy it to Heroku

#### Demo Name -- `demo/api-server`
* Start with the `auth-server` that was coded in the previous lecture and build from it.
* Most of this lab will be spent building out the handshakes in the `auth/lib/oauth.js` file.
* There is a small bit of work in the `model.js` file, where you build out the `createfromOAuth()` function that creates the mongo user.
* Lots of opportunity in here to use the debugger to check the progress of all the handshaking.

## Lab Prep
* The students lab starter code matches the live demo and is also the full solution code (minus the individual providers' code). 
* This lab is super fun. Pair up your students and assign each pair a different OAuth provider.  You demo'd google.  Assign groups to Facebook, Github, Auth0, etc.
* The next day, have the groups come and present their solutions during code review.  This is a great chance to force them to RTFM and figure this out.  It's also really cool to see that all of the solutions are pretty much the same (it is OAuth, after all)
* Another good code review option is to create an OAuth Library Module that incorporates all of the class' solutions into the main api-server so you can switch between them.

## What bugs, issues, or surprises have come up in the past for this class?

## General Comments and Notes


