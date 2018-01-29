'use strict'

let server = require('../lib/server')
let superagent = require('superagent')
require('jest')

describe('Server Module', function() {
  beforeAll(() => server.start(4000))
  afterAll(server.stop)

  describe('Valid HTTP Requests', () => {
    describe('POST /api/v1/note', () => {
      let resPost

      beforeAll(() => {
        return superagent.post(':4000/api/v1/note')
        .send({
          name: 'this is a name',
          desc: 'this is a desc',
        })
        .then(res => resPost = res)
      })

      it('should return a status of 201 CREATED', () => {
        expect(resPost.status).toBe(201)
      })
      it('should have a body that includes an _id', () => {
        expect(resPost.body).toHaveProperty('_id')
      })
      it('should have a name of "this is a name"', () => {
        expect(resPost.body.name).toEqual('this is a name')
      })
      it('should have a desc of "this is a desc"', () => {
        expect(resPost.body.desc).toEqual('this is a desc')
      })
    })
    describe('GET /api/v1/note?_id=1234', () => {

    })
    describe('GET /api/v1/note', () => {

    })
  })

  describe('Invalid HTTP Requests', () => {

  })
})