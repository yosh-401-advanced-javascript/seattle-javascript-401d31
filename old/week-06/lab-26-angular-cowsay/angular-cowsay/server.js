const express = require('express')
const morgan = require('morgan')
const port = process.env.PORT || 8080
express()
.use(morgan('dev'))
.use(express.static(`${__dirname}/public`))
.listen(port, () => console.log('server up ~-->:', port))
