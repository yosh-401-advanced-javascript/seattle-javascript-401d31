'use strict'

// debugging setup
const debug = require('debug')('http:server')

// express setup
const PORT = process.env.PORT || 3000
const express = require('express')
const router = express.Router()
const app = module.exports = express()

// mongo setup
const mongoose = require('mongoose')
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/toy-dev'
mongoose.Promise = require('bluebird')
mongoose.connect(MONGODB_URI, { useMongoClient: true }) 

// routes 
require('../route/route-toy')(router)
require('../route/route-child')(router)

// mount middleware
app.use(require('body-parser').json())
app.use(require('cors')())
app.use(router)

app.all('/*', (req, res) => res.sendStatus(404))


// let server
// const serverControl = module.exports = {}
// serverControl.start = () => {
//   return new Promise((resolve, reject) => {
//     if(!server || !server.isOn){
//       server = app.listen(PORT, () => {
//         console.log('server up', PORT)
//         server.isOn = true
//         resolve(server)
//       })
//       return 
//     }
//     reject()
//   })
// }

// serverControl.stop = () => {
//   return new Promise((resolve, reject) => {
//     if(server && server.isOn){
//       server.close(() => {
//         console.log('server down')
//         server.isOn = false 
//         resolve()
//       })
//       return 
//     }
//     reject()
//   })
// }