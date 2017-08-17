![cf](http://i.imgur.com/7v5ASc8.png) 01: Node Ecosystem
=====================================

## Node.js Resources
* read [about nodejs]
* skim [libuv docs]
* skim [about v8]

## ES6 Resources
* read [just another guide to ES6]
* skim [node and es6 docs]

## NPM Resources
* read [what is npm]

## Testing Resources
* read [a gentle intro to tdd in js]
* read [expect docs](http://chaijs.com/api/bdd/)
* read [mocha getting started guide]

## Learning Objectives
* students will be able to set up a basic node.js project
* students will be able to create custom node.js modules that conform to the CommonJS module pattern
* students will be able to construct and run basic unit tests
* students will be able explain the TDD philosophy of red, green, refactor

## Use Your Computer Like A Developer
It's time to unlearn any bad computer usage habbits, you may have developed in you pre-programmer years. It is critical that you keep your file system organized. Writing code is dificult enough, so dont allow your problem to be finding your code on the file system. You should also come up with a system for naming your files, and never deviate from it!!! Keep all of your projects in one place, and allways use version control. Use best git pratices even when you are working on personal projects! Use the command line when ever posible, in the long run it will save you many hours of time. 

#### File Naming Tips
Name all of your files with cabob-case ("-" seporated words). Don't use uppercase letters unless you want the file to appear first when you run `ls`. In git projects it is standard to capitalize README.md for this reason.

## NodeJS
NodeJS is an open source framework for writing javascript on your operating system. Node is compromised of the **V8** Javascript runtime, and the **NodeAPIs**. V8 is the Javascript runtime developed for the Chrome browser, and is written in C and C++. The Node APIs are writtend in C, C++, and Javascript. Node was developed to enabled developers to easily write code with asynchronous input and output (IO). In many other langauges asyncronous IO creates a lot of work for developers, and can be error prone. Node uses an event loop driven non-blocking architecture, that enables node to have a very low overhead when it is not running. Node has an increadibly rich ecosystem of packages available through the Node Package Manager (NPM). 

#### Testing and TDD
* test driven development
* TDD relies on a very short development cycle
  * this encourages developers to create small, testable, features
* TDD process
  * make a plan for the feature(s) needed to make your program work
  * choose a feature to implement
  * write code that tests that feature's behavior
  * your tests should fail - the feature has not been implemented yet
  * create the feature
  * your tests should pass - the feature has been implemented
  * refactor for optimization
  * your tests should still pass - the behavior of your featured should not have changed
    * this is process is referred to as **red, green, refactor**
  * **red** - the test is written, but fails
  * **green** - the test passes - the feature has been implemented
  * **refactor** - the code runs better and all tests still pass

#### Mocha
* what is MochaJS?
  * feature rich JS testing framework
  * gives us access to use `describe` and `it` blocks for greater abstraction
  * globally install MochaJS: `npm install -g mocha`
* what are assertions?
  * expressions that encapsulate logic and are evaluated in a targeted test
  * we create assertion tests to check against our logic
* difference between unit, e2e, and integration testing
  * e2e: tests if the flow of an application, from start to finish, works as expected
  * unit: smallest testable parts of an application are tested
  * integration: phase of testing where individual modules are combined and tested as a group

<!--links -->
[about nodejs]: https://nodejs.org/en/about/
[node and es6 docs]: https://nodejs.org/en/docs/es6/
[libuv docs]: https://github.com/libuv/libuv
[about v8]: https://developers.google.com/v8/
[what is npm]: https://docs.npmjs.com/getting-started/what-is-npm
[a gentle intro to tdd in js]: http://jrsinclair.com/articles/2016/gentle-introduction-to-javascript-tdd-intro/
[mocha getting started guide]: http://mochajs.org/#getting-started
[just another guide to ES6]: https://medium.com/sons-of-javascript/javascript-an-introduction-to-es6-1819d0d89a0f#.wb7rj1gin
