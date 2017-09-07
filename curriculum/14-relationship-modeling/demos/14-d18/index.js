'use strict'

const debug = require('debug')('http:index')
const PORT = process.env.PORT || 3000
require('./lib/server').listen(PORT, () => debug(`Listening on ${PORT}`))
// require('./lib/server').start()
