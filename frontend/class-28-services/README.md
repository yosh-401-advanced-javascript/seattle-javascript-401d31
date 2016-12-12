401 JS -- class 28 Angluar Services
=========================

## Angular Services Resources
* Read [angular services guide]

## Singleton Resources
* Skim [singleton pattern]

## Learning Objectives
* Students will be able to explain the qualites of the singleton pattern
* Students will be able to implement a singleton using Angular Services

## Overview
### Singleton
* A singleton is a desgin pattern that restricts the the instation of an object to one object.
* If five moudles access a singleton, they all share a reference to the same object.
* Singletons are often used to manage state that is shared through out an application
 * Shared state can be dangerous if not used thoughfuly. When using a singleton you will want to limit or eleminate the parts of the program that can set or modify the singleton's state to avoid [race conditions].

### Services
* Angular services are used to implement an apps shared code
* We use services to build librarys for handling the logic for our AJAX requests
* We use services to build librarys to maintain app state in one place

<!--links -->

[angular services guide]: https://docs.angularjs.org/guide/services
[singleton pattern]: https://en.wikipedia.org/wiki/Singleton_pattern
[race conditions]: https://en.wikipedia.org/wiki/Race_condition
