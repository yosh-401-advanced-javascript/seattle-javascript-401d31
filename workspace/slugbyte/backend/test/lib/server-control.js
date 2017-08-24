'use strict';

const server = require('../../server.js');

const serverControl = module.exports = {};
let httpServer;

serverControl.start = (done) => {
  if(!server.isOn){
    let PORT = process.env.PORT || 3000;
    httpServer = server.listen(PORT, () => {
      console.log('server up', PORT);
      server.isOn = true;
      done();
    });
    return;
  }
  done();
};

serverControl.stop = (done) => {
  if(server.isOn){
    return httpServer.close(() => {
      console.log('server down');
      server.isOn = false;
      done();
    });
  }
  done();
};
