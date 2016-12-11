'use strict';


function quicksort(items){
  var index;
  if (items.length > 1){
    items = _quicksort(items, 0, items.length-1);
  }

  return items;
}

function _quicksort(items, left, right){
    let index = partition(items, left, right);
    console.log('index', index, '\n');
    console.log('qs left', left)
    console.log('qs right', right)

    if (left < index - 1){
      console.log('small side');
      _quicksort(items, left, index -1);
    }

    if(index < right){
      console.log('big side');
      _quicksort(items, index, right);
    }
    
    return items;
}

console.log('partition', partition([2,3,5,7,2,4], 0, 5));

function partition(items, left, right) {
  var pivot = items[Math.floor((right + left) / 2)];
  console.log('items', items);
  console.log('pivot', pivot);
  console.log('left', left);  
  console.log('right', right, '\n');
  // advance left index to the right as log as its value is less than the pivot
  left = advanceLeftIndex(items, left, pivot);

  // advance right index to the left as log as its value is greater than the pivot
  right = advanceRightIndex(items, right, pivot)

  if (left <= right) {
    swap(items, left, right);
    return partition(items, left +1, right -1);
  }

  return left;

}

function advanceLeftIndex(items, index, pivot){
  if (items[index] < pivot) return advanceLeftIndex(items, index + 1, pivot);
  return index;
}

function advanceRightIndex(items, index, pivot){
  if (items[index] > pivot) return advanceLeftIndex(items, index - 1, pivot);
  return index;
}

function swap(items, firstIndex, secondIndex){
  // you can make this functional by returning a copy of the array 
  let temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
}

let ascending = (a, b) => a > b ? true: false;
let descending = (a, b) => a < b ? true: false;

//console.log([3,1,6,23,4,1].sort(ascending))
//
//let unsorted = [12,3,53,4,63,6,2,34];
//console.log(quicksort([9,3,4,2,5,7]));
console.log(quicksort([2,3,9,32,8,100,5,7,4]));
