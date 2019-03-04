![cf](http://i.imgur.com/7v5ASc8.png) Solutions: HTTP and REST
==============================================================

## Lab and Grading Notes

### json-server
* Perform an `npm install -g json-server`
* This will get you (and the student) a running JSON API Server
* Students will create a few data models using the json-server app
  * That should be as simple as creating a db.json file
  * Look for a db.json file in their lab repo, you should be able to run against that json file.
  * For grading purposes, just make sure it's there and it works
  
### web server
* Implement 2 routes `/category` and `/category:id` that will:
* Call handler function that ...
  * Do superagent.get() calls to the running json-server
  * perform an app.render() with that data to a view
  * In the view, iterate the results and show the list of records 
  
```
app.get('/list', listPage);
app.get('/category/:cat', categoryPage);

function listPage(request, response) {
  superagent.get( `${API}/categories`)
    .then(data => {
      response.render('site', {page: './pages/categories', title:'Categories', items: data.body});
    })
    .catch( error => {
      response.render('site', {page: './pages/error', title:'Error', error:error});
    });
}

```

### Swagger Doc
The big part of this lab will be learning how to write swagger documentation for an api (and really, understanding what that is).

This is the students second "RTFM" lab, so push them in that direction.

* Students will use the swagger online tools to write "swagger doc" for their API.
  * They need to first build their server and tinker with it so they know how it works.
  * Leave it running
  * Write swagger doc that they can run against their own server.
  * They have been provided a simple starter swagger.json file (GET only) that they can paste into the swagger online editor.
    * They must document all of the rest routes (GET,PUT,POST,PATCH,DELETE) and the correct schema in the swagger.json file
* To prove that this works, you will need to fire up json-server at their db.json file and then paste in their swagger.json into the editor at swagger.io. 
 * Once you've done that, you can do the "Try It Ot" button in the swagger website to actually run their routes.
  
### Stretch Goal: web server
* Students will implement a simple (multi-route) express/ejs server with superagent
  * Routes call into the json-server API for data
  * This server (aside from the routes) was supplied for them.
  * The task here is to use superagent.get() to pull from the API and feed their view
