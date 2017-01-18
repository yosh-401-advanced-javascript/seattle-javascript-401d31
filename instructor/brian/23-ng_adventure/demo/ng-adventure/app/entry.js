'use strict';

require('./scss/main.scss');

const angular = require('angular');

angular.module('ngAdventure', []);

require('./service/map.js');
require('./service/player.js');

require('./component/game-pad/game-pad.js');
