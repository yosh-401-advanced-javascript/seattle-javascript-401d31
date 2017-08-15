![cf](http://i.imgur.com/7v5ASc8.png) 04: Bitmap Transformer & Event Emitter
=====================================

## Event Emitter Resources
* [events api docs]

## Bitmap Resources
* read [bitmap file format]
* read  [node buffer api docs]
* watch [endian and little endian]

## Learning Objectives
* students will be able to manipulate binary data using the node.js `Buffer` class
* students will be able to architect modular solutions to solving problems

## Overview

#### EventEmitter
* much of the node.js architecture is built around the use of events
* all objects that emit events in node.js are instances of the EventEmitter constructor
* EventEmitter's are a great way to handle controlling asynchronous events
* functions can be registered as listeners for an event on instances of the EventEmitter class
* instances of EventEmitters can emit events and pass the listeners data
* EventEmitters *do not* throw errors if events are emitted - they have no listeners to handle them
  * this can be a very powerful feature and is often used to implement "hooks" and "observables" in many libraries

#### Binary
* you've probably heard that all things in the computer are just a bunch of zeros and ones
  * its true :)
* since 0's and 1's mean almost nothing to humans, we have created rules to convert them into meaningful information
* integers, floating point numbers, and alphanumeric characters are some of the basic things we can turn zeros and ones into
* the process for taking an integer, float, character, or etc. and turning them into zeros and one is called **encoding**
* the process for taking zeros and ones and turning them into an integer, float, character, or etc. is called **decoding**
* binary and hex work a lot like decimal
  * decimal is also referred to as base 10
  * binary is also referred to as base 2
  * hex is also referred to as base 16

```
HOW DECMAL WORKS...

places    43210
_______________
value     06974

6974 base 10 is the same as (6 * 10^3) + (9 * 10^2) + (7 * 10^1) + (8 * 10^0)
6974 base 10 is the same as (6 * 1000) + (9 * 100) + (7 * 10) + (8 * 1)
6974 base 10 is the same as (6000) + (900) + (70) + (8)
6974 base 10 is the same as 6974

----------------------------------------------------------------------

HOW BINARY WORKS

places    43210
_______________
value     01011

1010 base 2 is the same as (1 * 2^3) + (0 * 2^2) + (1 * 2^1) + (1 * 2^0)
1010 base 2 is the same as (1 * 8) + (0 * 4) + (1 * 2) + (1 * 1)
1010 base 2 is the same as (8) + (0) + (2) + (1)
1010 base 2 is the same as 11

----------------------------------------------------------------------

Hex is the same ...
```
* below is decimal hex binary conversion chart
``` text
DEC |HEX |BIN
--------------
0   |0   |0000
1   |1   |0001   
2   |2   |0010   
3   |3   |0011   
4   |4   |0100   
5   |5   |0101   
6   |6   |0110   
7   |7   |0111   
8   |8   |1000   
9   |9   |1001   
10  |a   |1010   
11  |b   |1011   
12  |c   |1100   
13  |d   |1101   
14  |e   |1110   
15  |f   |1111   
```
* to convert to text there is an encoding called **ascii** - this maps all characters to a corresponding number
* run the command `man ascii` in your command line to see an ascii chart
* modern computing provides us with a character encoding called `utf8` - this is an extension for ascii, that supports multiple languages

#### Buffers - Part 2
* pure javascript is Unicode friendly but not nice to binary data
* when dealing with TCP streams or the file system, it's necessary to deal with octet streams
  * node.js has a few ways of handling, manipulating, consuming, and creating octet streams
  * raw data is stored as instances of the `Buffer` class
  * a buffer is similar to an array of integers, but corresponds to raw memory allocation outside the V8 heap - a `Buffer` cannot be resized
* the `Buffer` class is global, thus removing the need to `require` it in your application
* a `Buffer` represents arrays of bytes
  * a byte is made of of 8 bits
  * a bit is a single one or zero
* each byte in a buffer can be decoded as an integer, floating point number, or a string
* integers and floats come in different sizes: 8bit, 16bit, 32bit...
* strings come in different encodings: 'hex', 'utf8', 'base64'...
* buffers are often referred to as raw data - this just means a bunch of zeros and ones
* many of the node.js APIs use buffers as the data type when dealing with input and output
* your OS stores binary in one of two ways
  * `little endian` - most significant bit first
  * `big endian` - least significant bit first
* in a node **REPL** you can use `os.endianness()` to determine how your os stores bytes
  * `'LE'` - little endian
  * `'BE'` - big endian
* **note:** - make sure that you are using methods that correspond to your system's **endianness**


<!--links -->
[events api docs]: https://nodejs.org/api/events.html
[bitmap file format]: https://en.wikipedia.org/wiki/BMP_file_format
[node buffer api docs]: https://nodejs.org/api/buffer.html
[endian and little endian]: https://www.youtube.com/watch?v=B50mNoVw21k
