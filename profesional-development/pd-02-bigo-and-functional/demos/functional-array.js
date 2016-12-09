'use strict';

// FArray can stand for F(unctional)array in the sence of functional 
// programing... but you could also call it a F(ake)Array because its
// also meant to demonstrate how an Array can be implamented from scratch

// all the functions in this file are considered "pure functions"
// pure function are functions that do not mutate any data that are
// defined outside of their scope. 
//
// this means that the methods on FArray do not change the instance 
// of fArray that call the functions, instead they create a return 
// a new Farray that has the desired change

function FArray(){
  // this will create indexed values with all teh arguments passed into
  for(var key in arguments){
    this[key] = arguments[key];
  }

  this.length = arguments.length;
}

// O(n)
FArray.prototype.copy = function(){
  let result = new FArray();
  for(var key in this){
    result[key] = this[key];
  }
  return this;
}

// O(n) because it runs copy
FArray.prototype.push = function(value){
  let result = this.copy()
  result[result.length++] = value;
  return result;
}

// O(n) because it runs copy
// returns {value, fArray} 
// where value is the last item on the array 
// and fArray is the new FArray with the popped value
// this was done to keep pop a "pure function"
FArray.prototype.pop = function(){
  let copy = this.copy();
  delete copy[this.length - 1];
  
  return  { 
    value: this[this.length -1],
    fArray: copy,
  }
}

// O(n)
FArray.prototype.reduce = function(callback, initial){

  var i=0;
  var result = initial ? initial : this[i++];

  for (; i<this.length; ++i){
    result = callback(result, this[i], i, this);
  }

  return result;
}

// O(n)
FArray.prototype.filter= function(callback){
  let result = new FArray();
  for(var i=0; i<this.length; ++i){
    if (callback(this[i], i, this)){
      result[result.length++] = this[i];
    }
  }

  return result;
}

// O(n)
FArray.prototype.map = function(callback){
  let result = new FArray();
  for(var i=0; i<this.length; ++i){
    result[i] = callback(this[i], i, this);
  }

  return result;
}


// O(n)
FArray.prototype.forEach = function(callback){
  for(var i=0; i<this.length; i++){
    callback(this[i], i, this);
  }
}

// create an instance of FArray
let nums = new FArray(1,33,4,53,6,24);
console.log('nums', nums);
console.log(); // these empty console logs just make the output more easy to read

// !(num & 1) uses the bitwise and opperator to determine if a number is even
// nums.filter takes the isEven function as an argument and returns an FArray that
// only has even numbers.
// naming functions is a big part of createing good functional programs
// naming a function makes the programg mor readable
// "isEvan" is much more readable than "num => !(num &1)"

// arrow functions can be assigned to variabels to name them!!!!!
let isEven = num => !(num & 1); 
let evens = nums.filter(isEven); // keeps all the numbers that are even
console.log('evens', evens);

// the above filter statement could also be written
// let evens = nums.filter(num => !(num & 1)); but i would argue this
// satement format is less readable


// forEach takes a function as an argument 
// if we pass console.log as the function we can see the values that are passed
// to the callback they will be "(value, index, fArray)"
console.log('using console.log as an argument to forEach on evans')
evens.forEach(console.log)
console.log();


// map takes a function as an argument and creates a new fArray 
// where each index is the result of that function 
// hen called with "(value, index, fArray)"
// create a new FArray where each index is Math.sqrt(nums[index])
let squareRoots = nums.map(Math.sqrt)
console.log('squareRoots', squareRoots);
console.log();

// @getify on github call's reduce "the swiss army knife of functional programing"
// reduce allows you to accumulate information
// it could be used to implement map and filter
// here we use reduce to get the sum of all the numbers in the fArray
let sum = nums.reduce((prev, current) => prev + current)
console.log('sum', sum);
console.log();

// this is how you implement map with reduce
let squareMap = nums.reduce((acc , current) => {
  acc.push(current * current);
  return acc;
}, []);
console.log('squareMap', squareMap);
console.log();

//TODO: implement filter with reduce

// push pop returns an object with the last value and a new FArray
// with the last value removed
console.log('nums.pop()', nums.pop());
console.log();

// push creates a new FArray with a new value at the end
console.log('nums.push(6000)', nums.push(6000));
console.log();

