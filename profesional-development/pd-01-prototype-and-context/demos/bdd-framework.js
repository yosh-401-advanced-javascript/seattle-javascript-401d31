'use strict';

/// bellow is an implamentation of a syncronus BDD testing framework
/// it wont work with async code.. but its a cool demo of how context
/// can be used in powerful ways

// state is used to hold all the callbacks registerd by before, after, and it blocks
let state = {
  beforeBlocks: [],
  afterBlocks: [],
  itBlocks: [],
};

// before after and it mush their callbacks into the state 
// so that describe can later itterate over them
function before(callback){
  state.beforeBlocks.push(callback);
}

function after (callback){
  state.afterBlocks.push(callback);
}

function it(msg, callback){
  state.itBlocks.push({msg, callback});
}

function describe(msg, callback){
  // log the describe message
  console.log(msg);

  // run the describe callback which will register all the before,
  // aftter, and it callbacks
  callback.call({});

  // loop over the before callbacks and run them
  state.beforeBlocks.forEach(cb => cb());

  // loop over the it callbacks and run them in a try block
  // if they fail log the error message

  state.itBlocks.forEach((test) => {
    console.log(test.msg);
    try {
      test.callback()
      console.log('success');
    } catch (err) {
      console.error('error');
      console.log('  ', err.message);
    }
  });

  // after all the it callbacks are done loop over the after callbacks and run them
  state.afterBlocks.forEach(callback => callback());
}

// demonstrate t
describe('running example bdd testing framework', function(){;
  // bind is used to bind the before and after callbacks to the describe block's context
  before((function(){
    console.log('first');
    this.first = 'shark in the dark';
  }).bind(this)); 

  after((function(){
    console.log('fourth');
    console.log('this.first:', this.first);
    console.log('this.second:', this.second);
  }).bind(this));

  // lexical arrow functions inherrit there context form the closest parent with context
  // this means you wont need bind
  // TODO: refactor this before block's callback to use bind instead of an arrow function
  before(() => { 
    console.log('second');
    this.second = 'fog in the hole in the log';
  })

  // TODO: refactor this it block's callback to use bind instead of an arrow function
  it('should be true', () => {
    console.log('third');
    if(this.first != 'shark in the dark')
      throw new Error('lulwat big mistake');

    //TODO: uncomment this to see an error
    //if(false == false)
      //throw new Error('lulwat big mistake');
  })
});
