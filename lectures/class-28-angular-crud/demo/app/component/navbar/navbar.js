'use strict'

// require('./_navbar.scss')

module.exports = {
  template: require('./navbar.html'),
  controllerAs: 'navbarCtrl',
  controller: [
    '$log',
    '$location',
    '$rootScope',
    'authService',
    function($log, $location, $rootScope, authService) {
      this.$onInit = () => {
        $log.debug('navbarCtrl')

        this.checkPath = () => {
          $log.log('#navbarCtrl.checkPath')
          let path = $location.path()
          if(path === '/join') this.hideButtons = true
          else {
            this.hideButtons = false
            authService.getToken()
            .catch(() => $location.url('/join#login'))
          }
        }
        this.checkPath()

        $rootScope.$on('$locationChangeSuccess', this.checkPath)

        this.logout = () => {
          $log.log('#navbarCtrl.logout')
          this.hideButtons = true
          authService.logout()
          .then(() => $location.url('/'))
        }        
      }
    }
  ]
}
