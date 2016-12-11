'use strict';

//quick sort 


function quicksort(items, left, right){
   left = left || 0;  
   right = right || items.length -1;

  // TODO: uncomment this to see how the partitioning works
  //console.log(items.slice(left, right));

  if (items.length > 1){
    // partition returns the position to the right of the last pivot
    // which is one right of half of the current partition
    var index = partition(items, left, right);

    // sort the left side of the pivot if not yet sorted
    if (left < index -1){
      quicksort(items, left, index -1);
    }

    // sort the right side of the pivot if not yet sorted
    if (index < right){
      quicksort(items, index, right);
    }
    
  }

  return items;
}

function swap(items, left, right){
  //TODO: comment out to watch the swapping in action
  //console.log('swaping', items[left], items[right]);
  let tmp = items[left];
  items[left] = items[right];
  items[right] = tmp;
}

function partition(items, left, right, pivot){
  // only reset the pivot if the current partition has not yet
  // found a pivot
  pivot = pivot || items[Math.floor((left + right) / 2)];
  //TODO: uncomment this to see the pivot point
  //console.log('pivot', pivot); 

  // continue swaping around the pivot until all items on 
  // left of the pivot are less than the pivot and all items
  // on the right of the pivot are greater than the pivot
  if (left <= right){ // go until the right side 

    // advance the left index to the right as long as its value is 
    // smaller than the pivot
    left = advanceLeft(items, left, pivot);

    // advance the right index to the left as long as its value is 
    // greater than the pivot
    right = advanceRight(items, right, pivot);
    
    if (left <= right){
      if (left < right) {
        // swap the items around the pivot
        swap(items, left, right);
      }
      return partition(items, left + 1, right - 1, pivot);
    }
  }

  // if the left index is greater than the right 
  // there can be no more sorting around the pivot
  return left;
}

function advanceLeft(items, left, pivot){
  if (items[left] < pivot)
    return advanceLeft(items, left + 1, pivot);
  return left;
}

function advanceRight (items, right, pivot){
  if (items[right] > pivot)
    return advanceRight(items, right -1, pivot);
  return right;
}

console.log(quicksort([23,3,5,1,55,38,49,200,432,1, 352]));
