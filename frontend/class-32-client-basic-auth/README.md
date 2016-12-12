401 JS -- class 32 Client Auth
=========================

## Basic and Bearer Resources
* Review [baisc auth wiki]

## Angular Resources
* Read [$http api docs]
* Skim [$window api docs]
* Skim [$q api docs]

## Learning Objectives
* Students will be able to login to a rest API using basic authentiation
* Students will be able to persist bearer tokens between sessions
* Students will be able to create authorized requets using a bearer token

## Overview
#### Webpack constants
* constants can be configured in the webpack config that can be used throughout the app
* we use webpack constants for all information that need to be kept secret like API SECRET KEYS
* we also use webpack constants for all information that canges depending on what environment our app is runnin in (dev, testing, production)


``` javascript   
let plugins = [
  new ExtractTextPlugin('bundle.css'),
  new HTMLPlugin({ template: `${__dirname}/app/index.html` }),
  new webpack.DefinePlugin({
    // __API_URL__ is a webpack constant that is used to point 
    // our client at the right API depending on the environemet
    __API_URL__: JSON.stringify(process.env.API_URL),
    // __DEBUG__ is an webpack constat that is used to turn off $log's logging in production
    __DEBUG__: JSON.stringify(!production),
  }),
];
```   

#### Auth service
* we use a service to create a libary for authentiation because it will be neaded through out our app
* we use the $http service to create an AJAX request to our REST API to signup and login a user
* we use webpack constants to be able to point are requets to a specific base URL depending on what environment are server is runinng in (dev, testing, production)
* we use $window.localStorage instead of window.localStorage because $Window suports are ability to test our auth service
* we use $window.btoa to base 64 encode the username:password in order to create a valid basic auth header

#### Testing AJAX requests
* `$httpBackend.expectGET(...)`, `$httpBackend.expectPUT(...)`, `$httpBackend.expectDELETE(...)`, and `$httpBackend.expectPOST(...)`  are used as an expect statement in our tests to make sure our client is making the right requests
* after setting up each test `$httpBackend.flush()` needs to be called inorder to for $httpBackend's outstanding requtests to be validated
* its also a wise idea to call `$httpBackend.verifyNoOutstandingRequest()` and `$httpBackend.verifyNoOutstandingExpectation()` in an afterEach block to make sure all requests have been validated
* **IMPORTANT** for any test that is testing a function which uses a $q promises `$rootScope.apply()` must be called to allow the promise to resolve. Simular to `$httpBackend.fush()` in regards to a `$httpBackend.expectGET(...)`. 


<!--links -->
[$http api docs]: https://docs.angularjs.org/api/ng/service/$http
[$window api docs]: https://docs.angularjs.org/api/ng/service/$window
[$q api docs]: https://docs.angularjs.org/api/ng/service/$q

[baisc auth wiki]: https://en.wikipedia.org/wiki/Basic_access_authentication
