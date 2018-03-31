'use strict'

let server = require('../lib/server')
let superagent = require('superagent')
require('jest')

describe('Server Module', function() {
  beforeAll(() => server.start(3000))
  afterAll(server.stop)

  describe('Valid HTTP Requests', () => {
    describe('GET /time', () => {
      // EXAMPLE RESPONSE
      // HTTP / 1.1 200 OK
      // Connection: keep - alive
      // Content - Type: application / json
      // Date: Tue, 23 Jan 2018 00: 57: 56 GMT
      // Transfer - Encoding: chunked

      // {
      //   "date": "2018-01-23T00:57:56.489Z",
      //     "now": 1516669076489
      // }

      it('should return a date time object', (done) => {
        superagent.get(':3000/time')
          .then(res => {
            console.log(res.status)
            expect(res.status).toBe(200)
            done()
          })
      })
    })


    // HTTP / 1.1 200 OK
    // Connection: keep - alive
    // Content - Type: application / json
    // Date: Tue, 23 Jan 2018 00: 58: 28 GMT
    // Transfer - Encoding: chunked

    // {
    //   "name": "Scott Schmidt"
    // }

    describe('POST /api/v1/cowsay', () => {

    })
  })

  describe('Invalid HTTP Requests', () => {
    describe('GET /', () => {

    })

    describe('GET /api/v1/cowsay?text={message}', () => {

    })

    describe('POST /api/v1/cowsay', () => {

    })
  })
})