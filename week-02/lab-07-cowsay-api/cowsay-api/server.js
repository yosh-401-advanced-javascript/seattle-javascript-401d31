'use strict';

const http = require('http');
const parseUrl = require('url').parse;
const parseQueryString = require('querystring').parse;
const port = process.env.PORT || 3000;
const cowsay = require('cowsay');

var server = http.createServer(function(req, res){
  const url = parseUrl(req.url);
  const query = parseQueryString(url.query);

  if (req.method === 'GET' && url.pathname === '/cowsay' ){
    try {
      res.writeHead(200);
      res.write(cowsay.say(query));
    } catch(e){
      res.writeHead(400);
      res.write(cowsay.say({f: 'dragon', text: '400 bad request\npass me text through a query...\n\ntry: localhost:3000/cowsay?text=lulwat'}));
    }
    res.end()
    return;
  }

  if (req.method === 'POST' && url.pathname === '/cowsay' ){
    req.body = '';
    req.on('data', function(data){
      req.body += data.toString();
    });

    req.on('end', function(){
      try {
        req.body = JSON.parse(req.body);
        res.write(cowsay.say(req.body));
      } catch (err) {
        console.log('sup');
        res.writeHead(400);
        res.write(cowsay.say({f: 'dragon', text: '400 bad request\npass me text through a json...\n\ntry: echo \'{"text":"hello"}\' | http post localhost:3000/api/cowsay'}));
      }
      res.end();
    });
    return;
  }

  res.writeHead(200)
  res.write('Options:\n');
  res.write('\t/coolface');
  res.end();
});

server.listen(port, function(){
  console.log('server is running on port', port);
});
