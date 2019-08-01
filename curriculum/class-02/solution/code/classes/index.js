'use strict';


const VehicleConstructor = require('./vehicle-constructor.js');
const VehicleClass = require('./vehicle-class.js');
const VehicleFactory = require('./vehicle-factory.js');

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

// Implement a car and motorcycle using a Factory
const chevy = new VehicleFactory.Car('Chevy Silverado');
console.log(chevy.name, chevy.drive(), chevy.stop());

const yamaha = new VehicleFactory.Motorcycle('Yamaha YZ625');
console.log(yamaha.name, yamaha.wheelie(), yamaha.stop());