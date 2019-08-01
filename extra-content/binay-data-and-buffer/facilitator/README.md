# Facilitators Guide: Buffers

## Learning Objectives
**Students will be able to ...**

* describe binary data is encoded and decoded
* manipulate binary data using NodeJS Buffers
* use EventEmitters to manage asynchronous code

## Preparation
This is a big topic and one that can seem really daunting to students. For most of them, this is their first look at anything "Computer Science-y" -- make it fun and engaging. There are some quirky images in the repo that you can use to tell a few stories about the "old days" and why things are how they are.

Read the Bitmap File Specification Wikipedia page. For your own study, create a `.bmp` file reader and read, deconstruct, and manipulate parts of the `Buffer` so that you can demonstrate and discuss with students during lecture.

This is technically a 2-day sequence.

On Day 4 (This class), you'll introduce the concept of binary data, storage and using buffers. The lab that goes with this class is designed to get them practicing using buffers with "normal" (ascii) files.

On day 5, you will assign their first 'capstone' project, which is the bitmap transformer. Start to prep them for that work with this lecture, and feed them a bit of information that you can then augment in the prep session for the Bitmap project in class 05.

* Practice practice practice with Buffers
  * Create one
  * Change characters
  * Loop through it
  * Use the readUInt16LE, etc functions to target bits and bytes within it
* Practice counting with Binary.
  * Need to make that part of lecture look simple and smooth
* Understand the history of computing to help make these topics land with some good stories that make some sense.


## Lecture Main Topics & Overall Flow
* Show the "10 types of people" graphic to start out with a laugh. Assure them it'll make sense later.
* Why binary at all?
  * It's all about "voltage"
    * Early computers tried to do decimal, but it's impossible to measure voltage on a range of 1:10 in different machines, cities, etc.
    * Lots of debate and versions and incompatabilities, so they all got together ...
    * Binary is simple "on or off" which is universal
    * This is how all things are stored in memory and on disks.
  * How do we use it?
    * Real Life: The old card based computers (pictures and anecdotes)
    * Apollo Rockets (show console pic) were literally levers
    * ... So many great stories to tell here -- have some fun
    * Draw a memory grid and talk about how computers put bytes of information into slots -- literally a slot is either "on" or "off" with a value
    * So, what's in a byte of memory?
      * It's a way to represent letters and symbols
      * Today, we use the ASCII system to standardize
      * ... but before that, they argued about how to represent words and symbols
    * This is a good time for a defragging joke/example
  * So, how does it work?
    * Counting Demo (Images in the repo)
      * Decimal, you can go 0-9, and in 4 spots, you can count to 9999
      * Draw an odometer and show how when you hit 9, you "roll over" to zero and start at the next spot.
      * Binary, you can only go from 0 to 1, so that same odometer flips on every count.
        * In 4 digits the higest you can go is 1111 which is 15
      * Hex? It goes 0-f before it rolls over, and can therefore go to 64k
    * Represent numbers in base 10 and base 2
      * In base 10: 674 ...
        * 4x10^0 + 7*10^1 + 6*10^2
      * In base 2: 12 (1100)
        * 0*2^0 + 0*2^1 + 1*2^2 + 1*2^3
      * Another way is to list numbers (r-l) horizontally in base 2:
      ```
        128 64  32  16  8  4  2  1
         1   0   0   1  1  1  0  1
        157
      ```

## What bugs, issues, or surprises have come up in the past for this class?
Students will struggle with getting started on their bitmap transformer project. They may need assistance organizing their directory structure, and/or understanding the breakdown of a `.bmp` file.  You can point them in the right direction but do your best to have students research much of this on their own and with their teammates.

## General Comments and Notes
