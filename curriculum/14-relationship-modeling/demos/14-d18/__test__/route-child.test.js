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
        let data = { name: faker.name.firstName() }

        test('should respond with a child object model', () => {
          return superagent.post(':3000/api/child')
          .send(data)
          .then(res => {
            this.resPost = res
            expect(res.body).toHaveProperty('name')
            expect(res.body).toHaveProperty('toys')
            expect(res.body).toHaveProperty('_id')
            expect(res.body.toys).toBeInstanceOf(Array)
          })
        })
        test('should have the same name value sent in the request', () => {
          expect(this.resPost.body.name).toBe(data.name)          
        })
        test('should return a status of 201', () => {
          expect(this.resPost.status).toBe(201)
        })
      })
      describe('Invalid Requests', () => {
        test('should return 404 Not Found given an invalid route', () => {
          return superagent.post(':3000/bad/route')
          .catch(err => {
            expect(err.status).toBe(404)
            expect(err.message).toBe('Not Found')
          })
        })
        test('should return a 400 Bad Request given invalid request data', () => {
          return superagent.post(':3000/api/child')
          .send({gnarf: 'simon'})
          .catch(err => {
            expect(err.status).toBe(400)
            expect(err.message).toContain('Bad Request')
          })
        })
      })
    })
    
    describe('GET requests', () => {
      describe('Valid Requests', () => {
        test('should return an existing record', () => {
          return mockChild.createOne().then(child => {
            return superagent.get(`:3000/api/child/${child._id}`)
          })
          .then(res => {
            expect(res.body).toHaveProperty('name')
            expect(res.body).toHaveProperty('toys')
            expect(res.body).toHaveProperty('_id')
            expect(res.body.toys).toBeInstanceOf(Array)
            expect(res.status).toBe(200)
          })
        })
        test('should return an array of ids given no id in the route', () => {
          mockChild.createMany(10).then(children => {
            this.children = children
            return superagent.get(':3000/api/child')
          })
          .then(res => {
            expect(res.body).toContain(children)
            expect(res.body.length).toBe(10)
          })
        })
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