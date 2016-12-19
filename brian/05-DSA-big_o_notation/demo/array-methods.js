'use strict';


// forEach has a big o notation of O(n)
// it will only run n times
function forEach(array, action) {
  for (var i=0; i < array.length; i++) {
    action(array[i]);
  };
};

// O(n)
function filter(array, test) {
  var passed = [];
  for (var i=0; i < array.length; i++) {
    if (test(array[i])) {
      passed.push(array[i]);
    };
  };
  return passed;
};

// O(n)
function map(array, transform) {
  var mapped = [];
  for (var i=0; i < array.length; i++) {
    mapped.push(transform(array[i]));
  };
  return mapped;
};

// O(n)
function reduce(array, combine, start) {
  var current = start;
  for (var i=0; i < array.length; i++) {
    current = combine(current, array[i]);
  };
  return current;
};
