![cf](http://i.imgur.com/7v5ASc8.png) Solution: Authentication
==============================================================

## Notes
* This is a "fix the bugs" lab.
* They have one primary task, which is to use auth to protect the API `schema` route
* However, there's missing and buggy code throughout ...

** Grading Advice / What to look for**

* A really solid readme
* A well thought through UML / Flow Diagram

**BUGS FIXED**

* `app.js` requires authRouter, but never uses it
* `auth/router.js` - `/signin` route is configured as a .get instead of a .post
* `routes/books.js`
  * Needs to import the auth middleware
  * Needs to add `auth` to the route handlers
* `auth/users-model.js`
  * Needs to import jsonwebtoken and bcrypt
  * ~ line 30, bcrypt returns a promise, this needs a `.then()` that returns a boolean
* `auth/middleware.js`
  * Line 24: Function needs a parameter (authString) to work
  * Line 28: Need to create from object, not array
  * ~ line 36, they'll need to set `res.user` and `res.token` before calling next()
