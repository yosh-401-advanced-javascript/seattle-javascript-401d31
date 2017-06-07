'use strict'

const expect = require('chai').expect

describe('Login Controller', function() {
  beforeEach(done => {
    angular.mock.module('cfgram')
    angular.mock.inject(($rootScope, $window, $location, $httpBackend, $componentController, authService) => {
      this.$rootScope = $rootScope
      this.$window = $window
      this.$location = $location
      this.$httpBackend = $httpBackend
      this.loginCtrl = $componentController('login')
      this.authService = authService
      this.loginCtrl.$onInit()
      done()
    })
  })

  beforeEach(done => {
    this.$window.localStorage.token = 'test token'
    this.authService.token = 'test token'
    done()
  })
  afterEach(done => {
    this.$window.localStorage.removeItem('token')
    this.authService.token = null
    done()
  })

  describe('user login', () => {
    it('should log a user into the application', done => {
      this.$window.localStorage.token = null
      let expectUrl = 'http://localhost:3000/api/login'
      let expectUser = {
        username: 'testy',
        password: 'password'
      }
      let base64 = this.$window.btoa(`${expectUser.username}:${expectUser.password}`)
      let expectHeaders = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Basic ${base64}`
      }

      this.$httpBackend.whenGET(expectUrl, expectHeaders)
      .respond(200, 'new token')
      this.loginCtrl.user = expectUser

      this.loginCtrl.login().then(
        () => console.log('success'),
        () => console.log('failure'),
        () => console.log('notify')
      ) // NOTE: Not working the way I want... promise wont unwrap
      // console.log(this.$window.localStorage.token);

      done()
    })
  })
})
