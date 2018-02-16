# Class 04

## How do I prep for today?
Read (and have a solid layer of familiarity) with the Bitmap File Specification Wikipedia page.  Create a demo `.bmp` file reader, for your own study, and read, deconstruct, and manipulate parts of the `.bmp` file so that you can demonstrate and discuss with students during lecture.  You'll also be talking about the native `events` module so be sure to prepare demos (or use the demos found in this directory) for creating and emitting events.
 
## What changed from yesterday? 
We are now gathering user input from the command line (`process.argv`) and piping that into our applications. If you rebuild the previous lab in code review (optional), you may also want to include the usage of `beforeAll`, `beforeEach`, `afterAll`, or `afterEach` as part of your tests.  If you don't get the opportunity to demo these methods, be sure to show students the documentation and let them know that we'll be using them often in the very near future.  They may also went to use them for testing of their bitmap transformer project.

## What might students struggle with today? 
Students will struggle with how to get started on their bitmap transformer project, how to organize their directory structure, and how to understand the breakdown of a `.bmp` file.  You can point them in the right direction but do your best to push students to research and figure out much of this on their own and with their teammates.

## What bugs, issues, or surprises have come up in the past for this class?
Working with `Buffer`, modularizing code, and testing asynchronous behavior are a challenge at this stage of the course.  Be ready to assist students with these topics during lecture and in lab.

## General comments
It's easy to provide students with too much starting information as you help them understand the requirements of their bitmap transformer lab.  On the same note, it's also easy to *not* provide enough information.  You'll need to find a balance and **do not** build a demo in lecture that gives students an idea of how to capture and manipulate all parts of a `.bmp` file.  You may simply want to focus on reading in a `.bmp` from disk, and capturing basic information from the file header, such as the type of file and the size.  Anything much more detailed than that will cause them to have to research less, making this project not as effective as it could have been.
