'use strict';

// Pre-load a mocked version of a transform before the Bitmap class gets a chance to load the real one., we'll test for it later..
jest.mock('../../lib/transforms/invert.js');
const invert = require('../../lib/transforms/invert.js');

const Bitmap = require('../../lib/bitmap.js');

describe('Bitmap Class', () => {

  it('bombs on an invalid file', () => {

    let bitmap = new Bitmap(`${__dirname}/fnf.bmp`);

    return bitmap.load()
      .then( () => {} )
      .catch(err => {
        expect(err).toBeDefined();
      });

  });

  it('rejects an invalid bitmap', () => {

    let bitmap = new Bitmap(`${__dirname}/24bit.bmp`);

    return bitmap.load()
      .then( () => {} )
      .catch(err => {
        expect(err).toBeDefined();
      });

  });

  it('can parse a good bitmap', () => {

    let bitmap = new Bitmap(`${__dirname}/good.bmp`);

    return bitmap.load()
      .then( () => {
        expect(bitmap.buffer).toBeDefined();
        expect(bitmap.type).toEqual('BM');
        expect(bitmap.size).toBeGreaterThan(0);
        expect(bitmap.offset).toBeGreaterThan(0);
        expect(bitmap.headerSize).toBeGreaterThan(0);
        expect(bitmap.width).toBeGreaterThan(0);
        expect(bitmap.height).toBeGreaterThan(0);
        expect(bitmap.bitsPerPixel).toEqual(8);
        expect(bitmap.colorArray.length).toBeGreaterThan(0);
      });

  });

  it('rejects invalid transformations', () => {

    let bitmap = new Bitmap(`${__dirname}/24bit.bmp`);

    expect(() => bitmap.transform('foo')).toThrow();

  });

  it('will call a proper transformation module', () => {

    let bitmap = new Bitmap(`${__dirname}/24bit.bmp`);
    bitmap.transform('invert');
    expect(invert).toHaveBeenCalled();

  });

});
