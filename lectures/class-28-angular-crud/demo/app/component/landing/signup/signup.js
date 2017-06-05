'use strict'

require('./_signup.scss')

module.exports = {
  template: require('./signup.html'),
  controller: ['$log', '$location', 'authService', SignupController],
  controllerAs: 'signupCtrl'
}

function SignupController($log, $location, authService) {
  this.$onInit = () => {
    $log.debug('SignupController')
    this.title = 'Welcome to the signup page!'

    this.signup = function(user) {
      $log.debug('signupCtrl.signup()')

      authService.signup(user).then(() => $location.url('/home'))
    }
  }
}
