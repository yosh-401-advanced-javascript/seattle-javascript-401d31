'use strict';

const server = require('../../server.js');

const serverControl = module.exports = {};

serverControl.start = (done) => {
  if(!server.isOn){
    let PORT = process.env.PORT || 3000;
    return server.listen(PORT, () => {
      console.log('server up', PORT);
      server.isOn = true;
      done();
    });
  }
  done();
};

serverControl.stop = (done) => {
  if(server.isOn){
    return server.close(() => {
      console.log('server down');
      server.isOn = false;
      done();
    });
  }
  done();
};
