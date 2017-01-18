'use strict';

const angular = require('angular');
const ngAdventure = angular.module('ngAdventure');

ngAdventure.factory('player', ['$q', '$log', 'map', player]);

function player($q, $log, map) {
  $log.debug('player service');

  let service = {};

  let turn = 0;
  let player = service.player = {
    name: 'bnates',
    location: 'A',
    hp: 16
  };

  let history = service.history = [
    {
      turn,
      desc: 'Welcome to ngAdventure',
      location: 'A',
      hp: player.hp
    }
  ];

  service.movePlayer = function(direction) {
    return new $q((resolve, reject) => {
      turn++;

      let current = player.location;
      let newLocation = map.mapData[current][direction];

      if (!newLocation) {
        history.unshift({
          turn,
          desc: 'You have run into a wall',
          location: player.location,
          hp: player.hp
        });
        return reject('no room in that direction');
      };

      history.unshift({
        turn,
        location: player.location,
        desc: map.mapData[newLocation].desc,
        hp: player.hp
      });

      player.location = newLocation;
      return resolve(player.location);
    });
  };

  return service;
};
