'use strict'

const debug = require('debug')('http:json-parser')

module.exports = (request) => {
  return new Promise((resolve, reject) => {
    if(request.method === 'POST' || request.method === 'PUT') {

      let sentText = ''

      request.on('data', buffer => sentText += buffer.toString())
      request.on('error', err => reject(err))
      request.on('end', () => {
        try {
          request.body = JSON.parse(sentText)
          return resolve(request)
        } catch(error) {
          return reject(error)
        }
      })
    }
  })
}