'use strict';

module.exports = (bmp) => {

  if( ! bmp.colorArray.length ) throw 'must pass valid bmp object';

  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
  for (var i = 0; i <= (bmp.colorArray.length - 4); i = i + 4){
    bmp.colorArray[i] = getRandomArbitrary(0, 255);
    bmp.colorArray[i + 1] = getRandomArbitrary(0, 255);
    bmp.colorArray[i + 2] = getRandomArbitrary(0, 255);
  }

};
