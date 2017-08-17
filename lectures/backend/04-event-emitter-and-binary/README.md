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

## EventEmitter
* much of the node.js architecture is built around the use of events
* all objects that emit events in node.js are instances of the EventEmitter constructor
* EventEmitter's are a great way to handle controlling asynchronous events
* functions can be registered as listeners for an event on instances of the EventEmitter class
* instances of EventEmitters can emit events and pass the listeners data
* EventEmitters *do not* throw errors if events are emitted - they have no listeners to handle them
  * this can be a very powerful feature and is often used to implement "hooks" and "observables" in many libraries

## Binary
You probably know that everything in the computer is stored in 0s and 1s. As web developers we dont often have to work with data at such a low level, instead usualy get to work with data using Strings, Numbers, Arrays, Objects, and so on. Though most of the time we are lucky enough to work the abstracted types, sometimes we are required to undestand how data is stored in binary. There are predefined specifications for how to decode numbers, and strings from binary. Numbers and strings are the majority of the data we work with. Numers and Strings are used to make more compex things like JSON, XML, HTML, JPEG, GIF, MP3, MP4, and even Javascript. 

#### Integers
#### Floating Point Numbers
#### Strings 

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



<!--links -->
[events api docs]: https://nodejs.org/api/events.html
[bitmap file format]: https://en.wikipedia.org/wiki/BMP_file_format
[node buffer api docs]: https://nodejs.org/api/buffer.html
[endian and little endian]: https://www.youtube.com/watch?v=B50mNoVw21k
