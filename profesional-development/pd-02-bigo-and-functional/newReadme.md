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
* In functional programming the goal is to design functions that have no side effects
* A function with no side effects has an input and an output
* Functions with no side-effects are called pure functions
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
* a program with no side effects at all is not very usefull
 * no side effects means no input or output
* because a program with no-side effects is not useful, functional programers try two write there code as functional as possible
 * they do this by limiting functions with side effects to as few as possible
 * they also have design patterns for wraping functions with side effects to act like pure functions
* functional programers use a techneque called function composition that allows them to create functions out of function combinations. 
* Pros of functional programming
 * Easy to test
 * When done correclty its more readble
 * By isolating the the code with the most potential for bugs (code with side effects) to as few places as possible, you reduce the time it takes to track down bugs
 * Encurages modularization
* Cons of functional programming
 * Looks more complex at first
 * Functions may have more argumetns
 
### Impertive vs Functional example
#### Impertive alphabetical sort
Imperitve code is hard to read because you have to figure out what is happening at each line. Loops are generaly very hard to read.
``` javascript
function alphabeticalSort(items) {  
    var length = items.length;
    for (var i = (length - 1); i >= 0; i--) {
        for (var j = (length - i); j > 0; j--) {
            if (items[j] && (items[j].toLowerCase() < items[j - 1].toLowerCase())) {
                var tmp = items[j];
                items[j] = items[j - 1];
                items[j - 1] = tmp;
            }
        }
    }
}

let spooky = ['grr', 'boo', 'creek', 'squeek', 'glimer'];
alphabeticalSort(spooky);
// spooky is now sorterd
```
#### Functional alphabetical sort
* even though the following may seem  complcated at first, it should be more readable at a glance than the imperitive code above, that does the same thing. 
* sortAlphabeticly is an example of function composition. by composing slice, sort, and a callback to sort.
* one important thing to note is that the .sort() method on arrays will mutate the array, which is a side effect. because of this sortAlphabeticly uses the .slice() method to create a copy of the original list before it runs sort(). this makes sortAlphabeticly a pure function.
``` javascript
let sortAlphabeticly = list => list.slice().sort((a, b) => a.toLowerCase() > b.toLowerCase());
let names = ['Glorb', 'slorb', 'Jlorb', 'clorb'];

// this line should be very readble as long as you pay attention to the function name
let sorted = sortAlphabeticly(['Glorb', 'slorb', 'Jlorb', 'clorb'])
// sorted is now a sorted copy of names
// names has not changed
```

[simple Wiki Big O]: https://simple.wikipedia.org/wiki/Big_O_notation
[hacker Rank Big O video]: https://www.youtube.com/watch?v=v4cd1O4zkGw
[funfunfunction functional programming video series]: https://www.youtube.com/playlist?list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84
[functional programming jagon]: https://github.com/hemanth/functional-programming-jargon#functional-programming-jargon
[what is functional programming]: http://blog.jenkster.com/2015/12/what-is-functional-programming.html
[functional-Light JS Book]: https://github.com/getify/Functional-Light-JS
[Big O Cheat Sheet]: http://bigocheatsheet.com/
