'use strict';

function FArray(){
  for(var key in arguments){
    this[key] = arguments[key];
  }

  this.length = arguments.length;
}

//FArray.prototype.push = function(value){
  //let result = {};
  //result[this.length] = value;
  //result.length = this.length + 1;
  //for(var i=0; i<this.length; ++i){
    //result[i] = this[i];
  //}

  //result.prototype = FArray.prototype;
  //return result;
//}

FArray.prototype.reduce = function(callback, initial){

  var i=0;
  var result = initial ? initial : this[i++];

  for (; i<this.length; ++i){
    result = callback(result, this[i], i, this);
  }

  return result;
}

FArray.prototype.filter= function(callback){
  let result = {length: 0};
  for(var i=0; i<this.length; ++i){
    if (callback(this[i], i, this)){
      result[result.length++] = this[i];
    }
  }

  result.prototype = FArray.prototype;
  return result;
}

FArray.prototype.map = function(callback){
  let result = {length: this.length};
  for(var i=0; i<this.length; ++i){
    result[i] = callback(this[i], i, this);
  }
  result.prototype = FArray.prototype;
  return result;
}

FArray.prototype.forEach = function(callback, context){
  context = context ? context : null;

  for(var i=0; i<this.length; i++){
    callback.call(context, this[i], i, this);
  }
}

let nums = new FArray(1,33,4,53,6,24);
console.log('nums', nums);
console.log();

let evens = nums.filter(num => !(num & 1))
console.log('evens', evens);
console.log();

let bigger = nums.map( num => num * 100)
console.log('bigger', bigger);
console.log();

let squares = {};
nums.forEach(function(num, i, nums) {
  this[num] = num * num;
}, squares)
console.log('squares', squares);
console.log();

let sum = nums.reduce((prev, current) => prev + current)
console.log('sum', sum);
console.log();

// this is how you impletment map with reduce
//let squareMap = nums.reduce((acc , current) => {
  //acc.push(current * current);
  //return acc;
//}, []);

let squareMap = nums.reduce((acc , current) => {
  acc.push(current);
  return acc;
}, []);
console.log('squareMap', squareMap);
console.log();


