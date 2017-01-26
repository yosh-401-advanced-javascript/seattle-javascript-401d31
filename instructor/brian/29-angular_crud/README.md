![cf](http://i.imgur.com/7v5ASc8.png) 29: Angular CRUD
=====================================

## CRUD Services
  * we'll be using angular services to create libraries that allow for RESTful CRUD operations against the `slugram` backend application
  * in order to gain access to a user's token, we'll need to inject our custom auth service into a series of CRUD services
  * CRUD services can maintain state if needed
    * example: if a gallery service is used to gather all of a users galleries, it may store them on the service itself - this is highly useful as many controllers are going to need to access the list of return gallery data
