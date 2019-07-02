'use strict';

class List {
  constructor() {
    this.length = 0;
  }

  push(item) {
    if ( arguments.length === 1 ) {
      this[this.length++] = item;
    }
    return this.length;
  }

  pop() {
    if ( ! this.length ) { return undefined; }
    let item = this[this.length - 1];
    delete this[this.length - 1];
    this.length--;
    return item;
  }

  forEach(callback) {
    if ( this.length ) {
      for (let i = 0; i <= this.length - 1; i++) {
        callback(this[i], i);
      }
    }
  }

  map(callback) {
    if (!this.length) {
      return undefined;
    }
    let result = new List();
    for (let i = 0; i <= this.length - 1; i++) {
      result.push(callback(this[i], i));
    }
    return result;
  }

  /*

     let arr = [1,2,3,4]
     let evens = arr.filter( (val,idx) => {
        return !(val % 2);
     })

     10,000

   */

  filter(callback) {
    if ( ! this.length ) { return undefined; }
    let result = new List();
    for (let i = 0; i <= this.length - 1; i++) {
      if (callback(this[i])) {
        result.push(this[i]);
      }
    }
    return result;
  }

  /*
    arr.reduce( (acc,val,idx) => {
      acc['foo'] = val;
      return acc;
    }, {});
   */
  reduce(callback, state) {
    if ( ! this.length ) { return undefined; }
    for (let i = 0; i <= this.length - 1; i++) {
      state = callback(state,this[i], i);
    }
    return state;
  }

}

module.exports = List;
