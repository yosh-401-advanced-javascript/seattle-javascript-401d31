'use strict'

require('./_home.scss')

module.exports = ['$log', '$rootScope', 'galleryService', HomeController]

function HomeController($log, $rootScope, galleryService) {
  this.$onInit = () => {
    $log.debug('HomeController()')
    this.galleries = []

    this.fetchGalleries = () => {
      return galleryService.fetchGalleries()
      .then(galleries => this.galleries = galleries)
    }

    $rootScope.$on('locationChangeSuccess', this.fetchGalleries)
    return this.fetchGalleries()

  }
}
