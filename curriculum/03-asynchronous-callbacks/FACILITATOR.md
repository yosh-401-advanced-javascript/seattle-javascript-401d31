# Class 03

## How do I prep for today?
Review the NodeJS `fs` module documentation and be comfortable with the `readFile` and `writeFile` methods.  You'll be talking about asynchronous programming concepts throughout the lecture so be sure to share of any "gotchas" that could take place when building and testing async functionality.  For example:
  * what happens when you pass `done` into an `it` (or `test`) block but forget to invoke it?
  * what happens when you don't pass `done` into an `it` (or `test`) block (for async tests)?

Students will likely have experience working with callback functions but will also likely not have an in-depth understanding of them.  Review the callback demos in the **demos** directory and/or create your own.  It's important to talk about callbacks from a vanilla approach so that students fully understand them.  Once you done that, move into the "error first" callback pattern.
 
## What changed from yesterday? 
Students will now be using `done` callbacks when testing their asynchronous code.  They will now be required to pass data with callbacks instead of using `return` or `throw`.

## What might students struggle with today? 
Students struggle with the "error first" callback pattern and how to create/handle async functionality.  You'll want to spend as much time as you can with these 2 topics.  Conceptually, they should be solid on their understanding of callbacks and how to work with asynchronous behavior in NodeJS before going into lab.  Students will struggle testing async behavior as well - when checking their code, be sure to lookout for missing `done` parameters/invocations and false positives.

## What bugs, issues, or surprises have come up in the past for this class?
Students will use `return` statements and `throw` in async code - they should be using a callback.

## General comments
It's often helpful to do a walkthrough of synchronous vs asynchronous code on the whiteboard. Talk about blocking vs non-blocking and walk students through the basics of the call stack, event loop, and callback queue.  You can even draw or diagram a visualization of this.



