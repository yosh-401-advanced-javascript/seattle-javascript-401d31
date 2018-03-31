'use strict'

const debug = require('debug')('http:storage')
const Promise = require('bluebird')
const fs = Promise.promisifyAll(require('fs'), {suffix: 'Prom'})

const storage = module.exports = {}

storage.create = function(schema, item) {
  return new Promise((resolve, reject) => {
    debug('#create')
    if(!schema || !item) {
      debug('Error occurred during validation of schema and/or item')
      return reject(new Error('Cannot create. Schema and Item required.'))
    }

    let json = JSON.stringify(item)

    return fs.writeFileProm(`${__dirname}/../data/${item._id}.json`, json)
    .then(() => resolve(json))
    .catch(reject)
  })
}

storage.fetchOne = function(schema, itemId) {
  return new Promise((resolve, reject) => {
    debug('#fetchOne')
    if(!schema || !itemId) {
      debug('Error occurred during validation of schema and/or item id')
      return reject(new Error('Cannot create. Schema and Item ID required.'))
    }

    return fs.readFileProm(`${__dirname}/../data/${itemId}.json`, 'utf-8')
    .then(note => resolve(note))
    .catch(reject)
  })
}