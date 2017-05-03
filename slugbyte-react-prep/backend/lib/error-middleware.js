'use strict';

module.exports = (err, req, res, next) => {
  console.log(err);

  if(err.status){
    res.status(err.status).send(err.name);
  }

  res.status(500).send('InternalServerError');
  
};
