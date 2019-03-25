# Solution: Event Driven Applications

## Lab Requirements


#### Grading Standards & Notes
  * Features
    * Event Driven
    * Modularized Properly
  * Code Quality
    * Look for succinct, testable units
  * Testing
    * Tests should be written only for the event handlers (units/functions)
    * Students should not endeavor to test any actual events
  * Deployment
    * Travis Only
  * Documentation
    * README Standards
    * JSDoc Required


#### Solution Code Notes

* The tests include
  * a mock of the `fs` module
  * a spy on `console.log()`
  * use both as instructional features during code review
* Note the use of multiple functions in the `file` module
  * Makes them units that we can test
  * Need to export them to make them testable, unfortunately
* We don't test `emit()` or `on()` directly.  Those are already tested


#### Lab Assistance Notes
