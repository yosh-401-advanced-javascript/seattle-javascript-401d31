let sortAlphabetically = list => list.slice().sort((a, b) => a.toLowerCase() > b.toLowerCase());
let names = ['Glorb', 'slorb', 'Jlorb', 'clorb'];

// this line should be very readable as long as you pay attention to the function name
let sorted = sortAlphabetically(['Glorb', 'slorb', 'Jlorb', 'clorb'])
// sorted is now a sorted copy of names
// names has not been mutated (i.e. no side effect!)
