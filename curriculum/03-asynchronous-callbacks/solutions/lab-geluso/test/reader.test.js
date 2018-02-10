describe("Reader", ()=> {
  const files = ["assets/one", "assets/two", "assets/three"];
  const reader = require('../lib/reader');

  it("It can read a file", (resolve, reject)=> {
    // "Note: If a promise is returned from test, Jest will wait for the
    // promise to resolve before letting the test complete."
    // https://facebook.github.io/jest/docs/en/api.html#testname-fn-timeout
    console.log("READING FILES");
    reader(files, (err, data)=> {
      if (err) {
        reject();
        return;
      }
      expect(data[0].includes("once")).toBe(true);
      expect(data[1].includes("twice")).toBe(true);
      expect(data[2].includes("thrice")).toBe(true);
      resolve();
    });
  });
  it("It returns an error if a file doesn't exist", (resolve, reject)=> {
    reader(["/noexist"], (err, data)=> {
      if (err) {
        // test for success
        expect(err.message.includes("no such file or directory")).toBe(true);
        resolve();
        return;
      }

      // force a failure
      expect(true).toBe(false);
      reject();
    });
  });
});
