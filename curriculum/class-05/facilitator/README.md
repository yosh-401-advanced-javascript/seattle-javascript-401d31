# Facilitators Guide: Block 1 DSA & Design

At the end of this Block the students are presented with 3 assignments:

* End of Block "Project": Bitmap Transformer
  * 25 Points
  * Paired
  * Due prior to the start of the next Block
* Design Challenge
  * 10 Points
  * Due prior to the end of the next Block
* Data Structure Implementation: Linked Lists
  * 10 Points
  * Due prior to the start of the next class
    * Will be used in subsequent code challenges


## Preparation

We're going to cover 3 topics today, beginning with looking harder at buffers and code-reviewing the previous lab. This will set them up well for the big end of block project.  We introduce SASS as a design architecture and close out with our first Data Structure - Linked Lists.

As noted, students will have 3 assignments from this class, so prep them for some time management and goals setting.

* Understand the history and use cases for Linked Lists.
* Inevitably, you'll be asked "why" they exist and "when" you'd use them in the real world
* Get good at SASS, especially in making up rules on the fly. Once students see it compiling in real time at sassmeister.com, they'll have many "can you do xyz?" questions for you. Be ready to riff.

## Lecture Main Topics & Overall Flow

### Buffers (continued)
  * Continue from the previous class, where we talked about buffers in general.
  * Code review is going to really help the students understand how binary is used.
  * Do a demo of of bitmap, where you simply read a file and then iterate the buffer, mapping the header from the spec.  
  * Teach them how to read doc!
  
### SASS
  * CSS doesn't have to suck!
  * We have variables and functions
  * We can write CSS that matches markup structure
  * @import and @include make sense!
  
### Linked Lists
  * Why are they a thing?
  * Arrays are hard to "grow"
  * No need for contiguous memory
  * Multiple things can point to a single node
  * It's all about the `.next`
  * `head` and `tail`
  * `while current.next` is the most basic traversal
  * Mention and demo the "tortoise" and "hare" as a cool way to solve linked list questions.


## What bugs, issues, or surprises have come up in the past for this class?

## General Comments and Notes
