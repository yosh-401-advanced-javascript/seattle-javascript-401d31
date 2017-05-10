'use strict'

function lower(str){
  return String.prototype.toLowerCase.call(str)
}

lower("HELLO");



var state = {
  history: [],
  addToHistory: function(){
    Array.prototype.push.apply(this.history, arguments);
  }
};

state.addToHistory('move player', 'pickup item', 'update hp');
// state.history === ['move player', 'pickup item', update hp']
// `bind` is a methods on a function that returns a new function with a specified context

describe('bind example', function(){
  this.example = 'some data';

  it('example should be "some data"', (function(done) {
    expect(this.example).to.equal('some data');
    done();
  }).bind(this)) // binds "it's" callback to the describe block's callback's context
})

// Arrow functions inherit their context from their parent context
describe('arrow function example', function(){
  this.example = 'some data';

  // it's arrow function has the context of the callback from the describe block
  it('example should be "some data"', (done) => {
    expect(this.example).to.equal('some data');
    done();
  })
})

// variables can be assigned to arrow functions

var doubleIt = num => num * 2;
doubleIt(16);
// 32

let upper = str => String.prototype.toUpperCase.call(str);
upper('hello');
// HELLO

let removeOdds = list => list.filter(num => !(num & 1));
removeOdds([1,2,3,4]);
// [2,4]

// The `new` keyword creates a empty object and invokes a function with that object as its context
// For constructor ABC to inherit constructor XYZ's property it should `XYZ.call(this)`
// For constructor ABC to inherit constructor XYZ's methods it should `ABC.prototype = Object.create(XYZ.prototype)`
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
