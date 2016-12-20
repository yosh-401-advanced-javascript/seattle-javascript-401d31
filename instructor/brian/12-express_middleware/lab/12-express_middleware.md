![CF](https://camo.githubusercontent.com/70edab54bba80edb7493cad3135e9606781cbb6b/687474703a2f2f692e696d6775722e636f6d2f377635415363382e706e67) Lab 12: Single Resource Express API
===

## To Submit this Assignment
  * Fork this repository
  * Write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-brian`
  * Push to your repository
  * Submit a pull request to this repository
  * Submit a link to your PR in canvas
  * Write a question and observation on canvas

## Include
  * `package.json`
  * `.eslintrc`
  * `gulpfile.js`
  * `.gitignore`
  * `README.md`

## Description (feel free to use the in-class lecture code from today as a point of reference)
  * Create a `node.js` and `express.js` REST API with `GET`, `POST`, and `PUT` routes
  * Create an `error-middleware` module to handle errors and error messages
    * be sure to use the `http-errors` module to associate your errors with the appropriate status code
  * Create a custom `cors-middleware` module, that uses the npm `cors` module, to allow for public access to your API
  * Add a `deleteItem` and `availIDs` method to your `storage` module for deleting items and displaying all available id's when performing `GET` requests to `/api/resource-name`
  * Add an `updateNote`, `fetchNote`, and `fetchIDs` static method to your `Note` constructor - these should be used in order to update a note, get a note, and access all notes at the `/api/resource-name` endpoint
    * be sure to use the `storage` module as the core logic for this, your `Note` methods should just be wrappers for convenience
  * Create a `note-router` module to handle all `GET`, `POST`, and `PUT` routes
  * Create a series of `note-route-tests` to test your routes and expected results
    * **hint:** you'll want to use the `before` and `after` hooks provided by `mocha` in order to setup an example note or other associated mock data
