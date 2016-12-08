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

// bind create a new function that can be only that can only be applyed to an object
// this example doenst seem very useful, however it shows what bind does. Ususaly 
// you will find bind being used with callbacks like you will below in the 
// homemade bdd testing framework

let darkenFavoriteColor = darken.bind(favoriteColor);

console.log('favoriteColor', favoriteColor);
darkenFavoriteColor(11);
console.log('after darkenFavoriteColor(11)', favoriteColor);
darkenFavoriteColor(100);
console.log('after darkenFavoriteColor(100)', favoriteColor);
console.log();


/// bellow is an implamentation of a syncronus BDD testing framework
/// it wont work with async code.. but its a cool demo of how context
/// can be used in powerful ways


let state = {
  beforeBlocks: [],
  afterBlocks: [],
  itBlocks: [],
};

function before(callback){
  state.beforeBlocks.push(callback);
}

function after (callback){
  state.afterBlocks.push(callback);
}

function it(msg, callback){
  state.itBlocks.push({msg, callback});
}

function describe(msg, callback){
  console.log(msg);
  callback.call({});

  state.beforeBlocks.forEach(cb => cb());

  state.itBlocks.forEach((test) => {
    console.log(test.msg);
    try {
      test.callback()
      console.log('success');
    } catch (err) {
      console.error('error');
      console.log('  ', err.message);
    }
  });

  state.afterBlocks.forEach(cb => cb());
}

describe('running example bdd testing framework', function(){;
  // bind is used to bind the before and after callbacks to the describe block's context
  before((function(){
    console.log('first');
    this.first = 'shark in the dark';
  }).bind(this)); 

  after((function(){
    console.log('fourth');
    console.log('this.first:', this.first);
    console.log('this.second:', this.second);
  }).bind(this));

  // lexical arrow functions inherrit there context form the closest parent with context
  // this means you wont need bind
  // TODO: refactor this before block's callback to use bind instead of an arrow function
  before(() => { 
    console.log('second');
    this.second = 'fog in the hole in the log';
  })

  // TODO: refactor this it block's callback to use bind instead of an arrow function
  it('should be true', () => {
    console.log('third');
    if(this.first != 'shark in the dark')
      throw new Error('lulwat big mistake');

    //TODO: uncomment this to see an error
    //if(false == false)
      //throw new Error('lulwat big mistake');
  })
});
