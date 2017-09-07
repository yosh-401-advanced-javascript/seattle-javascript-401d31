'use strict'

const Toy = require('../../model/toy')
const Child = require('../../model/child')

module.exports = () => {
  return Promise.all([
    Toy.remove(),
    Child.remove(),
  ])
}