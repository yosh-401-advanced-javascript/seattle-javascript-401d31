'use strict';

// NOTE: Showing the traditional style of require, reference vars, etc...
// The other component controllers will simplify this syntax.

const angular = require('angular');
const ngAdventure = angular.module('ngAdventure');

ngAdventure.component('gameHistory', {
  template: require('./game-history.html'),
  controller: 'GameHistoryController',
  controllerAs: 'gameHistoryCtrl'
});

ngAdventure.controller('GameHistoryController', ['$log', 'playerService', GameHistoryController]);

function GameHistoryController($log, playerService) {
  $log.debug('GameHistoryController');
  this.history = playerService.history;
};
