'use strict';

module.exports = (req,res,next) => {
  const valid = Math.random() >= 0.5;
  valid ? next() : next('Invalid Entry');
};
