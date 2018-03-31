'use strict'

// Application Dependencies
const http = require('http')
const Router = require('./router')

// Router Setup
let router = new Router()
require('../routes/route-note')(router)

// Application Setup
const app = http.createServer(router.route())

// Server Controls
const server = module.exports = {}
server.start = (port, callback) => app.listen(port, callback)
server.stop = (callback) => app.close(callback)