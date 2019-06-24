'use strict';

const VehicleConstructor = require('./vehicle-constructor.js');
const VehicleClass = require('./vehicle-class.js');

// Implement a car and motorcycle using a Constructor
const mazda = new VehicleConstructor.Car('Mazda 3');
console.log(mazda.name, mazda.drive(), mazda.stop());

const harley = new VehicleConstructor.Motorcycle('Harley');
console.log(harley.name, harley.wheelie(), harley.stop());

// Implement a car and motorcycle using a Class
const ford = new VehicleClass.Car('Ford Focus');
console.log(ford.name, ford.drive(), ford.stop());

const indian = new VehicleClass.Motorcycle('Indian');
console.log(indian.name, indian.wheelie(), indian.stop());