# Solution: Book App v2

## Lab Requirements
The students must stand up a fully functioning mongo based version of the book app from 301. Ideally, a change of a setting in .env could allow you to switch between postgres and mongo storage/routing engines.

#### Grading Standards & Notes
  * Features
    * All features must work identically as the 301 starter code 
  * Code Quality
    * Code must be modularized
    * Routes must be split out
    * A switch must be implemented to have the app work with either data system.
  * Testing
    * Complete set of model and routing tests must be implemented
  * Deployment
    * Travis Tests
    * Heroku Deployment
  * Documentation
    * README Standards 
    * JSDoc Required
    * UML Diagram
    
#### Lab Assistance Notes

*A suggested path for adding Mongo Support ...*

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
