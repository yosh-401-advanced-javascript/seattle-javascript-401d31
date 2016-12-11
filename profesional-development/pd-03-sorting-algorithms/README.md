Code 401JS -- PD03 Sorting Algorythms 
================================

# Sorting Algorythm Resouces
* Watch [15 sorting algorythm visualizations]
* Watch [sorting algorythm visualization comparison]

# Learning Objectives
* The students will be able to explaian different aproches to sorting data
* The students will be able to idntify common sorting algorythms
* The students will be able to refactor impertive code to recursive code, and vice versa

# Overview
Generaly when implementing a sorting alogorithm its easier to solve for one that does not have a comparision callback. Once the algorithm works, you can refactor a comparison callback into the implemention with very few changes.

* [quick sort]
 1. Find a pivot point in the array. The pivot will be used for comparison
 2. Set pointers to the begining and end of the array
 3. While the value at the left pointer is less than the pivot move the pointer right
 4. While the value at the right pointer is greater than the pivot move the pointer left
 5. If the left pointer is greater than or equal to the right pointer swap thier values
 6. After a swap move the left pointer right and right pointer left
 7. If the left and right pointer dont meet start over

* [merge sort]
 1. Divide the unsorted array in to sublists, each containing 1 element
 2. Merge sublist to produce new sorted sublists until there is only 1 sublists

* [selection sort] 
 1. Set an index to the beginning of the array
 2. Set a minIndex to equal index
 3. Iterate across the whole list and keep track of position of the smallest value using minIndex
 4. If the min is not allready at position of the index pointer  swap the values at the position of the index and the position of the minIndex value
 5. Move the index pointer to the right 
 6. Incrament index and jump back to step two, repeat until index hits the end of the array 
* Other common sorting algorithms
 * [bubble sort]
 * [heap sort]
 * [insertion sort]
 * [shell sort]
 * [radix sort]

[15 sorting algorythm visualizations]: https:/www.youtube.com/watch?v=kPRA0W1kECg
[sorting algorythm visualization comparison]: https://www.youtube.com/watch?v=ZZuD6iUe3Pc
[quick sort]: https://en.wikipedia.org/wiki/Quicksort
[merge sort]: https://en.wikipedia.org/wiki/Merge_sort
[selection sort]: https://en.wikipedia.org/wiki/Selection_sort
[bubble sort]: https://en.wikipedia.org/wiki/Bubble_sort
[heap sort]: https://en.wikipedia.org/wiki/Heapsort
[insertion sort]: https://en.wikipedia.org/wiki/Insertion_sort
[shell sort]: https://en.wikipedia.org/wiki/Shellsort
[radix sort]: https://en.wikipedia.org/wiki/Radix_sort
