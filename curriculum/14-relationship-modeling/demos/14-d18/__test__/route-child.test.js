'use strict'

require('dotenv').config({path: `${__dirname}/../.test.env`})

const faker = require('faker')
const superagent = require('superagent')
const clearDB = require('./lib/clear-db')
const mockToy = require('./lib/mock-toy')
const mockChild = require('./lib/mock-child')

require('../lib/server').listen(3000)
require('jest')

const API_URL = process.env.API_URL

describe('Testing Child Routes', function() {
  afterEach(clearDB)

  describe('All requests to /api/child', () => {
    describe('POST requests', () => {
      describe('Valid Requests', () => {
        test('should respond with a child', () => {
          let data = { name: faker.name.firstName() }

          return superagent.post(':3000/api/child')
          .send(data)
          .then(res => {
            this.resPost = res
            expect(res.body.name).toBe(data.name)
            expect(res.body).toHaveProperty('toys')
            expect(res.body.toys).toBeInstanceOf(Array)
            expect(res.body).toHaveProperty('_id')
          })
        })
        test('should return a status of 201', () => {
          expect(this.resPost.status).toBe(201)
        })
      })
      describe('Invalid Requests', () => {

      })
    })
    
    describe('GET requests', () => {
      describe('Valid Requests', () => {

      })
      describe('Invalid Requests', () => {

      })
    })

    describe('PUT requests', () => {
      describe('Valid Requests', () => {

      })
      describe('Invalid Requests', () => {

      })
    })

    describe('DELETE requests', () => {
      describe('Valid Requests', () => {

      })
      describe('Invalid Requests', () => {

      })
    })

  })
})