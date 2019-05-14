# Facilitators Guide: HTTP and REST

## Preparation
* Download and install [`json-server`](https://github.com/typicode/json-server) -- It's a node module that you install globally which opens up a zero configuration REST server.  We will connect to this for a couple of days as we dig into REST and HTTP
* Download and install [`httpie`](https://httpie.org/) -- Command line HTTP Client
* Download and install [`postman`](https://www.getpostman.com/) - GUI REST Client
* Re-familiarize yourself with `Express` and `EJS` -- we will be creating a REST client with this.
* Download and install `next.js`, which is a server side React framework. It really makes it simple to fire up a react app (literally, 1 file is needed). We'll be using this build "RESTy", our replacement for Postman.
  * We are not teaching React just yet. Were going to **use it** to work with our API server. It's a light touch to show the students React as an entry point. We'll build up on this as we go, so 2nd half of class won't be as daunting.

## Lecture Main Topics & Overall Flow
* The HTTP Protocol
  * Requests and Responses
  * Picture a request as an "Envelope" --- To and From are on the outside
    * If it's a GET, all of the info is on the outside (exposed) -- query string, path, etc
    * If it's a POST, then only the address is on the outside, but inside the sealed envelope is the BODY of the request that the server has to open and process
  * A Response can also be seen that way, coming back from the server.
  * Headers tell the clients and servers how to open the envelope and give hints as to what might be inside
  * SSL/TLS adds a layer of encryption in addition to the sealed body (with shared keys)
  * All requests are sent with a METHOD (Verb)
  * All responses come back with a code and data (Noun)
* REST
  * Representational State Transfer
  * Uses HTTP as the communication protocol
  * Specific Verbs and Addressing standards (i.e. US postal System)
    * `GET`, `POST`, `PUT`, `PATCH`, `DELETE`
  * Addresses the METHODS you can run against a RESOURCE
  * Usually JSON
  * Generally Versioned
* API Servers
  * Handle REST Requests
  * Documented with [Swagger](https://swagger.io/)
    * Document routes, params, query strings
    * Create schemas for input and output specification
    * Documentation is "live" and runs against your actual API
* Multiple Tiers of Servers and Services
  * Most services require auth/auth
  * Web servers usually don't go directly to a REST API
  * Many larger companies use a middle tier to act as proxy to services
  * Browser - Web Server - (Services) - Web Server - Cient


## What bugs, issues, or surprises have come up in the past for this class?

* Swagger is hard to write and the docs are written for senior devs.
* Be prepared to explain why swagger is important
* Be prepared to show how you can use swagger docs to test live apis

## General Comments and Notes
* The express/ejs server that they build will become something that they do on a daily basis as part of their "warmups", so push them to hit this stretch goal.
