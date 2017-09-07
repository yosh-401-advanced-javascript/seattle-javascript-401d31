'use strict'

const faker = require('faker')
const Toy = require('../../model/toy')
const mockChild = require('./mock-child')

const mock = module.exports = {}

mock.createOne = () => {
  let result = {}
  return mockChild.createOne()
  .then(child => {
    result.child = child
    return new Toy({
      name: faker.hacker.noun(),
      desc: faker.hacker.phrase(),
      child: child._id.toString(),
    }).save()
  })
  .then(toy => {
    result.toy = toy
    return result
  })
}

mock.createMany = n => {
  let result = {}
  return mockChild.createOne()
  .then(child => {
    result.child = child;
    let toysSavePromises = new Array(n).fill(0)
      .map(() => new Toy({
        name: faker.hacker.noun(),
        desc: faker.hacker.phrase(),
        child: child._id.toString(),
      }).save())
    return Promise.all(toysSavePromises)
  })
  .then(toyss => {
    result.toyss = toyss
    return result
  })
}