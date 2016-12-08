'use strict';

// instantiate is a replacement for the new keyword
function instantiate(constructor, args){
  let result = {};
  constructor.apply(result, args);
  result.__proto__ = constructor.prototype;
  return result;
}

// define a object constructor function
function Product(name, price, sellBy){
  this.name = name;
  this.price = price;
  this.sellBy = sellBy;
}

Product.prototype.getCost = function(){
  let dollers = Math.round(this.price * 100) / 100;
  return `$ ${dollers}`
}

// create an instance of a product
let args = ['white orchid', 15.3472, new Date('11-12-2044')];
let orchid = instantiate(Product, args);

// print the instance to show that the properties got created
console.log('orchid', orchid);

// call the method getCost to prove __proto__ was created
console.log('orchid.getCost()', orchid.getCost());
