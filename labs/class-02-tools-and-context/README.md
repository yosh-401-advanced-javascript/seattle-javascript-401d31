401 JS -- Lab 02 build tools
===

## Submission Instructions
  * Work in a fork of this repository
  * Work in a branch on your fork
  * Write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-duncan`
  * Submit a pull request to this repository
  * Submit a link to your pull request on canvas
  * Submit a question, observation, and how long you spent on canvas  

## Learning Objectives  
* Students will be able to manage a dependencies with a package.json
* Students will be able to create automated tasks using gulp
* Students will be able to create automated tasks using npm scripts

## Resources  
* [Gulp API docs](https://github.com/gulpjs/gulp/blob/master/docs/API.md)  

## Requirements  
#### Configuration  
* add a gulpfile **gulpfile.js**

#### Feature Tasks  
* Create a gulpfile
 * with a `test` task for running mocha
 * with a `lint` task for running eslint
 * with a `dev` task for running `test` and `lint` when any javascript project file changes
 * with a `default` task fro running `test` and `lint` once
* Add `lint` script to the **package.json** for running eslint
* Add `test` script to the **package.json** for running mocha

###### BONUS 1pt
* Create a CLI that uses command line arguments to pass a name into the greet function
 * The cli should be in new module named index.js

####  Documentation  
* In your **README.md** write documentation to explain how Javascript's data types are passed by value or passed by reference

#### Testing  
###### BONUS 1pt
* Write a test for the index.js CLI

## Rubric  
* 2pts Configuration
* 3pts Feature Tasks
* 3pts Tests
* 2pts Documentation









=========
# *NEED TO MERGE*
=========

# 401 JS -- Prototype and Context

# Context resources
* Read [MDN this]
* Watch the Video [Javascript Context Tutorial]

# Prototype resources
* Skim [MDN new]
* Skim [MDN Object prototype]
* Read [MDN inheritance and the prototype chain]

# Learning Objectives
* Understand the difference between context and scope
* Learn how to configure a function's context
* Understand the roll context plays in constructor functions

# Overview
* When a function has a `this` we say that `this` is the functions context
* Unlike scope, a function's context can be configured

* If a function is not a property on an object, by default it has no context
* If a function is a property on an object, by default that object is the context for that function

## Call, Bind, and Apply
#### Call
* `call`, `bind`, and `apply` are function prototype methods that allow us to change the context of a function
* `call` is a methods on a function that invokes a function with a specified context and arguments
 * `call` passes comma separated arguments
``` javascript
function lower(str){
  return String.prototype.toLowerCase.call(str)
}

lower("HELLO");
// "hello"
```  

#### Apply
* `apply` is a method on a function that invokes a function with a specified context and argments  
 * `apply` passes argments from an array  
``` javascript
var state = {
  history: [],
  addToHistory: function(){
    Array.prototype.push.apply(this.history, arguments);
  }
};
```

#### Bind
* `bind` is a methods on a function that returns a new function with a specified context
``` javascript
describe('bind example', function(){
  this.example = 'some data';

  it('example should be "some data"', (function(done) {
    expect(this.example).to.equal('some data');
    done();
  }).bind(this)) // binds "it's" callback to the describe block's callback's context
})

```   

### Apply
* `apply` is a methods on a function that invokes a function with a specified context and arguments  
 * `apply` passes arguments from an array  
``` javascript
var state = {
  history: [],
  addToHistory: function(){
    Array.prototype.push.apply(this.history, arguments);
  }
};

state.addToHistory('move player', 'pickup item', 'update hp');
// state.history === ['move player', 'pickup item', update hp']
```   

## Arrow Functions & 'this'
* Arrow functions inherit their context from their parent context
``` javascript
describe('arrow function example', function(){
  this.example = 'some data';

  // it's arrow function has the context of the callback from the describe block
  it('example should be "some data"', (done) => {
    expect(this.example).to.equal('some data');
    done();
  })
})
```

* Arrow functions can be assigned as the value of variables  
``` javascript
var doubleIt = num => num * 2;
doubleIt(16);
// 32

let upper = str => String.prototype.toUpperCase.call(str);
upper('hello');
// HELLO

let removeOdds = list => list.filter(num => !(num & 1));
removeOdds([1,2,3,4]);
// [2,4]
```

## Prototypes
* The `new` keyword creates a empty object and invokes a function with that object as its context
* For constructor ABC to inherit constructor XYZ's properties it should `XYZ.call(this)`
* For constructor ABC to inherit constructor XYZ's methods it should `ABC.prototype = Object.create(XYZ.prototype)`
``` javascript
function XYZ(shape){
  this.name = 'XYZ';
  this.size = 10;
  this.shape = shape;
}

XYZ.prototype.describe = function(){
  return this.name + ': ' + this.shape;
}

function ABC(shape, color){
  XYZ.call(this, shape);
  this.name = 'ABX'; // overwrite XYZs inherited name
  this.color = color;
}

ABC.prototype = Object.create(XYZ.prototype);
ABX.prototype.constructor = ABC;

ABC.prototype.changeColor = function(color){
  this.color = color;
}

let redBall = new ABC('ball', 'red');

// {
//   name: 'ABC',
//   size: 10',
//   shape: 'ball',
//   color: 'red'
//   __proto__: {
//     changeColor: function(color){
//       this.color = color;
//     },
//     __proto__: {
//       describe: function(){
//         return this.name + ': ' + this.shape;
//       }
//       __proto__: Object.prototype
//     }
//   }
// }

```

* Don't modify or rely on the `__proto__` property of an object. It's slow. **not even to read a property**
* If you want to determine an objects prototype use `Object.getPrototypeOf(someObject)`
``` javascript
var prototype = {};
var color = Object.create(prototype);
Object.getPrototypeOf(color) === prototype; // true
```
* Don't nest a lot of prototypes. It will have a speed impact on your code
* If you look up a property that is not on any object on the prototype chain it will still look through the whole prototype chain

# Exercise
* Write out the BDD (Behavior Driven Development) framework from the class lecture
* Add `beforeEach` and `afterEach` functionality
* **SUPER BONUS**:
 * refactor your BDD framework to support async `it`, `before`, `after`, `beforeEach`, and `afterEach` callbacks using a `done` callback, just like mocha!

[MDN new]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new

[MDN Object prototype]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype

[MDN inheritance and the prototype chain]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain

[MDN this]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this

[Javascript Context Tutorial]: https://www.youtube.com/watch?v=fjJoX9F_F5g
