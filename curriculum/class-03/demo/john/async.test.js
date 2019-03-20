const asyncModule = require('./async.js');

let log = jest.spyOn(global.console, 'log').mockImplementation(() => {});
let warn = jest.spyOn(global.console, 'log').mockImplementation(() => {});
let error = jest.spyOn(global.console, 'log').mockImplementation(() => {});

describe('callbacks', () => {
  
  it('works', (done) => {
    
    let words = 'foobar';

    let myCallBack  = (err,data) => {
      if (err) {
        expect(err).toBeNull();
        done();
        return;
      }
      expect(data).toEqual(words);
      done();
    };
    
    
    asyncModule.doerOfThings(words, myCallBack);
  });
  
});

describe('promises', () => {

  it('works', () => {

    let words = 'bizzbuzz';
    
    let myCallBack  = (err,data) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(data);
    };
    
    return asyncModule.promiserOfThings(words, myCallBack)
      .then( () => {
        expect(log).toHaveBeenCalledWith(words);
      });
  });

});

describe('await', () => {

  it('works', async () => {

    let words = 'bizzbuzz';

    let myCallBack  = (err,data) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(data);
    };

    await asyncModule.promiserOfThings(words, myCallBack);
    expect(log).toHaveBeenCalledWith(words);
    
  });

});