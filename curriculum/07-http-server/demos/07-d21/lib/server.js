'use strict'

const http = require('http')
const faker = require('faker')
const requestParser = require('./body-parser')

//-------------------------------------------------
const app = http.createServer((request, response) => {
  //--------------------------------------------------------------
  // PROCESS REQUEST
  //--------------------------------------------------------------
  requestParser.parse(request)
    .then(request => {
      if(request.method === 'GET' && request.url.pathname === '/time') {
        response.writeHead(200, { 'Content-Type': 'text/html' })
        response.write(JSON.stringify({
          now: Date.now(),
          date: new Date(),
        }))
        response.end()
        return
      } else if(request.method === 'POST' && request.url.pathname === '/echo') {
        response.writeHead(200, { 'Content-Type': 'application/json' })
        response.write(JSON.stringify(request.body))
        response.end()
        return
      }
      response.writeHead(404, { 'Content-Type': 'text/plain' })
      response.write('Not Found')
      response.end()
      return
    }).catch(error => {

      response.writeHead(400, { 'Content-Type': 'text/plain' })
      response.write('Bad Request')
      response.end()
      return
    })
})

//-------------------------------------------------
const server = module.exports = {}
server.start = (port, callback) => app.listen(port, callback)
server.stop = (callback) => app.close(callback)