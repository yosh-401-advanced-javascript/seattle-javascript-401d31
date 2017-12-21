const MorseCodeTree = require('../lib/morse-code-tree');

describe("Morse Code Tree", ()=> {
  test("constructor", ()=>{
    // just make sure there's no errors building the tree.
    let tree = new MorseCodeTree();
    expect(true).toBe(true);
  });

  describe("decode", ()=> {
    test("can decode '... --- ...' into SOS", ()=> {
      const tree = new MorseCodeTree();
      const morse = "... --- ...";
      expect(tree.decode(morse)).toBe("sos");
    });

    test("can decode '-.-. .- -' into CAT", ()=> {
      const tree = new MorseCodeTree();
      const morse = "-.-. .- -";
      expect(tree.decode(morse)).toBe("cat");
    });

    test("throws error when symbol walks off tree", ()=> {
      const tree = new MorseCodeTree();
      const morse = ".....";
      try {
        tree.decode(morse);
      } catch(err) {
        let message = 'Walked off end of tree.';
        expect(err.message.includes(message)).toBe(true);
      }
    });

    test("throws error seeing foreign symbol", ()=> {
      const tree = new MorseCodeTree();
      const morse = "..0";
      try {
        tree.decode(morse);
      } catch(err) {
        let message = 'Unexpected character';
        expect(err.message.includes(message)).toBe(true);
      }
    });
  });

  describe("encode", ()=> {
    test("(lowercase) can encode sos into '... --- ...'", ()=> {
      const tree = new MorseCodeTree();
      const morse = "... --- ...";
      expect(tree.encode("sos")).toBe(morse);
    });

    test("(lowercase) can encode cat into '-.-. .- -'", ()=> {
      const tree = new MorseCodeTree();
      const morse = "-.-. .- -";
      expect(tree.encode("cat")).toBe(morse);
    });

    test("(uppercase) can encode SOS into '... --- ...'", ()=> {
      const tree = new MorseCodeTree();
      const morse = "... --- ...";
      expect(tree.encode("SOS")).toBe(morse);
    });

    test("(uppercase) can encode CAT into '-.-. .- -'", ()=> {
      const tree = new MorseCodeTree();
      const morse = "-.-. .- -";
      expect(tree.encode("CAT")).toBe(morse);
    });
  });
});

