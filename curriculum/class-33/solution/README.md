![CF](http://i.imgur.com/7v5ASc8.png) SOLUTION - Remote APIs
======================================================

[Solution](https://codesandbox.io/s/43x42nwmn7)

The primary task for students today will be to take a working react application and convert it from app/component state into using a Redux store.

They'll need to create 2 reducers and action sets.

Its likely that they will make 2 actions, both called "GET" that end up in both reducers firing. Be on the lookout for oddities like this as they go through their implementations.  This potential case is not covered in lecture, in hopes that we run into this during lab or code review as a discussion point.

Tests are required. Guide the students into mocking out the superagent calls.
