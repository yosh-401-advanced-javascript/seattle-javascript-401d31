# Solution: Buffers

## Lab Requirements

### Lab Assignment 1 - Code Generator
Students must feed a string of code into a "generator", which will create an empty buffer and fill it, character by character, from that string, returning a full buffer which they can then write to a file.

      
#### Grading Standards & Notes
  * Features
    * File must be created
    * Code must actually run (`node loop.js`)
  * Code Quality
    * Create the code you want to write
    * Loop the chars
    * Find the char code and add it to the buffer
    * If they can make a class or a constructor, that would be ideal
      * 301 level is linear
      * 401 level is to create a class/object that you can test and re-use
  * Testing
    * Tests around buffer creation 
      * Create a string
      * Buffer-ize it
      * Run the string through the class
      * It should match that buffer that yuo created
      * How does it handle nulls, undefined, etc.
      * How can we test if the code is valid? eval?
  * Deployment
    * Travis Only
  * Documentation
    * README Standards 
    * JSDoc Required
    
#### Lab Assistance Notes
* Push them towards creating a class to do the work, and a function that then calls the class with some code block (see create-code.js)

---

### Lab Assignment 2 - HTML Creator
* The concept here is going to be for them to recognize patterns in the text file. 
  * How do I tell what a paragraph is? 
  * Where do I put my open and closing brackets?
  * How can I repeat those repetitive steps?
  
The big thing for both of these will be in figuring out how to test it. Suggest to the students that they start simple in their tests and create a buffer from a string as their starting and ending points. Then, their code can accept that string and produce a buffer that exactly matches the one in their test.

      
#### Grading Standards & Notes
  * Features
    * Proper HTML needs to be created
    * The file needs to be saved
    * Open it in a browser to confdirm
  * Code Quality
    * Read the file in line by line
    * Find the patterns!
  * Testing
    * Test with a simple string that has the same patterns
    * Mock the fs
    * How do you handle unmatched patterns?
  * Deployment
    * Travis Only
  * Documentation
    * README Standards 
    * JSDoc Required
    
#### Lab Assistance Notes
* 


