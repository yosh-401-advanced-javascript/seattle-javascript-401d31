401JS -- Stacks and Queues
================================

# Stacks and Queues Resources
* Watch [stacks and queues]
* Skim [stack wiki] 
* Skim [queue wiki]

# Learning Objectives
* The students will be able to implement a stack
* The students will be able to identify use cases for a stack
* The students will be able to implement a queue
* The students will be able to identify use cases for a queue

# Overview
### Stack
* Stacks are a first in first out data structure
* To add a value to the top of the stack a `push` method is used
* To retrive and remove a value from the top of a stack a `pop` method is used
* Some stacks have a `peek` method that gets the value on top of the stack without removing it
* Stacks are used for ...
 * Implementing history with undo
 * Memory managment
 * Call stack managment

### Queue 
* Queues are a first in last out data structure
* to add a value to the end of the queue a `enqueue` method is used
* to retrive and remove a value from the begining of the queue a `dequeue` method is used
* Queues are used for ...
 * Event listeners
 * Request Responders
 * Ensuring code runs in a specific order

# Exercise
* Implent a Stack 
 * the push and pop methods should have an "O(1)" runtime
* Implement a Queue
 * the enqueue and dequeue methods should have an "O(1)" runtime
* write a function that uses a stack to reverse an array
* write a function to determine if a string is a palindrome
* write a function to determine if a string has matching brackets "{}[]()" "[()]{}"
 * the string can have characters that are not brackets


[stacks and queues]: https://www.youtube.com/watch?v=wjI1WNcIntg
[queue wiki]: https://en.wikipedia.org/wiki/Queue_(abstract_data_type)
[stack wiki]: https://en.wikipedia.org/wiki/Stack_(abstract_data_type)
