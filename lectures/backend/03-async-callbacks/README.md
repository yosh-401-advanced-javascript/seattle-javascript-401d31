![cf](http://i.imgur.com/7v5ASc8.png) 03: async callbacks
=====================================

## JS Runtime Resources
* Watch [what the heck is the event loop anyway]

## fs Module Resources
* Read [fs module docs]
* Read [Understanding error first callbacks](http://fredkschott.com/post/2014/03/understanding-error-first-callbacks-in-node-js/)

## Learning Objectives
* students will be able to create asynchronous programs using the node.js callback pattern
* students will be able to read, write, and encode binary data using the `Buffer` class
* students will be able to utilize the built-in `fs` module for basic file system I/O
* students will be able to use the `done` parameter (provided by mocha.js) for creating asynchronous tests

## Javascript Runtime
#### Hoisting
* hoisting is JS default behavior of moving all declarations to the top of the current scope
* only declarations are hoisted, not the initilization
  * declaring a variable is the actual creation of a variable, not the initilization
    * initilization refers to when a variable is assigned a value
* hoisting example:
  ```
    adder(num1, num2);

    var num1 = 10;
    var num2 = 20;

    function adder(a, b) {
      return a + b;
    };
  ```
* in the above example, we are still able to call our `adder` function as the function declaration has been hoisted to the top of the current scope

#### Call Stack
In javascript every syncronus function that is called is push onto a stack in V8. When the function that is running returns it is poped off a stack. The function on top of the stack is allways the function that is currently running. 

This stack is referd to as a **Call Stack**. The Call Stack is allways printed to the screen when an error is thrown, which helps developers to trace where errors have occurd in their code.

#### Callback Queue
When an asyncronous function called *foo* is invoked it is pushed on to the V8 Call Stack. Then foo makes a call to A Browser API or Node API and passes on a callback. Then the *foo* function is poped of the V8 Call Stack, and V8 keeps on exicuting Syncronous. Meanwhile the external Browser/Node API is still running. Once the external API has completed its task it will pass any results into the callback and enqueue the callback on V8s **Callback Queue**. Functions stored on the Callback Queue are not exicuting, they are only waiting to be put on to the Call Stack so they can exicuted their code.

#### Event Loop
The event loop is in charge of dequeueing callbacks from the V8 Callback Queue and pushing them on to the Call Stack. It has one rule for doing this. It will only push a callback on to the Call Stack if it is empty.
* When the Call Stack pops its last function
  * The Event Loop will check if any callbacks are in the Callback Queue
  * If it finds a callback it will dequeue it from the Callback Queue and Push it on the Call Stack
* When both the Call Stack and Callback Queue are empty
  * The Event Loop will watch the Callback Queue for new callbacks
  * When a callback is encuded it will be immediatly dequeued and pushed on to the Call Stack

## NodeJS Callback Pattern
NodeJS made the decision to have all asyncronus events be handled using error first callbacks. The main advantage of this is that all aysncrouns methods have a consisitant interface. This means that when you are working with Asyncrouns NodeJS code, you can allways assume how the callback is going to be fromated, making your life as a developer much easier! 

Having a consistant callback interface also has made it possible for librarys to be written that javascript developers in handling complex async code. 

* a callback is simply a function that is passed as an argument to another function
* defining an "error first" callback
  * `(err, result) => {}`
  * the first paramiter is reserved for an error 
    * the value will be null or undefiend if there is no error
  * the second callback is reserved for any successful response data 
    * the value will be null or undefiend if there is no data
    * not every NodeJS method passes data into the callback. In methods that do not resolve data success is defined as a lack of an error

## File System I/O
* The NodeJS `fs` module gives us the ability to perform file system I/O operations. 
* Most methods on the fs module have syncronous and asyncronous implimations
* syncronous methos end in sync `readFileSync`
* asyncronous methods do not contain the word sync `readFile`
* Syncronus methods block javascript from exicuting further code until complete. This is a huge drawback, theirfor Syncronous methods are rarely if not used in webserver development

``` javascript
// example of how to copy a file using nodejs
const fs = require('fs')

fs.readFile('/path/to/input.txt', (err, buffer) => {
  if(err)
    throw err
  let content = buffer.toString()
  fs.writeFile('path/to/output.txt', content, (err) => {
    if(err)
      throw err
    console.log('done)
  })
})
```

## Buffer
* Buffer is a global constructor in nodejs
* buffers are the data type used in node to work with binary data
* a buffers hold Arrays of Bytes
* The data in buffers can be decoded as integers, floating point numbers, and strings
  * example:
    ```
      var dat = new Buffer('welcome to bufferville');
      console.log(data);
      console.log(data.toString()) // prints the original string
      console.log(data.toString('hex')) // prints the strings data as hex digits
      console.log(data.toString('utf8', 0, 1)) // prints the character stored in the first byte
      console.log(data.readUInt8()) // prints the intiger stored in the first byte 
      console.log(data.readFloatLE()) // prints the floating point number stored in the first 4 bytes
    ```
    

## Asynchronous Testing 
 * Mocha, Jasmine, and Jest give us 2 sec to call `done` before a timeout error occurs
   * invoke done after all the assertions have completed
   * calling done to early will cause false positives
   * passing a value into the done callback tells the testing framework that an error has occured

``` javascript
// example using it tests
it('true should be true', (done) => {
  setTimeount(() => {
    expect(true).toBe(true)
    done()
  }, 0)
  // invoking done here will be a false positve
})
```

<!--links -->
[what the heck is the event loop anyway]: https://www.youtube.com/watch?v=8aGhZQkoFbQ
[fs module docs]: https://nodejs.org/dist/latest-v6.x/docs/api/fs.html
