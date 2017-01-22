![cf](http://i.imgur.com/7v5ASc8.png) 26: Client Side Routing
=====================================

## Client Side Routing

  * **Overview**
    * client side routing follows the same concepts as server side routing except that it is ran in the browser
    * `angular-ui-router` is a library for implementing single page application routing
      * this gives us access to a `$stateProvider` object to configure routes
      * we are also provided with a `$urlRouterProvider` to configure redirects
    * `angular-ui-router` uses hash routes to delimit what view a page should display
      * ex: `/#/route-name` 
