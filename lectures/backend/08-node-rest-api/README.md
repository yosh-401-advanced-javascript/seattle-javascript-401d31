![cf](http://i.imgur.com/7v5ASc8.png) 08: REST and Promises
===

## Vanilla REST API Resources
* read [getting started with promises](https://developers.google.com/web/fundamentals/getting-started/primers/promises)
* watch [promises](https://www.youtube.com/watch?v=2d7s3spWAzo)

## Learning Objectives
* students will learn to use promise constructs to manage asynchronous code
* students will learn to create a vanilla RESTful API with in-memory persistence

## Overview
## Promises
  * **Overview**
    * promises are used to solve the problem of nested callbacks (aka: "callback hell")
    * they provide us with a way to make asynchronous code easier to read and follow
    * a promise represents a value which can be available now, in the future, or never
    * basic usage: `new Promise(function(resolve, reject) { ... });`
    * one of the biggest benefits of promises is through the use of the `then()` and `catch()` methods
      * these methods are used to handle returned promises and can be chained as they are on the `Promise` prototype

  * **States**
    * **pending** - initial state - not fulfilled or rejected
    * **fulfilled** - the operation completed successfully
    * **rejected** - the operation failed

  * **Methods**
    * `Promise.all()` - returns a promise that fulfills when all of the promises in an provided array have fulfilled *or* returns a promise that rejects when one of the items in the array rejects
    * `Promise.reject()` - returns a `Promise` object that is rejected
    * `Promise.resolve()` - returns a `Promise` object that is resolved with a given value
    * `catch()` - returns a `Promise` that deals with rejected cases only
    * `then()` - returns a `Promise` that deals with fulfilled cases


## [Rest](https://www.w3.org/2001/sw/wiki/REST)
The HTTP specication descibes an interface for making requests to an HTTP server, but does not provide semanitc guidelines on how that interface should be used. There are many semantic schemas for how HTTP servers should be designed, but Represational State Transfer (REST) is the most common. REST places constraints on how servers can manage requests in order to improve scalability, simplicity, modifiability, visibility, portability, and reliability. RESTful services must subscribe to a client-server architecture inorder to seporate teh user interface concers from data storage conserns. RESTful services must be stateless, which prevents the server manage session state and forces all requtes to contain all the information necessary to service the request. RESTful services must suport caching. RESTful services should support a layerd system, which means clients should not care if the server is the end server or an intermediary server (load balencer or cache).  RESTful services should enfoce a uniform interface that follows four specific constraints. 

#### Four User Interface Constraints
| Constraint | Explanation | 
| --- | --- | 
| Resource identification in requests  | The resource (model) is identifed using the URI |
| Resource manipulation through representations | The representation of a resource (JSON) should be enough information to modify or delete a resource | 
| Self-descriptive messages | Each request should descibe how it should be processed (ie. Content-Type and Accept) | 
| Hypermedia as the engine of application state | The client should be able to dynamicly descover all the available actions and resouces it needs using an OPTIONS request |

#### RESTful HTTP Methods
| METHOD | URI | Function | 
| --- | --- | --- | 
| POST | /api/notes | Create a note resource | 
| GET | /api/notes or /api/notes/:id  | Read a note resources or a note resource | 
| Put/Patch | /api/notes/:id | Update a note resource |
| Delete |  /api/notes/:id | Delete a note resource |
| HEAD | /api/notes/:id | Read metadata about note a resource |
| OPTIONS |  /api/notes | Discover methods available for a note resources |

