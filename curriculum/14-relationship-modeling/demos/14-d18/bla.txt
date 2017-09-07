'use strict'

const Toy = require('../../model/toy')
const Child = require('../../model/child')
const superagent = require('superagent')
require('../../lib/server').listen(3000)
require('jest')

describe('Testing toy routes', function () {
  describe('all requests to /api/toy', () => {
    describe('POST requests', () => {
      beforeAll(done => {
        superagent.post(':3000/api/child')
        .type('application/json')
        .send({name: "Nancy"})
        .then(res => this.mockChild = res.body)
        .then(done)
      })
      afterAll(done => Child.remove().then(done))

      describe('Valid Requests', () => {
        beforeAll(done => {
          superagent.post(':3000/api/toy')
          .type('application/json')
          .send({
            name: 'moana',
            desc: 'total rockstar who saves the world',
            child: this.mockChild._id
          })
          .then(res => {
            this.mockToy = res.body
            this.resPost = res
            done()
          })
          .catch(console.error)
        })

        test('should create and return a new toy, given a valid request', () => {
          expect(this.mockToy).toBeInstanceOf(Object)
          expect(this.mockToy).toHaveProperty('name')
          expect(this.mockToy).toHaveProperty('desc')
          expect(this.mockToy).toHaveProperty('child')
          expect(this.mockToy).toHaveProperty('_id')
        })
        test('should have a name, given a valid request', () => {
          expect(this.mockToy.name).toBe('moana')
        })
        test('should have a desc, given a valid request', () => {
          expect(this.mockToy.desc).toBe('total rockstar who saves the world')
        })
        test('should have an _id, given a valid request', () => {
          // expect(this.mockToy._id).toMatch(/[a-f0-9]{24}/)
        })
        test('should return a 201 CREATED, given a valid request', () => {
          expect(this.resPost.status).toBe(201)
        })
      })

      describe('Invalid Requests', () => {
        beforeAll(done => {
          superagent.post(':3000/api/toy')
          .send({})
          .catch(err => {
            this.errPost = err
            done()
          })
        })

        test('should return a 400 bad request', () => {
          expect(this.errPost.status).toBe(400)
          expect(this.errPost.message).toContain('Bad Request')
        })
      })
    })

    describe('GET requests', () => {
      describe('Valid Requests', () => {
        test('should get a record from the toy dir', () => {
          superagent.get(`:3000/api/toy${this.mockToy._id}`)
          .then(toy => {
            expect(this.mockToy).toEqual(toy)
            done()
          })
        })
      })
    })

    // xdescribe('PUT requests', () => {
    //   test('should have ...', () => {

    //   })
    // })
    
    describe('DELETE requests', () => {
      describe('Valid Requests', () => {
        beforeAll(done => {
          superagent.delete(`:3000/api/toy/${this.mockToy._id}`)
          .then(res => {
            this.resDelete = res
            done()
          })
        })

        test('should return a status 204', () => {
          expect(this.resDelete.status).toBe(204)
        })
      })

      describe('Invalid Requests', () => {
        beforeAll(done => {
          superagent.delete(`:3000/api/toy/blarp`)
          .catch(err => {
            this.errDelete = err
            done()
          })
        })

        test('should return a status 404', () => {
          expect(this.errDelete.status).toBe(404)
        })
      })
    })
  })
})