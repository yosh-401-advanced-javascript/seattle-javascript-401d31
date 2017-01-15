![cf](http://i.imgur.com/7v5ASc8.png) 21: Angular Controllers
=====================================

## Angular Controllers
  * **Overview**
    * in angular.js, controllers are constructor functions that are used to modify the angular **scope**
    * when a controller is attached to the DOM (using the `ng-controller` directive), angular will instantiate a new controller object
      * this will create a new *child scope* that is made available as a parameter to a controller's constructor function **`$scope`**
    * controllers are used to setup and add behavior to the `$scope` object
    * controllers should not be used for DOM maniuplation or formatting of input and output

  * **`Controller as` Syntax**
    * we'll be using the `Controller as` syntax in order to use `this` instead of `$scope` within our controller methods
      * this removes the need for us to inject `$scope` into our controller constructor
    * controller example:
    ``` javascript

    // using angular's dependency injection, we can inject $log
    // into our controller for advanced logging capabilities
    sampleApp.controller('SampleController', ['$log', SampleController]);

    // create a new controller and pass in $log for use in our controller's methods
    function SampleController($log) { ... }
    ```

    * markup example:
    ``` html
    
    <!-- using the ng-contoller directive, we can tell
         our application to use the Controller as syntax -->
    <nav ng-controller="SampleController as sampleCtrl">
      <ul>
        <li ng-repeat="item in sampleCtrl.items">...</li>
      </ul>
    </nav>
    ```
