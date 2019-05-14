'use strict';

const methodOverride = require('401-js-2019-guide/curriculum/class-10/solution/src/middleware/method-override');

module.exports = (methodOverride((request, response, next) => {
  if (request.body && typeof request.body === 'object' && '_method' in request.body) {
    let method = request.body._method;
    delete request.body._method;
    return method;
  }
}));
