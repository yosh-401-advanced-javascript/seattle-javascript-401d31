401 JS -- class 04 Event Emitters, Promises, and Bitmaps
===

## Event Emitter Resources
* [events api docs]

## Promise Resources
* Watch [async javascript with javascript]
* Watch [functional programming in javascript]
* Read [es6 promises]

## Bitmap Resources
* [bitmap file format]
* [node buffer api docs]

## Learning Objectives
<!-- unordered list of learning objectives --> 

## Overview
#### overivew sub topic 

#### Binary 
* you've probably heard that all things in the computer are just a bunch of zeros and ones
 * its true :)
* since zeros and ones mean almost nothing to humans we have created rules to convert them in to meaningful infromation
* Integers, floating point numbers, characters are some of the basic things we can turn zeros and ones into
* the process for taking an integer, float, character, or ect. and turning them into zeros and one is called encoding
* the process for taking zeros and ones and turning them into an integer, float, character, or ect. is called decoding
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
* binary works alot like decimal 
 * decimal is also called base 10
 * binary is also called base 2 
 * if you take each digit multipy it times its base to the power of its place, you get its value
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
* to convert to floating points is a little takes the binary to decmial idea and uses it with scientific notation
* to convert to text there is an encoding called ascii which maps all characters to a coresponding number
 * run the command `man ascii` in your command line to see a chart

<!--links -->
[events api docs]: https://nodejs.org/api/events.html
[async javascript with javascript]: https://www.youtube.com/watch?v=g90irqWEqd8
[functional programming in javascript]: https://www.youtube.com/watch?v=2d7s3spWAzo
[es6 promises]: https://medium.com/ecmascript-2015/es6-promises-9ca8d8b4aca6#.x683hhcy5
[bitmap file format]: https://en.wikipedia.org/wiki/BMP_file_format
[node buffer api docs]: https://nodejs.org/api/buffer.html
