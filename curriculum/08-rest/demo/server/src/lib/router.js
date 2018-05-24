'use strict';

const parser = require('./parser.js');

const router = module.exports = {};

router.routes = {};

const methods = ['GET','PUT','PATCH','POST','DELETE'];

methods.forEach( (method) => {
  router.routes[method] = {};
  router[method.toLowerCase()] = function(path, callback) {
    router.routes[method][path] = callback;
  };
});

router.route = (req,res) => {

  return parser(req)
    .then(req => {
      // Determine which of the things in the routing table matches us
      let handler = router.routes[req.method][req.url.pathname];
      // If we have one, run the function contained within
      if (handler) {
        return handler(req,res);
      }
    })
    // Otherwise, bug out with an error
    .catch(err => {
      console.error('NOT_FOUND', req.url.pathname);
      res.writeHead(404);
      res.end();
    });

};