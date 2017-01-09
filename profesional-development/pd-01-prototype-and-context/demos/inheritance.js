'use strict';

// create a model to be the parent
function File(name, permissions){
  this.name = name;
  this.permissions = permissions;
}

// give the parent model functionality
File.prototype.getDescription = function(){
  return `
    Name: ${this.name}
    Permissions: ${this.permissions}
  `;
}

// create a child model that will inherit behavior from the parent
function Image(name, permissions, width, height){
  // inherit the properties from the parent constructor
  File.call(this, name, permissions);

  // define properties that are specific to the child
  this.width = width;
  this.height = height;
}

// give the child model its own prototype that inherits from the parent prototype
Image.prototype = Object.create(File.prototype);
Image.prototype.constructor = Image;

Image.prototype.getImageSize = function(){
  return this.width * this.height;
}

// create an instance of Image
let beachAdventure = new Image('beachAdventure.jpg', 'rw', 720, 1080);

// log beachAdventure to see its properties
console.log('beachAdventure', beachAdventure);

// call getDescription to show it can use Files's prototype methods
console.log('beachAdventure.getDescription()', beachAdventure.getDescription());

// call getImageSize to show it can ues Image's prototype methods
console.log('beachAdventure.getImageSize()', beachAdventure.getImageSize());

// This is how the object will look after its created
//{
  //name: 'beachAdventure.jpg',
  //permissions: 'rw',
  //width: 720,
  //height: 1080,
  //__proto__: { // Image.prototype
    //getImageSize: function()...
    //__proto__: { // File.prototype
      //getDescription: function()...
        //__proto__: Object.prototype
    //}
  //}
//}
