'use strict'

const debug = require('debug')('http:route-note')
const storage = require('../lib/storage')
const Note = require('../models/note')

module.exports = function(router) {
  router.post('/api/v1/note', (req, res) => {
    debug('POST /api/v1/note')

    try {
      let note = new Note(req.body.name, req.body.desc)

      storage.create('Note', note)
      .then(newNote => {
        res.writeHead(201, {'Content-Type': 'application/json'})
        res.write(JSON.stringify(newNote))
        res.end()
      })

    } catch(err) {
      debug(`There was an error: ${err}`)

      res.writeHead(400, {'Content-Type': 'text/plain'})
      res.write('Bad Request')
      res.end()
    }
  })

  router.get('/api/v1/note', (req, res) => {
    debug('GET /api/v1/note')

    if(req.url.query._id) {
      storage.fetchOne('Note', req.url.query._id)
      .then(note => {
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.write(JSON.stringify(note))
        res.end()
      })
      .catch(err => {
        debug(`There was an error: ${err}`)

        res.writeHead(400, { 'Content-Type': 'text/plain' })
        res.write('Bad Request')
        res.end()
      })

      return
    }

    debug(`There was an error`)

    res.writeHead(400, { 'Content-Type': 'text/plain' })
    res.write('Bad Request')
    res.end()
  })
}