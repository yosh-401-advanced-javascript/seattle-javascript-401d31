describe("Reader", ()=> {
  const files = ["assets/one", "assets/two", "assets/three"];
  const reader = require('../lib/reader');

  test("It can read a file", ()=> {
    reader(files, (err, data)=> {
      if (err) {
        return;
      }
      expect(data[0].includes("once")).toBe(true);
      expect(data[1].includes("twice")).toBe(true);
      expect(data[2].includes("thrice")).toBe(true);
    });
  });
  test("It returns an error if a file doesn't exist", ()=> {
    reader(["/noexist"], (err, data)=> {
      if (err) {
        // test for success
        expect(err.message.includes("no such file or directory")).toBe(true);
        return;
      }
      // force a failure
      expect(true).toBe(false);
    });
  });
});
