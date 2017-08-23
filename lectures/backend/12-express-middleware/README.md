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
Express middleware are functions that have access to the request object, response object, and next. Middleware are chained together, and can effect the entire app or a single route. Middleware often process the request or application state and then modify request or respnse. Modifying the request and or response object is usful because future middleware and routes will have access to that information. Middlware use cases include parsing authorization and authentication, parsing json, xml, or mulitpart/form-data request bodys, logging, interacting with external APIs to send or retrive data, and much more. 

#### middleware example 
``` javascript
// normal middlware has three paramiters
module.exports = (req, res, next) => {
  // do something 
  // if(err)
  //   next(err)
  // else
  //   next()
}
```

#### error middlware example 
``` javascript

// error middleware has four paramiters
module.exports = (err, req, res, next) => {
  console.error(err)
  res.sendStatus(500)
}
```
