# LAB: Classes, Inheritance, Functional Programming

## Before you begin
Refer to *Getting Started* in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup instructions

### Getting Started: Objects and Classes
In the `objects` folder, there is a full implementation of a Car and Motorcycle object created using a constructor function, with an index.js file that you can use to visually play with the objects and see some live output

In the `objects/__tests__` folder, you'll find a file called `vehicle.test.js` that tests the implementation of both a `Car` and a `Motorcycle` using the constructor pattern.

## Part 1: Vehicles
* Modularize these implementations (separate module for each)
* Implement both `Car` and `Motorcycle` using a Javascript `Class` (in the `vehicle-class.js` file)
* The tests are pre-written and should work unchanged regardless of your implementation

 **Software Engineering Note!** *This is the heart of a refactor -- re-implement the same functionality, the same signature, and the same I/O while completely rewriting the underlying implementation*

### Tests
* The tests are already written
* You will need to have your tests runnable against both implementations

### Stretch Goals
* Repeat the process using the pattern in reverse (start with a class, refactor to a constructor)
* Use different inheritance models (be creative)
  * i.e. Animals, Flying Animals, People, Jobs, etc.

---

## Part 2: List Module
  * Create a new folder in the lab directory called `list` to house your code for this assignment
  * implement a full List constructor using a **constructor function**
  * implement the `.length` property
  * implement the following methods on the list constructor
    * `push()`
    * `pop()`
    * `shift()`
    * `unshift()`
    * `forEach()`
  * Do not use any built-in array methods to do this

  * **Re-Implement using a Class definition**
    * Do this after your tests are complete
    * This should be a refactor: your tests should remain unchanged and green once your re-implementation is completed

### Testing
* tests that ensure the list module functions correctly with error-check parameters
* tests that the correct errors are thrown with invalid arguments exist
* tests to ensure that the list module functions return the correct results when invoked with valid arguments

**Software Engineering Notes!** *Why repeat the process? Knowing how to easily move between object creation patterns is essential. You'll be doing quite a bit of this, so it's good to not only recognize but work the various patterns seen here*

### Stretch Goals
  * Implement these methods as well
    * `map()`
    * `filter()`
    * `reduce()`
    * `slice()`
    * `splice()`
    * `reverse()`


### Assignment Submission Instructions
Refer to the the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for the complete lab submission process and expectations
