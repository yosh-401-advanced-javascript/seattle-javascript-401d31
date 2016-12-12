401 JS -- class 29 Angular's Built in Directives
=========================

## Resources
* Skim [diretive components]

## Learning Objectives
* students will understand the functions of angular directives
* students will be able to identify use cases for angular's built in diretives

## Overview
* Directives are markers on a DOM element that tells angular's HTML compiler to attach behavior to that DOM element
* Directives can come in the form of a tag name, an attribue, or a class name
* Angular has many built in directives that can be used to create powerful DOM interactions

#### Some General Puropse Directives
* ng-app - binds an angular module's $rootScope to an element on the DOM
* ng-controller - binds a controller and its $scope to an element on the DOM
* ng-model - binds the value of a user input to a propery on the $scope
* ng-init - used to run an expression when a template is loaded 
* ng-href - like a href attribute, but it suports angular's template expressions `ng-href="{{someCtrl.nav.home}}"`
* ng-src - like a src attribue, but it suports angular's template like ng-href
* ng-required - is used to require a form input to have a value before the form is submitted
* ng-repeat - is used to create itterate over an array on $scope and create a $scope and template for each item in the array

#### Some Toggling Directives
* ng-show - is used to toggle the css propery display none on a DOM element based on a truthy or falsey value
* ng-hide - is used to toggle the css propery display none on a DOM element based on a truthy or falsey value
* ng-if - is used to add or remove an element from the DOM based on a truthy or falsey value
* ng-class - is used to add or remove class names on an element based on truthy or falsey values
* ng-cloak - is used to prevent angular from showing uncompiled templates during page load

#### Some Event Directives
* ng-click - is used to trigger an expression when a DOM element is clicked
* ng-dblclick - is used to trigger an expression when a DOM element is double clicked
* ng-submit - is used to trigger an expression when a form's submit event has been triggered

<!--links -->
[diretive components]: https://docs.angularjs.org/api/ng/directive
