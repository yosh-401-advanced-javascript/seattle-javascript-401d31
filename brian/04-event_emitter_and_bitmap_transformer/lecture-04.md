![cf](http://i.imgur.com/7v5ASc8.png) 04: EventEmitter and Bitmap Transformer
=====================================

#### Code Review

#### EventEmitter
  *

#### Working with Binary Data - Part 2
  * **Bases**
    * Bases refer to the creation of a new digit, whenever the base "ticks over"
      * **example:** base2 has 2 possible values before it ticks over
        * binary is base2, thus only allowing for a 0 and a 1
      * **base8** (octal) - 8 possible options (0-7)
      * **base10** (decimal) - has 10 possible values - (0-9)
      * **base16** (hexidecimal) - has 15 possible values (0-f)
        * using the hexidecimal format, we can represent numbers that are higher than the number **9** with a letter, starting with **a** and counting up to the letter **f**
      
    
  * **Hexidecimal Conversion Chart**
    ```
    | Binary         | Hexadecimal    |
    | :------------- | :------------- |
    | 00000000       | 0              |
    | 00000001       | 1              |
    | 00000010       | 2              |
    | 00000011       | 3              |
    | 00000100       | 4              |
    | 00000101       | 5              |
    | 00000110       | 6              |
    | 00000111       | 7              |
    | 00001000       | 8              |
    | 00001001       | 9              |
    | 00001010       | a              |
    | 00001011       | b              |
    | 00001100       | c              |
    | 00001101       | d              |
    | 00001110       | e              |
    | 00001111       | f              |
    ```

#### Semantic Versioning
  * semantic versioning is a simple set of rules that dictates how version numbers are assigned and released
    * following proper versioning conventions will help avoid the dreaded "dependency hell"
      * "dependency hell" refers to version lock - this means you cannot safely move your project forward without issues
  * `version [MAJOR].[MINOR].[PATCH]`
    * ex: `version 1.0.0`
    * MAJOR - increment the MAJOR version when you have removed or changed a feature and where dependent modules must be modified to work with the new version
    * MINOR - increment the MINOR version when a feature has been added but the module is backwards compatible
    * PATCH - increment the PATCH version when fixing a bug/defect

#### Bitmap Transformer
  * **Project Overview**
    * why is this specific project important?
      * this project was designed with a few things in mind:
        * the general process of working with binary data
        * working through the process of deconstructing a buffer, manipulating it, and writing it back to a new buffer (or the same buffer, if you choose)
        * working with the `fs` module to read and write new files
        * working with callbacks and, in particular, working with the NodeJS "error first" callback pattern
        * researching and creating features that represent a series of "real life" programming tasks
    * what is a `.bmp`?
      * its a file type
      * you will be reading and running transforms on an 8 bit bitmap
  * **Getting Started**
    * groking the `.bmp` file format wiki
      * [BMP File Format](https://en.wikipedia.org/wiki/BMP_file_format)
    * deconstructing a `.bmp` file
      * major components:
        * file header
        * DIB header
        * colors table
        * pixel array
  * **Project Team Selection**
    * TODO: Add Project Teams/Members
