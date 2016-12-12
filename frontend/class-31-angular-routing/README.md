401 JS -- class 31 Angular Routing
=========================

## Angular Provider Resources
* Read [angular provider guide]

## UI Router Resources
* Read [ui router hello world]
* Skim [ui router 1.x api docs]

## Learning Objectives
* Students will be able to use serrvice providers to configure serrvices
* Students will be able to explain the how single page routing compares to static files
* Students will be able to implement single page routing using angular-ui-router

## Overview
#### Angular Module Injection
A module can be injected into a module to expose all of its assets. This means that if a third party librarys implements a bunch of useful features on a module, we can inject that module into our apps module to use those features! Angular UI router is a great example of this can be injected into our app, so that we can get access to its services, directives, and serviceProviders.

#### Angular Service Providers
* service providers can be injected into an angular module's config method
* service providers are used to configure serrvice's within a module
* $logProvider can be used to enable or disable $log's logging
* $httpProvider can be used to configure default behaviors for $http

#### Single Page Routing With Angular
* Single page applications use javascript librarys to implement virtual routing on single view
* ui router is a library for implementing single page routing for angular
* ui router uses $stateProvider to configure routes
* ui router uses $urlRouterProvider to configure redirects to routes
* ui router uses hash routes to delemit which view a page should show
* hash routes look like `/#/routename`, and exist after the url path and before the url query

<!--links -->
[ui router hello world]: https://ui-router.github.io/tutorial/ng1/helloworld
[ui router 1.x api docs]: https://ui-router.github.io/docs/latest/
[angular provider guide]: https://docs.angularjs.org/guide/providers
