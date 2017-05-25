'use strict'

require('angular')
.module('ngAdventure')
.factory('mapService', ['$log', function($log) {
  $log.debug('map service')

  let service = {}

  service.mapData = {
    cabin: {
      desc: "message from the cabin",
      south: "trail"
    },
    trail: {
      desc: "message from the trail",
      north: "cabin",
      east: "gate",
      south: "pit"
    },
    pit: {
      desc: "message from the pit",
      north: "trail"
    },
    gate: {
      desc: "message from the gate",
      west: "trail",
      east: "castle"
    },
    castle: {
      desc: "message from the castle",
      west: "gate",
      south: "corridor"
    },
    corridor: {
      desc: "message from the corridor",
      north: "castle",
      east: "snackroom"
    },
    snackroom: {
      desc: "message from the snack room",
      west: "corridor"
    }
  }

  return service
}])
