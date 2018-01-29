'use strict'

const debug = require('debug')('http:note')
const uuid = require('uuid/v4')

module.exports = function(name, desc) {
  debug(`Creating note: ${name}`)
  this.name = name
  this.desc = desc
  this._id = uuid()
}