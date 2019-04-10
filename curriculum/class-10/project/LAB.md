# Block 2 Project: Book App v2

Refactor the Code Fellows 301 Book App, migrating it from Postgres(SQL) into Mongo(noSQL) for data storage and modularize the server.

## Before you begin
Refer to *Getting Started* in [lab-instructions.md](../../../reference/submission-instructions/labs.md) for complete setup instructions

Refer to the [Joins and Virtual Columns](../../class-09/README.md) examples and explanation from Class 09 as a refresher on connecting 2 documents. This will help you connect books and bookshelves

## Requirements

* The UI must remain unchanged
* All of the current routes must remain unchanged
* Data must be served to the application from either Postgres (current implementation) or MongoDB

### Assignment: Refactor Book App

#### Modularize it, so you can extend it

* Modularize the server code, keeping the current postgres database and functionality in tact.
  * `server.js` should be a requireable module
  * `index.js` should be written to
    * require your server.js and start
  * Middleware functions should moved to appropriate files, perhaps in a `middleware` folder
  * `routes.js` should be written to handle routing
    * Move the route definitions to this file and `use()` them in your server
  * Move the route handling functions to a separate library file (e.g. `pg.js`), require them in your `routes.js` file, and ensure that your routes still operate
    * It might be a good idea to move the code that requires pg client and does the connection to the database into this file.
    
At this point, the server should be working the same, but whereas before, everything was in one file (`server.js`), now, we have things in correctly named files according to their purpose. 

The key change here is the addition of the `pg.js` file which does the postgres connection and has the functions that run when the routes are accessed. It's the only file in the system now that knows about postgres.

**In the next step, we'll add support for mongo.**
  
* Create a new file for handling the routes (e.g. `mongo.js`)
  * Copy the contents of the `pg.js` file into this file so that you have a visual on what each function needs to do.
* Change your router to require the `mongo.js` file instead of the `pg.sql` file
  * At this point, your sever should **still** work -- you've required a different file and created some models, but haven't actually hooked into mongo yet ...
* Create mongoose schemas for books and bookshelves (new files)
* In the `mongo.js` file, require those schemas
* In the `mongo.js` file, connect to your process.env.MONGODB_URI
* In each of your route handlers, where you have SQL statements, replace that logic with mongoose equivalents (`.find()`, `.save()`, etc) to perform the database operations.
  * *Pro Tip: Be sure to send data back to the EJS rendering functions that has the same shape as what the Postgres version was doing*
* Recommendation:
  * Do the Create route first.
    * Search for books, add them
    * Verify that you can see them in the books collection
    * For now, ignore the bookshelves logic.  Just add the book!
  * Do the /books route next
    * This should allow you to see them rendering in the browser
  * Then work on the Update & Delete routes


### Implementation Notes & Advice

* You are not required to use the "API Server" or RESTful routes that were developed as part of your lab assignments during this block.
* Create a new .env variable that you can change, which the `routes.js` file can use to determine whether to load the `mongo.js` or the `pg.js` file. Each of them has the same functions exported, but use different databases.  

### Stretch Goals

* Wire in the bookshelves. These will need to be virtually joined in the mongoose schemas.  Once you've done that, then you can revisit the Create and Update routes and wire that logic back in.
* Can you a RESTful API instead of direct mongo methods to do the database work?
* Can you create data models for PG and Mongo that look the same, that have the logic, but that simply implement the CRUD operations differently? (think back to how we did the memory vs mongo implementations)

**Software Engineering Notes!** *When you refactor, the heart of the task is to keep things the same (visually and functionally) while completely replacing the underlying implementation*
  
### Testing
* Write a complete set of model and server/route tests using `supergoose`
* Your tests should work unchanged regardless of which database system is active!

## Assignment Submission Instructions
Refer to the [lab-instructions.md](../../../reference/submission-instructions/labs.md) for the complete lab submission process and expectations

