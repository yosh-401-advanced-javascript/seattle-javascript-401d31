'use strict'

// write a function that sums all numbers from 1 to n
function sum(n) {
  let result = 0;

  for(let i = n; i > 0; i--) {
    result += i
  }

  return result
}

// recursively...
function sum(n) {
  if(!n) return 0
  return n + sum(n - 1)
}

// recursive arrow function!!
let sum = n => !n ? 0 : n + sum(n - 1)