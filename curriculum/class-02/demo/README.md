# Demos: Classes, Inheritance, Functional Programming

## Notes
Normally, you do an hour of "lecture" followed by a live demo ...

Because there are so many small demos, mostly related to coding processes and smaller concepts, this is the type of day where the lecture is probably 2 solid hours and the content mostly arises organically from coding out demos and talking through problem domains.

Our key takeaway is a full understanding of Context, Classes and basic Inheritance, including the differences between static and instance methods.

Have a good plan and understanding of the demos, and use those along with the lab main topics (above) to shape how you move through the day.

### Error Module  (`demo/errors`)
* During the lecture segment on errors, demo some error prone code and ways to trap
  * `try/catch`, `&& &&`, etc.
* Create an error class, and during the rest of the demos (and in fact the whole class), pull this in and use it.
* This might be the first thing to go in the student's permanent "toolkit"

### FP  (`demo/functional`)
* Simple functional programming demo
* No Side Effects from the second function
* One job
* Repeatable return from input

### Context  (`demo/context`)
* There's a few (well commented) files in here that can be used to demonstrate how to pass context around
* Don't spend too much time here beyond calling out the problem domain and how the context functions can help you out of particular situations
* The need to sometimes pass `this` around is the key takeaway

### Classes/Inheritance  (`demo/classes`)
* Use the dog/animal example to show how you can create an inherited object 3 ways.
* Talk pros and cons to each as you go
  * Factories are pretty cool, as they focus on composition and don't create instances, but they do have lots of baggage
* Land on "Class" as the generally preferred method for managing state and behavior
  * Demonstrate the use of static and instance methods (vs prototype and constructor methods)
* Demonstrate how you can move between constructors and classes easily

### List Constructor  (`demo/list`)
* Construct the `list` data type, using a class
* Implement the core methods: push, pop, slice, splice, map, filter, reduce, forEach
* Write Tests (TDD)
* Write doc for one method
* Draw some basic UML for one method
* Students will be doing all UML and Docs for this in lab
