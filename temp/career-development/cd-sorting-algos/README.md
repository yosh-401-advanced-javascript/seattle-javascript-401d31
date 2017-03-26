401JS -- Sorting Algorithms 
================================

# Sorting Algorithm Resouces
* Watch [15 sorting algorithm visualizations]
<!---Duncan, this link doesn't appear to be working for some reason, but it works when I copy/paste the YouTube link in my browswer? Not sure why it won't work. ~ Judy -->
* Watch [sorting algorithm visualization comparison]

# Learning Objectives
* The students will be able to explain different aproaches to sorting data
* The students will be able to identify common sorting algorithms
* The students will be able to refactor imperative code to recursive code, and vice versa

# Overview
Generally when implementing a sorting alogorithm, it's easier to solve for one that does not have a comparision callback. Once the algorithm works, you can refactor a comparison callback into the implemention with very few changes.

* [quick sort]
 1. Find a pivot point in the array. The pivot will be used for comparison
 2. Set pointers to the begining and end of the array
 3. While the value at the left pointer is less than the pivot move the pointer right
 4. While the value at the right pointer is greater than the pivot move the pointer left
 5. If the left pointer is greater than or equal to the right pointer swap their values
 6. After a swap, move the left pointer right and right pointer left
 7. If the left and right pointer dont meet, start over

* [merge sort]
 1. Divide the unsorted array in to sublists, each containing 1 element
 2. Merge sublist to produce new sorted sublists until there is only 1 sublist

* [selection sort] 
 1. Set an index to the beginning of the array
 2. Set a minIndex to equal index
 3. Iterate across the whole list and keep track of position of the smallest value using minIndex
 4. If the min is not already at position of the index pointer, swap the values at the position of the index and the position of the minIndex value
 5. Move the index pointer to the right 
 6. Increment index and jump back to step two, repeat until index hits the end of the array 
* Other common sorting algorithms
 * [bubble sort]
 * [heap sort]
 * [insertion sort]
 * [shell sort]
 * [radix sort]
 
 # Exercise
* read the wiki on insertion sort and implement it
* refactor the quicksort algorithm to use loops instead of recursion
* refactor the selection sort to use recursion instead of loops

[15 sorting algorithm visualizations]: https:/www.youtube.com/watch?v=kPRA0W1kECg
[sorting algorithm visualization comparison]: https://www.youtube.com/watch?v=ZZuD6iUe3Pc
[quick sort]: https://en.wikipedia.org/wiki/Quicksort
[merge sort]: https://en.wikipedia.org/wiki/Merge_sort
[selection sort]: https://en.wikipedia.org/wiki/Selection_sort
[bubble sort]: https://en.wikipedia.org/wiki/Bubble_sort
[heap sort]: https://en.wikipedia.org/wiki/Heapsort
[insertion sort]: https://en.wikipedia.org/wiki/Insertion_sort
[shell sort]: https://en.wikipedia.org/wiki/Shellsort
[radix sort]: https://en.wikipedia.org/wiki/Radix_sort
