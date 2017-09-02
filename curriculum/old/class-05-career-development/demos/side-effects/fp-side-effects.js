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
* A function with no side effects has can still have an input and an output
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
