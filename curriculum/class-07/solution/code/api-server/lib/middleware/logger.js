'use strict';

module.exports = (message = '') => (req,res,next) => {
  console.log(`${req.requestTime}\t${req.method}\t${req.path}\t${message}`);
  next();
};
