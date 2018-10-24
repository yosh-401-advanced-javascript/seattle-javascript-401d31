const url = require('url');
const queryString = require('querystring');

module.exports = (req) => {

  // req.url = http://localhost:3000/api/v1/notes?id=12345
  req.parsed = url.parse(req.url);
  /*
      req.parsed = {
        pathname: '/api/vi/notes',
        query: '?id=12345&name=John',
      }
     */

  req.query = queryString.parse(req.parsed.query);
  /*
      req.query = {
        id:12345,
        name:'John'
      }
     */

}