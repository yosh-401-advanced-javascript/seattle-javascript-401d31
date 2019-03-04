![cf](http://i.imgur.com/7v5ASc8.png) Solution: Async
=====================================================

## Overview
  * Use the fs module to read a file, change its contents, and save it out
    * Stretch Goal: Modularize that and Write tests around this, using a mocked fs module
    * This will be a "start from scratch" assignment, students must complete this before tackling the 2nd assignment.
  * Read in 3 files, in order, and output their contents (in order)
    * Write modular code
    * Write tests
    * Use Callbacks and Promises
    * Students will get starter code here, which is a monolithic file that reads in 3 files in series, using a callbacks, with a mocked test.
      * This code doesn't work 
        * callbacks aren't nested
        * the callback function isn't called right
        * as-is, it can't be tested.
        
### Task 1:
  * They must first nest the callbacks and get the right data back to the calling function, index.js will work and the tests will also pass
  * They must modularize this code
  * They must refactor the input to accept a list of file names
  * They must read/output the file contents in order
  * They must refactor the test to make that assertion
      
### Task 2: 
  * They must refactor the code from callbacks to chained promises
      
### Task 3 (Stretch Goal)
  * Use Promise.all()
  * Create an array of fs.readFile promises
  * Bring in the results in order

### Task 4 (Stretch Goal)
  * Use a recursive function to do a callback for each file
  * Load the list of files into an array
  * For the recursion, keep shifting the array until it's empty
  * Load up the response array and return on the last iteration