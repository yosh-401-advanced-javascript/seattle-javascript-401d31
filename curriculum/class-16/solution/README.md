![CF](http://i.imgur.com/7v5ASc8.png) SOLUTION - Event Driven Applications
==========================================================================

## Notes

* The tests include
  * a mock of the `fs` module
  * a spy on `console.log()`
  * use both as instructional features during code review
* Note the use of multiple functions in the `file` module
  * Makes them units that we can test
  * Need to export them to make them testable, unfortunately
* We don't test `emit()` or `on()` directly.  Those are already tested



