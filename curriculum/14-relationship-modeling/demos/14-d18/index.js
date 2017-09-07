'use strict'

const PORT = process.env.PORT || 3000
require('dotenv').config()
require('./lib/server').listen(PORT, () => debug(`Listening on ${PORT}`))
// require('./lib/server').start()
