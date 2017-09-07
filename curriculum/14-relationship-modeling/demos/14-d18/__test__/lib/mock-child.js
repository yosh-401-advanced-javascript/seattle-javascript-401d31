'use strict'

const faker = require('faker')
const Child = require('../../model/child')

const mock = module.exports = {}

mock.createOne = () => {
  return new Child({
    name: faker.name.firstName()
  }).save()
}

mock.createMany = n => Promise.all(new Array(n).fill(0).map(() => mock.createOne()))