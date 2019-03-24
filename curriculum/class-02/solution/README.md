![cf](http://i.imgur.com/7v5ASc8.png) Solution: Classes, Inheritance, Functional Programming
============================================================================================

## Lab Requirements

### Object Manipulation
* Implement Car and Motorcycle using a `factory` and a `class`, based on the `constructor`
* Add support for the new implementations to the test
* Imperative that they do not change the actual tests (these assert that the implementations share the correct interface)
      
#### Grading Standards & Notes
  * Features
    * Students must implement both the `factory` and `class` implementations
    * The interface must not be changed from that of the `constructor`
    * i.e. `let something = new Car('whatever');`
  * Code Quality
    * Ensure that they are exporting both the Car and Motorcycle from the modules, using `module.exports = {Car,Motorcycle}`
    * Ensure that the `factory` implementation exports 2 factory functions that act like constructors, but use Object.assign.
    * Objects should be frozen.
  * Testing
    * Test suites should not be touched
    * The test should run the same tests for all 3 implementation types
  * Deployment
    * Travis Only
  * Documentation
    * README Standards 
    * JSDoc Required
    
#### Lab Assistance Notes
###Vehicles
* They will feel like this is a copy/paste exercise, but encourage students to reference their previous iteration and continutally re-implement, from different starting points
* Hammer in the point of never changing the tests, only the implementation
* There's no package.json provided, and the tests/index don't require all of the files in
* They'll need to figure out how to bring in the starter files
* Show them how the tests are running in a loop, that may confuse them.


### List Constructor
* .length property
* `push()`
* `pop()`
* `shift()`
* `unshift()`
* `forEach()`

**Stretch Goals**: `map()`, `filter()`, `reduce()`, `splice()`, `reverse()`

#### Grading Standards & Notes
  * Features
  * Code Quality
    * Monitor how they manage the .length and move the indexes around on `shift()` and `unshift()`
  * Testing
    * This is a class so they'll need to instantiate it to test it
    * Dataset should be built up and manipulated as they run through te tests.
    * Verify length changing as they add/remove
    * Can you foreach/map/etc with only one?
  * Deployment
    * Travis Only
  * Documentation
    * README Standards 
    * JSDoc Required
    
#### Lab Assistance Notes
