Code 401JS -- PD02 Sorting Algorythms 
================================

# Sorting Algorythm Resouces
* Watch [15 sorting algorythm visualizations]
* Watch [sorting algorythm visualization comparison]
* 

# Overview
* [quick sort]
 1. Find a pivot point in the array. The pivot will be used for comparison
 2. set pointers to the begining and end of the array
 3. While the value at the left pointer is less than the pivot move the pointer right
 4. While the value at the right pointer is greater than the pivot move the pointer left
 5. If the left pointer is greater than or equal to the right pointer swap thier values
 6. After a swap move the left pointer right and right pointer left
 7. If the left and right pointer dont meet start over

* [merge sort]
 1. Divide the unsorted array in to sublists, each containing 1 element
 2. Merge sublist to produce new sorted sublists until there is only 1 sublists

* [selection sort] 
 1. set an index to the beginning of the array
 2. set a minIndex to equal index
 3. iterate across the whole list and keep track of position of the smallest value using minIndex
 4. if the min is not allready at position of the index pointer  swap the values at the position of the index and the position of the minIndex value
 5. move the index pointer to the right 
 6. incrament index and jump back to step two, repeat until index hits the end of the array 

[15 sorting algorythm visualizations]: https:/www.youtube.com/watch?v=kPRA0W1kECg
[sorting algorythm visualization comparison]: https://www.youtube.com/watch?v=ZZuD6iUe3Pc
[quick sort]: https://en.wikipedia.org/wiki/Quicksort
[merge sort]: https://en.wikipedia.org/wiki/Merge_sort
[selection sort]: https://en.wikipedia.org/wiki/Selection_sort
