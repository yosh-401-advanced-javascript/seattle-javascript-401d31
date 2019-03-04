![cf](http://i.imgur.com/7v5ASc8.png) Facilitators Guide: Node Ecosystem
========================================================================

## Preparation
* Make sure you have the latest version of node, nvm, etc installed
* For a good demo, also have PHP and Perl installed
* Read up on [Jest](https://jestjs.io/docs/en/getting-started), specifically [expect](https://jestjs.io/docs/en/expect) so that you can be prepared to answer questions about "what kinds of things can you test for?"
 
## Lecture Main Topics & Overall Flow
* What is node?
  * An enviornment? An interpreter? A code runner? A server? Yes!
* What is a server?
  * This inevitably comes up ...
  * Show some pictures of huge servers and server farms and blades and whatever.
  * Your laptop is also a server (physically) just like those
  * Software can also be a server
  * Functions are also servers
  * **Anything that can accept a request and serve back an answer is a server**
  * In an app, you have clients and servers at every logical point in code
  * So ... no, node is not a server, it's a tool you can use to make a server
* Modular Programming
  * What does const express = require('express') really mean?
  * Explain why we have modules
    * Breaking apart logic
    * Separating Concerns
    * Keeping things DRY
  * Where do they come from?
    * You can get public/free modules from NPM
    * You can buy commercial modules
    * You can write your own
  * Be ready to talk about module.exports ...
* Test Driven Development
  * Why
    * Speed
    * Accuracy
    * CYA
    * Pinning functionality in the wake of new features
  * How
    * Jest
    * `describe('what you are testing', () => {})`
    * `it('acts some very specific way', () => {})`
    * How do these work together?
    * What does expect() do? (assertions)
    * What can we make assertions about?
    * Advanced topics if you get there ...
      * Getting function in a variable and feeding that to the expect
      * Using faker to really stretch things!
      * before and after

## What bugs, issues, or surprises have come up in the past for this class?
* This will be the first time they've ever hooked anything up to Travis
* This will be the first time they've ever written a test

## General Comments and Notes
The initial hookup of Travis to Github should be done workshop style either at the end of class or during lab in a group setting.  Make sure that the students are properly logged into travis-ci.com, have the travis-ci app installed in their github account, and that they are able to get auto-builds when code is pushed.

*This should have been done as a part of pre-work and Lab-00*
