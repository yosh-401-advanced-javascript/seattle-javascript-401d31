# Facilitators Guide: Remote CRUD

In the previous class, we made simple GET requests to the Star Wars API. Prior to that, we executed simple CRUD functionality using only the store.

In this class we will be continuing to use remote APIs with React/Redux+Thunk.

The path for this session will be to revisit both of those previous solutions and marrying the concepts by pulling the schema from the server and posting data back to the server instead of using a .json file and the in-memory store


## Preparation

* Get your local API server up and running with the following routes:
  * `/api/v1/models` (a list of models)
  * `/api/vi/<modelname>/schema` (the JSON Schema for the requested model)
  * GET, POST, PUT, PATCH, DELETE on `/api/v1/<modelname>`
* Ensure that the solution and demo code, when using your server work properly.
* Practice building up the demo from a baseline starting point so that you can hit the talking points.
* Its important that you can hit the server routes both directly with JSON and from a FORM post so that you can demonstrate both methods to the students.

## Lecture Main Topics & Overall Flow
* CRUD
  * We already have Thunk in place for GET requests
  * Now, lets add it in place for all requests.
  * How can we clean up the calls to superagent?
    * Can we librarize this?
    * Switch between many ajax libraries
  * How do we handle authentication headers?
    * Examine how `superagent` and `fetch` do this.


## What bugs, issues, or surprises have come up in the past for this class?
* They will struggle with toggling the state of the form (clearing it after a post/put) and getting the async behavior down.
* Many students will see this is an opportunity to implement a spinner/wait state. Great! This is a cool thing to demo.

## General Comments and Notes
* This is a prep lab for the end-of-block capstone "CMS" project, which is to do CRUD on multiple models in true CMS fashion.
