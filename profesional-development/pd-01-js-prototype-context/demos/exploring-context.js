'use strict';

let color = {
  red: 0xff,
  green: 0x7a,
  blue: 0x7a,
};

function blackAndWhite(){
  let average = Math.floor((this.red + this.green + this.blue ) / 3);
  this.red = average;
  this.green = average;
  this.blue = average;
}

console.log('Before blackAndWhite', color);
blackAndWhite.call(color);
console.log('After blackAndWhite', color);

color = {
  red: 100,
  green: 100,
  blue: 100,
};

function darken(num){
  this.red -= num;
  this.green -= num;
  this.blue -= num;
}

console.log('Before darken', color);
darken.call(color, 10);
console.log('After darken', color);

function 
