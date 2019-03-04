![cf](http://i.imgur.com/7v5ASc8.png) Facilitators Guide: Remote APIs
===============================================================

## Preparation
* Read Up on [Thunk Middleware](https://alligator.io/redux/redux-thunk/) and async issues with Redux applications
* There's a host of issues that arise when trying to do asynchronous things in a Redux action.  Principally, they just won't run in order

## Lecture Main Topics & Overall Flow
* Asynchronous issues with Redux
  * Actions must be objects, period.
  * Action Creators therefore must return objects.
  * But ... in the real world, we do asyncronous things like talk to servers
  * Enter "thunk", which lets our action creators return a function instead of an object.
    * Thunk Middleware executes that function THEN dispatches the actual action, which returns that object.


## Lab Prep
The lab for this lesson will require the students to refactor an application that pulls in data from the Star Wars API to change from regular state into a Redux store

Additionally, they'll need to split the application out into multiple components

They will need to implement thunk and async calls as well as to figure out how to pass data between components.

As a stretch goal, they should refer to the store before doing any API calls to save the network.

## What bugs, issues, or surprises have come up in the past for this class?
*

## General Comments and Notes
* In the previous class, we worked on dynamic forms.  This class we're working on using Thunk middleware to hit remote APIs. This is leading towards our next class where those concepts get merged and we use a remote API with a form to perform full CRUD operations.
