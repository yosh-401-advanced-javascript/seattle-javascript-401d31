'use strict'

require('./_thumbnail.scss')

module.exports = {
  template: require('./thumbnail.html'),
  controllerAs: 'thumbnailCtrl',
  bindings: {
    pic: '<',
    gallery: '<'
  },
  controller: ['$log', 'picService', 'galleryService', function($log, picService, galleryService) {
    this.$onInit = () => {
      $log.debug('ThumbnailController')

      this.deletePic = function() {
        $log.debug('thumbnailCtrl.deletePic')
        picService.deletePic(this.gallery, this.pic)
        .then(galleryService.fetchGalleries)
      }
    }
  }]
}
