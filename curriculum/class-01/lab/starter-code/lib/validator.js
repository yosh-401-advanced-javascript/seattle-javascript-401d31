'use strict';

// Vinicio - this is similar to module.exports = {};, but you are giving it an easier to use name
let validator = module.exports = {};

/**
 * Based on a set of rules, is the input valid?
 * TODO: Define the rules ... how do we send them in? How do we identify?
 * @param input
 * @param rules
 * @returns {boolean}
 */

validator.isValid = (input, rules) => {
  switch (rules) {
  case 'string':
    return validator.isString(input);
  case 'arr':
    return validator.isEvenArr(input);
  case  'positive':
    return validator.isPosNum(input);
  case 'object':
    return validator.isObj(input);
  case 'hair':
    return validator.objHas(input);
  default:
    return undefined;
  }
  
};


validator.isString = (input) => {
  return typeof input === 'string';
};

validator.isEvenArr = (input) => input.filter((number) =>  0 === number % 2);


validator.isPosNum = (input) =>{
  return input > 0;
};

validator.isObj = (input) => {
  return typeof  input === 'object';
};

validator.objHas = (hair) => {/*eslint-disable */
  return hair.hasOwnProperty('cut')
        && hair.hasOwnProperty('length')
        && hair.hasOwnProperty('color')
        && hair.hasOwnProperty('bald');
  /*eslint-enable*/

};



