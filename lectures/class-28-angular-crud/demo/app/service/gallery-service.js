'use strict'

module.exports = [
  '$q',
  '$log',
  '$http',
  'authService',
  function($q, $log, $http, authService) {
    $log.debug('GalleryService')
    let service = {}
    service.galleries = []

    service.createGallery = (gallery) => {
      $log.debug('#galleryService.createGallery')
      return authService.getToken()
      .then(token => {
        let config = {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
        }
        return $http.post(`${__API_URL__}/api/gallery`, gallery, config)
      })
      .then(res => {
        $log.log('gallery created')
        let gallery = res.data
        service.galleries.unshift(gallery)
        return gallery
      })
      .catch(err => {
        $log.error(err.message)
        return $q.reject(err)
      })
    }

    service.fetchGalleries = () => {
      $log.debug('#galleryService.fetchGalleries')
      return authService.getToken()
      .then(token => {
        let config = {
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
          }
        }
        return $http.get(`${__API_URL__}/api/gallery`, config)
      })
      .then(res => {
        $log.log('galleries retrieved')
        service.galleries = res.data
        return service.galleries
      })
      .catch(err => {
        $log.error(err.message)
        return $q.reject(err)
      })
    }

    service.updateGallery = (galleryId, gallery) => {
      $log.debug('$galleryService.updateGallery')
      return authService.getToken()
      .then(token => {
        let config = {
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
          }
        }
        return $http.put(`${__API_URL__}/api/gallery/${galleryId}`, gallery)
      })
      .then(res => {
        $log.log('gallery updated')
        return res.data
      })
      .catch(err => {
        $log.error(err.message)
        return $q.reject(err)
      })
    }

    service.deleteGallery = (galleryId) => {
      $log.degug('#galleryService.deleteGallery')
      return authService.getToken()
      .then(token => {
        let config = {
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
          }
        }
        return $http.delete(`${__API_URL__}/api/gallery/${galleryId}`, config)
      })
      .then(res => $log.log('gallery removed'))
      .catch(err => {
        $log.error(err.message)
        return $q.reject(err)
      })
    }

    return service
  }]
