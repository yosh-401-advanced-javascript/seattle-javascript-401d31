![cf](http://i.imgur.com/7v5ASc8.png) 12: Express Middleware
===

## Resources
* skim [morgan docs](https://github.com/expressjs/morgan)
* skim [cors docs](https://github.com/expressjs/cors)
* skim [dotenv docs](https://github.com/motdotla/dotenv)

## Learning Objectives
* students will be able to work with application, router, and 3rd party middleware through the use of express.js
* students will be able to implement custom middleware through the use of express.js
* students will be able to create custom routers for a specific resource

## Express middleware 
Express middleware are functions that have access to the request object, response object, and next. Middleware are chained together, and can effect the entire app or a single route. Middleware often process the request or application state and then modify request or respnse. Modifying the request and or response object is usful because future middleware and routes will have access to that information. Middlware use cases include parsing authorization and authentication, parsing json, xml, or mulitpart/form-data request bodys, logging, interacting with external APIs to send or retrive data, and much more. Any middleware can end the middleware chain by sending a response. 

#### middleware example 
If the function has an airty of 3, it will be treated as normal middlware.  
``` javascript
// parses the request body as JSON 
// onSuccess the request will have a body and text properties
// onFailure an error will be passed to the next error middleware
module.exports = (req, res, next) => {
   let text = ''
   req.on('err', next)
   req.on('data', (data) => text += data.toString())
   req.on('end', () => {
      try {
        req.body = JSON.parse(text)
        req.text = text
        next()
      } catch (err) {
        next(err)
      }
   })
}
```

#### error middlware example 
If the function is defined with an airty of 4, it will be treated as error middleware.  
``` javascript
// log errors and respond with 500 status code
module.exports = (err, req, res, next) => {
  console.error(err)
  res.sendStatus(500) // ends the middleware chain
}
```

## CORS
The Browsers have been designed to limit client access to servers that the client source is not being hosed on, due to the [same-origin policy](https://en.wikipedia.org/wiki/Same-origin_policy). Cross Site Origin Resource Scripting (CORS) is a mechanisum that servers can implament to communicate to browsers which requests that an external script (script hosted on a different domain) are allowed to make. 

![cool](https://www.html5rocks.com/static/images/cors_server_flowchart.png)
