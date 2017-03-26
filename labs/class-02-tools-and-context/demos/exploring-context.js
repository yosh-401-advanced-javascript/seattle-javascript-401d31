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
console.log();

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
console.log();

function addColor(red, green, blue){
  red = this.red + red;
  blue = this.blue + blue;
  green = this.green + green;
  this.red = red > 255 ? 255 : red;
  this.blue = blue > 255 ? 255 : blue;
  this.green = green > 255 ? 255 : green;
}

color = {
  red: 100,
  green: 100,
  blue: 100,
};

console.log('Before addColor', color);
addColor.apply(color, [12, 100, 34]);
console.log('After addColor', color);
console.log();


let favoriteColor = {red: 255, green: 255, blue: 0};

let darkenFavoriteColor = darken.bind(favoriteColor);
// bind creates a new function that can be only that can only be applyed to an object
// this example doesn't seem very useful, however it shows what bind does. Ususaly
// you will find bind being used with callbacks like you will in the
// homemade BDD testing framework


console.log('favoriteColor', favoriteColor);
darkenFavoriteColor(11);
console.log('after darkenFavoriteColor(11)', favoriteColor);
darkenFavoriteColor(100);
console.log('after darkenFavoriteColor(100)', favoriteColor);
