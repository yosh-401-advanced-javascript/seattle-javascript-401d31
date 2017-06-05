// 'use strict'
//
// const expect = require('chai').expect
//
// describe('Home Controller', function () {
//   beforeEach(done => {
//     angular.mock.module('cfgram')
//     angular.mock.inject(($rootScope, $controller, $http, $httpBackend, $window, galleryService) => {
//       this.$rootScope = $rootScope
//       this.$http = $http
//       this.$httpBackend = $httpBackend
//       this.$window = $window
//       this.galleryService = galleryService
//       let scope = this.$rootScope.$new()
//       this.galleryService.galleries = [
//         {name: 'one', desc: 'dOne'},
//         {name: 'two', desc: 'dTwo'}
//       ]
//       this.homeCtrl = $controller(
//         'HomeController',
//         {$scope: scope}
//       )
//       done()
//     })
//   })
//   beforeEach(done => {
//     this.homeCtrl.$onInit()
//     this.$window.localStorage.setItem('token', 'test token')
//     done()
//   })
//
//   after(done => {
//     this.$window.localStorage.removeItem('token')
//     done()
//   })
//
//   describe('Default Properties: ', () => {
//     it('galleries is empty array', done => {
//       expect(Array.isArray(this.homeCtrl.galleries)).to.be.true
//       done()
//     })
//   })
//
//   describe('Fetch Galleries on page load', () => {
//     it('should make request to get all galleries', done => {
//
//       let url = 'http://localhost:3000/api/gallery'
//       let headers = {
//         'Authorization': `Bearer ${this.$window.localStorage.token}`,
//         'Accept': 'application/json'
//       }
//
//       this.$httpBackend.expectGET(url, headers).respond(
//         200,
//         { galleries: [
//           {name: 'one', desc: 'dOne'},
//           {name: 'two', desc: 'dTwo'}
//         ]}
//       )
//       this.homeCtrl.fetchGalleries()
//       console.log(this.homeCtrl);
//       done()
//     })
//   })
// })
