'use strict';

const transform = require('../../../lib/transforms/invert.js');

describe('Inversion Transformation', () => {

  it('throws an error, given an invalid colorArray', () => {
    expect(() => transform()).toThrow();
  });

  it('given a proper colorArray, will invert colors', () => {

    let arrays = [
      [0],
      [1],
      [12,43],
      [3,4,5],
      [0,0,0,0,0,0,0,0],
      [1,2,3,4,5,6,7,8,9,10,11,12],
      [200,256,23,22,1,3,16,78,99],
    ];

    arrays.forEach(arr => {
      let bmp = { colorArray: [...arr] };
      transform(bmp);
      for(let i = 0; i < bmp.colorArray.length; i += 4) {
        expect(bmp.colorArray[i]).toEqual(Math.abs(255 - arr[i]));
        expect(bmp.colorArray[i + 1]).toEqual(Math.abs(255 - arr[i + 1]));
        expect(bmp.colorArray[i + 2]).toEqual(Math.abs(255 - arr[i + 2]));
      }
    });

  });

});
