'use strict'

const server = require('./lib/server')

server.start(3000, () => console.log(`Server is running on port ${3000}`))