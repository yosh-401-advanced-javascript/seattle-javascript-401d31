class MorseCodeNode {
  constructor(value, dot, dash) {
    this.value = value;
    this.dot = dot;
    this.dash = dash;
  }
}

class MorseCodeTree {
  constructor() {
    // root is overwritten inside _buildTree
    this.root = null;
    this.charToCode = {};

    this._buildTree();
    this._buildCharToCode(this.root);
  }

  encode(str) {
    return str.toLowerCase()
    .split('')
    .map(this.encodeChar.bind(this))
    .filter(el => el)
    .join(' ');
  }

  encodeChar(charr) {
    let code = this.charToCode[charr];
    if (code) {
      return code;
    }
    return null;
  }

  // Decode a morse code string and return a string of text
  // and spaces.
  // A morse code string should look like
  // "... --- ..." for "SOS"
  // "-.-. .- -" for "CAT"
  // . represents short dots
  // - represents long dashses
  // a space seperates each character
  decode(str) {
    let codes = str.split(' ');
    return codes.map(this.decodeChar.bind(this)).join('');
  }

  // accepts a code representing one character.
  // walks the Morse Code Tree following dots and dashes
  // and the pointer should end on a node containing the
  // letter the code represents.
  decodeChar(code) {
    let blips = code.split('');
    let pointer = this.root;

    blips.forEach((charr)=> {
      if (charr === '.') {
        pointer = pointer.dot;
      } else if (charr === '-') {
        pointer = pointer.dash;
      } else {
        let charrError = "Unexpected character: " + charr + ".";
        charrError += " Expected either '.' or '-'";
        throw new Error(charrError);
      }

      if (!pointer) {
        let pointerError = "Error processing: " + code + ".";
        pointerError += " Walked off end of tree.";
        throw new Error(pointerError);
      }
    });

    return pointer.value;
  }

  // priate method to manually build the initial tree
  _buildTree() {
    const charMap = {};
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    for (let charr of characters) {
      let node = new MorseCodeNode(charr);
      charMap[charr] = node;
    }

    // create a special character to represent null references.
    charMap['_'] = null;
    charMap['^'] = new MorseCodeNode('^');

    // attach the start node to the root of the tree
    this.root = charMap['^'];

    // a helper function that accepts a three-character string
    // and attaches nodes together.
    // first char is the parent node.
    // second char is the "left" "dot" node
    // third char is the "right" "dash" node
    // the '_' underscore character represents a null reference
    // the '^' character represents the root of the tree
    function attach(repr) {
      let parentt = charMap[repr[0]];
      let dot = charMap[repr[1]];
      let dash = charMap[repr[2]];
      parentt.dot = dot;
      parentt.dash = dash;
    }

    // manually build up the structure of the tree.
    // run an image search to see the structure of the tree.
    attach('^et');
    attach('eia');

    attach('isu');
    attach('shv');
    attach('uf_');

    attach('arw');
    attach('rl_');
    attach('wpj');

    attach('tnm');
    attach('ndk');
    attach('dbx');
    attach('kcy');

    attach('mgo');
    attach('gzq');
  }

  _buildCharToCode(node, code='') {
    if (!node) {
      return;
    }

    this.charToCode[node.value] = code;
    this._buildCharToCode(node.dot, code + '.');
    this._buildCharToCode(node.dash, code + '-');
  }
}

module.exports = MorseCodeTree;
