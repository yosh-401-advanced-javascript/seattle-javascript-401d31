
![cf](https://i.imgur.com/7v5ASc8.png) lab 27 testing controllers
======

# To Submit this Assignment
  * fork this repository
  * write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-duncan`
  * push to your repository
  * submit a pull request to this repository
  * submit a link to your PR in canvas
  * write a question and observation on canvas

# Build Tool Instructions
* create a package.json that lists all your developer dependencies
 * create a `watch` npm script for running `webpack-dev-server --inline --hot`
 * create a `lint` npm script to lint your javscript code using eslint
* create a wepack config file
 * must output files into a build directy
 * must have a sass loader config, that uses the `extract-text-webpack-plugin`
* create a karma config file
* include a gitignore
* include an eslintrc

# Directions
* Create these directories to organize your code:
 * app/controller
 * app/html
 * app/scss
 * app/scss/vendor
* create a **_theme.scss** partial
 * add three color variables
* create a **base.scss** file
 * import normalize
 * import \_theme
 * write some styles that use the color variables defined in \_theme
* create a **entry.js**
 * require your **index.html** and force webpack to use the `file-loader`
 * require your **base.scss**

# Client Functionality
* create a game controller with two functions `createMonster` and `createPlayer`
 * they should be added to a `gameCtrl` namespace "aka. object on the $scope"
* create a form for creating a player
 * when the submit button is clicked it should invoke createPlayer with a player object
 * the createPlayer form should add a player to `$scope.gameCtrl.player`
* create a form for creating a monster
 * when the submit button is clicked it should invoke createMonster with a monster object
 * the createMonster form should add a monster to `$scope.gameCtrl.monster`

# Test
* write a test for both the createMonster and createPlayer functions

# Bonus
* *1pt* use ng-repeat to populate a select menu
