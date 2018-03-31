'use strict'

const debug = require('debug')('http:storage')

const storage = module.exports = {}
const memory = {}

storage.create = function(schema, item) {
  debug('#create')
  return new Promise((resolve, reject) => {
    if(!schema || !item) {
      debug('Error occurred during validation of schema and/or item')
      return reject(new Error('Cannot create. Schema and Item required.'))
    }

    if(!memory[schema]) memory[schema] = {}

    memory[schema][item._id] = item
    debug('Returning created item', item)
    return resolve(item)
  })
}

storage.fetchOne = function(schema, itemId) {
  debug('#fetchOne')
  return new Promise((resolve, reject) => {
    if(!schema || !itemId) {
      debug('Error occurred during validation of schema and/or item id')
      return reject(new Error('Cannot create. Schema and Item ID required.'))
    }

    if(!memory[schema]) return reject(new Error('Cannot fetch record. Schema does not exist.'))
    if(!memory[schema][itemId]) return reject(new Error('Cannot fetch record. Item ID not found.'))

    debug('Returning requested item', memory[schema][itemId])
    return resolve(memory[schema][itemId])
  })
}