# Demo: Events

## Live Coding Demo(s)

**`monolithic`** - Single file event system

* Create a new event emitter instance
* Wire up some listeners
* Fire events
* Talking points: disconnected code (functions don't call each other in this architecture)

**`modular`** - is a multi-file demo that shows how Node events work over multiple files/modules and how you must share a common core to make it all tie in.

* Start in one file, by simply pulling in the events module and using `emit()` and `on()` to demonstrate simple Pub/Sub
* Move to separate files 
  * One only publishing, one only receiving
  * Demonstrate that you cannot simply "require events" and go ... You'll need to create a common event controller for them to consume
    * Once you to, each module can assume both roles
  * And many more modules you add to the system can join the conversation
