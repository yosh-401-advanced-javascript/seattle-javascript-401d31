401 JS - Big O and Functional programming
===============================================

# Big O Resources
* Read [simple Wiki Big O] 
* Watch [hacker Rank Big O video]
* Look at [Big O Cheat Sheet]

# Functional programming resources
* Watch [funfunfunction functional programming video series]
* Read [what is functional programming]
* Skim [functional programming jagon] 
* After 401 [functional-Light JS Book]

# Learning Objectives
* students will be able to determine and describe the runtime complexity of an algorighm
* students will be able to identify and explain the qualities of imperitive and functional code
* students will be able to determine whether or not a function is pure
* students will be able to implement an functional array with map, filter, reduce, and forEach methods

# Overview
## Big O
* big-o is a way of describing the speed and memory useage of an algorythm because algorythm's can run faster or slower given a specific input, we only use big-o to describe the worst case.
* the letter "n" is used to describe the number of items an algorithm is working with
* if an algorithm only makes state ment in the worst case, it is said that the algorithm run s with an "O(1)" runtime.
 * "O(1)" runtime is also called constant time
* if an algorithm run through every item, it is said that the algorithm runs with an "O(n)" runtime.
 * "O(n)" runtime is also called linear time
 
## Functional programing
* In order to understand functional programing you must understand what a side-effect is.
 * a side effect is when a function alters state defined outside its scope.  
 **Below are some examples of side effects**
``` javascript
let state = {}
function init(){ // has side effects
  state.token = 'lalala secrets are no fun'; // side effect
}
```
``` javascript
document.getElementById('title').textContent = 'side effect'; // side effect
```
``` javascript
console.log('side effect'); // side effect
```
* in functional programming the goal is to design functions that have no side effects
* a function with no side effects has an input and an output
* functions with no side-effects are called pure functions
``` javascript
// map has no side effects
// the callback also has no side effects
function map(input, callback){
  let result = [];
  for(var i=0;i<array.length;++i){
    result.push(callback(input[i], i, input));
  }
  return result;
}
```
* Pros of functional programming
 * Easy to test pure functions
 * When done correclty its more readble 
 * by isolating the the code with the most potential for bugs (code with side effects) to as few places as possible, you reduce the time it takes to track down bugs
* Cons of functional programming
 * can be slower



[simple Wiki Big O]: https://simple.wikipedia.org/wiki/Big_O_notation
[hacker Rank Big O video]: https://www.youtube.com/watch?v=v4cd1O4zkGw
[funfunfunction functional programming video series]: https://www.youtube.com/playlist?list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84
[functional programming jagon]: https://github.com/hemanth/functional-programming-jargon#functional-programming-jargon
[what is functional programming]: http://blog.jenkster.com/2015/12/what-is-functional-programming.html
[functional-Light JS Book]: https://github.com/getify/Functional-Light-JS
[Big O Cheat Sheet]: http://bigocheatsheet.com/

