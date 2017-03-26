401 JS -- class 34 template Components
=========================

## Components Resources
* Read [component guide]
* Read [building quality anglar components]

## Learning Objectives
* Students will be able to identify use cases for componentizing their code
* Students will be able to react to life cycle events genorated by component controllers
* Students will be able to testing component controllers

## Overview
#### Component Archatecture
* Components are re-useable pieces of code that generaly inclode a teplate some some logic
* Components are a great way to decouple parts of your client side app
* Some Use cases for creating a component
 * Any piece of your application that is going to appear more than once
 * Any pice small of your application that has a substantial amount of logic

#### Angular Component Configuration
* an anglar component is a named element directive with a specific configuration
 * in javascript refer to the element in cammelCase
 * in html refer to the elemenet in cabab-case
* anglars components are a way to modularize a template and a controller
* configuration propeties
 * `template`: takes a litteral string that is the html template (works with http-loader)
   * templates must have a single top level element!
 * `templateUrl`: takes a path to a template that is hosed on the server (works with file-loader)
 * `controller`: takes a controller configuration
 * `controllerAs`: names the controller context on $scope
``` html
<!-- component template -->
<div class="nav-bar">
  <h1> {{ navBarCtrl.title }} </h1>
  <nav>
    <ul>
      <li ng-repeat="route in navBarCtrl.routes"><a ng-href="/{{ route }}"> {{ route }}</a> </li>
    </ul>
  </nav>
</div>
```
``` javascript
// component definition
myApp.component('navBar', {
  template: require('./path/to/nav-bar.html'), 
  controllerAs: 'navBar',
  controller: ['$log', function($log) {
    this.$onInit = function(){
      $log.log('init navBar component');
      // setup component state
      this.routes = ['home', 'about'];
      this.title = 'My App';
    };
  }],
})
```
``` html
<!-- how to use the navBar compoent -->
<nav-bar></nav-bar>
```
``` html
<!-- compiled component --> 
<nav-bar>
  <div class="nav-bar">
    <h1> My App </h1>
    <nav>
      <ul>
        <li> <a href="/home"> home </a> </li>
        <li> <a href="/about"> about </a> </li>
      </ul>
    </nav>
  </div>
</nav-bar>
```

#### Some Component Life Cycle hooks
* `$onInit` - is called when the component is ready
* `$onDestroy` - is called on a controller when its containing scope is destoryed

#### Testing angular component controllers
* to test a component's controller you can get instatiate it using $componentController('componentName');
``` javascript
it('$onInit should set title', function(){
  // navBarCtrl is an instance of navBar's controller 
  let navBarCtrl = this.$componentController('navBar');
  navBarCtrl.$onInit();
  expect(navBarCtrl.title).toEqual('My App');
});
```

<!--links -->
[component guide]: https://docs.angularjs.org/guide/component
[building quality anglar components]: https://www.sitepoint.com/building-angular-1-5-components/
