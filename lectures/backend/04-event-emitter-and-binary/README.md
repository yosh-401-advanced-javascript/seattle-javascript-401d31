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
You probably know that everything in the computer is stored in 0s and 1s. As web developers we don't often have to work with data at such a low level, instead we usualy get to work with Strings, Numbers, Arrays, Objects, and so on. Though most of the time we are lucky enough to work with such abstracted data types, sometimes we are required to undestand how data is stored in binary. There are predefined specifications for how to decode number and strings from binary. The majority of the data we work with is made up of numbers and strings. For example Numbers and Strings are used to make more compex things like JSON, XML, HTML, JPEG, GIF, MP3, MP4, and even Javascript. Undersanding how to manipulate binary data on a more fundamental leval, can open up doors for having much more control over the data in our applications.

#### Strings 
|   0 |nul |   1 |soh |   2 | stx |  3 |etx  |  4 | eot |   5 | enq |  6 | ack |   7 | bel | 
|   8 |bs  |   9 |ht  |  10 | nl  | 11 |vt   | 12 | np  |  13 | cr  | 14 | so  |  15 | si  |
|  16 |dle |  17 |dc1 |  18 | dc2 | 19 |dc3  | 20 | dc4 |  21 | nak | 22 | syn |  23 | etb | 
|  24 |can |  25 |em  |  26 | sub | 27 |esc  | 28 | fs  |  29 | gs  | 30 | rs  |  31 | us  |
|  32 |sp  |  33 | !  |  34 |  "  | 35 | #   | 36 |  $  |  37 |  %  | 38 |  &  |  39 |  '  |
|  40 | (  |  41 | )  |  42 |  *  | 43 | +   | 44 |  ,  |  45 |  -  | 46 |  .  |  47 |  /  |
|  48 | 0  |  49 | 1  |  50 |  2  | 51 | 3   | 52 |  4  |  53 |  5  | 54 |  6  |  55 |  7  |
|  56 | 8  |  57 | 9  |  58 |  :  | 59 | ;   | 60 |  <  |  61 |  =  | 62 |  >  |  63 |  ?  |
|  64 | @  |  65 | A  |  66 |  B  | 67 | C   | 68 |  D  |  69 |  E  | 70 |  F  |  71 |  G  |
|  72 | H  |  73 | I  |  74 |  J  | 75 | K   | 76 |  L  |  77 |  M  | 78 |  N  |  79 |  O  |
|  80 | P  |  81 | Q  |  82 |  R  | 83 | S   | 84 |  T  |  85 |  U  | 86 |  V  |  87 |  W  |
|  88 | X  |  89 | Y  |  90 |  Z  | 91 | [   | 92 |  \  |  93 |  ]  | 94 |  ^  |  95 |  _  |
|  96 | `  |  97 | a  |  98 |  b  | 99 | c   |100 |  d  | 101 |  e  |102 |  f  | 103 |  g  |
| 104 | h  | 105 | i  | 106 |  j  |107 | k   |108 |  l  | 109 |  m  |110 |  n  | 111 |  o  |
| 112 | p  | 113 | q  | 114 |  r  |115 | s   |116 |  t  | 117 |  u  |118 |  v  | 119 |  w  |
| 120 | x  | 121 | y  | 122 |  z  |123 | {   |124 |  |  | 125 |  }  |126 |  ~  | 127 | del |


#### Integers
#### Floating Point Numbers


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
