![cf](http://i.imgur.com/7v5ASc8.png) Facilitators Guide: Async
===============================================================
<a name="top"></a>

## Preparation

Be proficient in writing and using Callbacks and practice refactoring code from Callback to Promise to Async/Await and back. This is a big part of the demo and the source of a ton of questions from the students

Review the `fs` module documentation and be familiar with the `readFile` and `writeFile` methods.  You'll be discussing asynchronous programming concepts and will want to share random "gotchas" that could take place when testing...

* what happens when you pass `done` into an `it` (or `test`) block but forget to invoke it?
* what happens when you don't pass `done` into an `it` (or `test`) block (for async tests)?
* Practice testing promises
* Practice testing async/await

Today's tests also use a "mock" of the `fs` module, so get familiar with how jest does mocking of native and custom objects and be able to talk about **why** we mock.

* https://jestjs.io/docs/en/manual-mocks
* https://jestjs.io/docs/en/mock-functions
* https://jestjs.io/docs/en/mock-function-api


## Lecture Main Topics & Overall Flow
[Full Lecture Details](#lecture-details)
* Async vs Sync
* How does JS do Async (Call Stack + Callback Queue / Event Loop)
  * draw it on the whiteboard
* Async using Callbacks
  * callback demo
* Async using Promises
  * promise demo
* Async using async/await
  * async/await demo
* Working with Buffers and File I/O
  * Read in a file with the fs module
* TDD with Async
* Mocking for Unit Tests

## What bugs, issues, or surprises have come up in the past for this class?

There's a ton of tinkering with callbacks and async in this lab. The goal is that the students walk away feeling the pain of callbacks and the relief of promises, but also know the pros and cons of each, and when to use them.

There is a danger that they get confused in trying to do too much, so make sure that they pace themselves, write solid tests and can explain what's happening in each iteration.

## General Comments and Notes

