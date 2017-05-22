'use strict';

module.exports = (err, req, res, next) => {
  console.log(err);

  if(err.status){
    return res.status(err.status).send(err.name);
  }

  if(err.message.indexOf('E11000 duplicate key') > 0)
    return res.status(409).send('ConflictError')

  res.status(500).send('InternalServerError');
  
};
