'use strict'

const expect = require('chai').expect

describe('Home Controller', function () {
  beforeEach(done => {
    angular.mock.module('cfgram')
    angular.mock.inject(($rootScope, $httpBackend, $window, $controller) => {
      this.$rootScope = $rootScope
      this.$httpBackend = $httpBackend
      this.$window = $window
      this.homeCtrl = $controller('HomeController')
      done()
    })
  })

  beforeEach(done => {
    this.$window.localStorage.setItem('token', 'test token')
    done()
  })

  after(done => {
    this.$window.localStorage.removeItem('token')
    done()
  })

  describe('Fetch Galleries on page load', () => {
    it('should make request to get all galleries', (done) => {
      let expectUrl = 'http://localhost:3000/api/gallery'
      let expectHeaders = {
        'Accept': 'application/json',
        'Authorization': `Bearer ${this.$window.localStorage.token}`
      }

      this.$httpBackend.expectGET(expectUrl).respond(200,
        { galleries: [
          {name: 'one', desc: 'dOne'},
          {name: 'two', desc: 'dTwo'}
        ] }
      )

      this.homeCtrl.$onInit().then((data) => {
        expect(data.galleries[0].name).to.equal('one')
        expect(data.galleries[1].name).to.equal('two')
        done()
      });

      this.$httpBackend.flush()
      this.$rootScope.$apply()
    })
  })
})
