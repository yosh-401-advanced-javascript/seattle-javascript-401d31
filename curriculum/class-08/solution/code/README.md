# LAB

## Project Name: LAB Data Modeling

### Author: Author

### Links and Resources
* [repo](https://github.com/)
* [![Build Status](https://www.travis-ci.com/hingham/13-rest-server-hi.svg?branch=master)](https://www.travis-ci.com/hingham/13-rest-server-hi)
* [back-end](https:///)


#### Documentation
* [swagger](ttps://xxxx.herokuapp.com/docs)

### Modules
#### categories.js
#### categories-schema.js
#### product-schema.js
#### products.js

### Setup
#### `.env` requirements
* `PORT` - running on 3000
* `MONGODB_URI=localhost:27017/products`

#### Running the app
* `npm start`
* Endpoint:  `api/v1/products` 
  * Returns a JSON object with name, description, display, inside
* Endpoint: `api/v1/categories`
  * eturns a JSON object with name, description, display, and category inside
  
Commands for the command line: 
Post: `echo '{
	"name" : "a",
	"display" : "b",
	"description" : "c",
	"category" : "my put",
}' | http post :3000/api/v1/{route}`

put: `echo '{
	"name" : "a",
	"display" : "b",
	"description" : "c",
	"category" : "my put",
}' | http put :3000/api/v1/{route}/{id}`

get: `http :3000/api/v1/{route}/{id}`

delete: `http :3000/api/v1/{route}/{id}`

Running Mongo:
* start mongodb path path/to/database
* start mongod in another window
* show dbs
* connect: `db = connect("localhost:27017/store")`
* run: `db.products.find().pretty();` to print all items in db

#### Tests
* How do you run tests? 
* * npm run tests
* What assertions were made?
* * Asserts that sanitize work correctly
* * Asserts that post, get, put and delete work correctly for /categories
* What assertions need to be / should be made?
* * Assertions need to be made for the /products route to check categories 


