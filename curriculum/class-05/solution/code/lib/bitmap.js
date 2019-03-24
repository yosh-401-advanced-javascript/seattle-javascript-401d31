'use strict';

const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const transforms = {
  greyscale: require('./transforms/greyscale.js'),
  bluescale: require('./transforms/bluescale.js'),
  greenscale: require('./transforms/greenscale.js'),
  redscale: require('./transforms/redscale.js'),
  invert: require('./transforms/invert.js'),
  random: require('./transforms/random.js'),
};

/**
 * Bitmap Class
 */
class Bitmap {

  /**
   * Creates a new bitmap
   * @param filePath
   * @constructor
   */
  constructor(filePath) {
    this.file = filePath;
  }

  /**
   * Parses a bitmap
   * @param buffer (file buffer)
   */
  parse(buffer) {
    this.buffer = buffer;
    this.type = buffer.toString('utf-8', 0, 2);
    this.size = buffer.readInt32LE(2);
    this.offset = buffer.readInt32LE(10);
    this.headerSize = buffer.readInt32LE(14);
    this.width = buffer.readInt32LE(18);
    this.height = buffer.readInt32LE(22);
    this.bitsPerPixel = buffer.readInt16LE(28);
    this.colorArray = buffer.slice(54, this.offset);
    this.pixelArray = buffer.slice(1078);
    if ( ! this.colorArray.length ) {
      throw 'Invalid .bmp Format';
    }
  }

  /**
   * Loads a bitmap from a file and parses it
   * @returns {*}
   */
  load() {
    return readFile(this.file)
      .then(data => this.parse(data))
      .catch(error => {throw error;});
  }

  /**
   * Writes a bitmap back to file
   * @returns {*}
   */
  write() {
    let file = this.newFile || this.file;
    return writeFile(file, this.buffer)
      .then( () => `Bitmap Transformed: ${file}`)
      .catch(error => {throw error;} );
  }

  /**
   * Transforms a bitmap using a named transformation function
   * @param operation
   */
  transform(operation) {
    try {
      transforms[operation](this);
      this.newFile = this.file.replace(/\.bmp/, `.${operation}.bmp`);
    }
    catch(e) {
      throw 'Invalid Transformation Specified';
    }
  }

}

module.exports = Bitmap;
