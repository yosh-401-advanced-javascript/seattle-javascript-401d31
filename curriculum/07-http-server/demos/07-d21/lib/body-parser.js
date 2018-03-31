'use strict'

const url = require('url')
const queryString = require('querystring')

const requestParser = module.exports = {}

requestParser.parse = (request) => {
  return new Promise((resolve, reject) => {
    //-------------------------------------------------------------
    // This will be done for ALL requests
    //-------------------------------------------------------------
    request.url = url.parse(request.url)
    request.url.query = queryString.parse(request.url.query)

    if(request.method !== 'POST' && request.method !== 'PUT')
      return resolve(request)
    //-------------------------------------------------------------
    // Parsing a body is JUST for HTTP methods that include a body
    //-------------------------------------------------------------

    let sentText = ''

    request.on('data', (buffer) => {
      sentText += buffer.toString()
    })

    request.on('end', () => {
      try {
        request.body = JSON.parse(sentText)
        return resolve(request)
      } catch(error) {
        return reject(error)
      }
    })
  })
}