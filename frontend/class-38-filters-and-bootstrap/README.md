401 JS -- class 38 filters and bootstrap
===

## Angular Filter Resources
* [filter guide]

## Bootstrap Resources
* [bootstrap css docs]
* [bootstrap component css docs]
* [bootstrap sass]
* [ui-bootstrap]

## Learning Objectives
* Students will be able to create angular filters
* Students will be able to build bootstrap from soruce using sass
* Students will be ablue to use ui-bootstrap components

## Overview
#### built in filters
* angular filters are away to format the value of an expression for display
* filters can be used in templates, controllers, or services
* built in filters include
 * [date filter] - helps format dates
 * [currency filter] - helps format currency
 * [json filter] - helps format json
 * [limitTo filter] - helps limit number of items in a list
 * [lowercase filter] - helps lowercase strings
 * [uppercase filter] - help lowercase strings
* using a filter in a template takes the form ` {{ value | filterName:arg1:arg2 }} `
* date filter example ` <p> {{ someCtrl.timestamp | date:'short' }} </p>`

#### creating custom filters
``` javascript
// define a filter that will remove strings that dont match a fuzzy search
myApp.filter('fuzzyFilter', function(){

  return function(stringList, searchTerm){
    let fuzzyRegex = genorateFuzzyRegex(searchTerm);

    return stringList.filter(str => {
      return fuzzyRegex.test(str.toUpperCase());
    });
  };
});

function genorateFuzzyRegex(input){
  if (!input) return /.*/
  let fuzzyString = '.*' + input.toUpperCase().split('').join('.*') + '.*';
  return new RegExp(fuzzyString);
}
```
``` html
<!--use the fuzzyFilter in a tempate-->
<div>
  <input type="text" ng-model="searchUserCtrl.searchTerm">
  <p ng-repeat="name in searchUserCtrl.names | fuzzyFilter:searchUserCtrl.searchTerm" {{name}}  </p>
</div>
```

#### bootstrap
* bootstrap is a large css framework for creating great looking interfaces with writing minimal css
* it has its own reset, default base styles, a grid system, and component styles
* bootstrap's css has was origionaly written in [less] which is a css preprocessor simular to [sass]
* Some of bootstrap's features depend on javascript, bootstrap's javascript was origionaly written as a jquery plugin
* [bootstrap sass] is a port of the original less bootstrap to sass
* [ui-bootstrap]: is a port of bootstraps jquery plugin to angular directives
* to use bootstrap and ui-bootstrap you must
 * `npm i -S bootstrap-sass angular-ui-bootstrap angular-animate angular-touch`
 * put `@import "~/bootstrap/assets/stylesheets/_bootstrap.scss";` in your **_main.scss** after your 
 * add the following code to your entry.js when you setup your angular module
``` javascript
const ngTouch = require('angular-touch');
const ngAnimate = require('angular-animate');
const uiRouter = require('angular-ui-router');
const uiBootstrap = require('angular-ui-bootstrap');

const app = angular.module(/* your module name */, [ngTouch, ngAnimate, uiRouter, uiBootstrap]);
```
* now to use bootstrap all you have to do is read the docs bootstrap css docs and ui-bootstrap docs
 * most of what you want will come from just using the bootstrap css
 * only complex features like acordians and carosels use ui-bootstrap

<!--links -->
[filter guide]: https://docs.angularjs.org/guide/filter
[date filter]: https://docs.angularjs.org/api/ng/filter/date
[currency filter]: https://docs.angularjs.org/api/ng/filter/currency
[json filter]: https://docs.angularjs.org/api/ng/filter/json
[limitTo filter]: https://docs.angularjs.org/api/ng/filter/limitTo
[lowercase filter]: https://docs.angularjs.org/api/ng/filter/lowercase
[uppercase filter]: https://docs.angularjs.org/api/ng/filter/uppercase 
[bootstrap sass]: https://github.com/twbs/bootstrap-sass
[ui-bootstrap]: https://angular-ui.github.io/bootstrap/
[bootstrap css docs]: http://getbootstrap.com/css/
[bootstrap component css docs]: http://getbootstrap.com/components/
