'use strict';

const angular = require('angular');
const ngAdventure = angular.module('ngAdventure');

ngAdventure.factory('mapService', ['$log', mapService]);

function mapService($log) {
  $log.debug('map service');

  let service = {};

  service.mapData = {
    A: {
      desc: 'You are in room A.  There are 2 paths leaving this room.  The lights are dim',
      south: 'C',
      east: 'B'
    },
    B: {
      desc: 'You are in room B.  You cannot see anything',
      west: 'A',
      south: 'D'
    },
    C: {
      desc: 'You are in room C.  There is a path to the north.  You can see some light coming from this path',
      north: 'A',
      east: 'D'
    },
    D: {
      desc: 'You are in room D.  You hear sounds to the south',
      items: ['lamp'],
      north: 'B',
      west: 'C',
      south: 'X'
    },
    X: {
      desc: 'You are stuck in a trap',
      south: 'X',
      north: 'X',
      east: 'X',
      west: 'A'
    }
  };

  return service;
};
