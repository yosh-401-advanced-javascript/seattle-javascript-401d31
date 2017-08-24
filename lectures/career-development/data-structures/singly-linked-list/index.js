'use strict';

let SLL = module.exports = function(value, next=null){
  this.value = value;
  this.next = next;
}

SLL.append = (list, node) => {
  let _append = (list, node) => {
    if(!list.next)
      return list.next = node;
    _append(list.next, node);
  };
  _append(list, node);
  return list;
};

SLL.prepend = (list, node) => {
  node.next = list;
  return node;
};

SLL.remove = (list, node) => {
  if(list === node)
    return node.next;

  let _remove = (list, node) => {
    if(list.next == node)
      return list.next = list.next.next;
    _remove(list.next, node);
  };

  _remove(list, node);
  return list;
};

SLL.reduce = (list, cb, result) => {
  let i=0;
  let current = list
  while(current){
    result = cb(result, current, i++, list);
    current = current.next;
  }
  return result;
}

SLL.map = (list, cb) => {
  let result = SLL.reduce(list, (prev, curr, i , self) => {
    prev.append(new SLL(cb(curr, i, self)))
    return prev;
  }, new SLL())
  return result.next;
}

SLL.filter = (list, cb) => {
  let result = SLL.reduce(list, (prev, curr, i, self) => {
    if(cb(curr, i, self)) {
      prev.append(new SLL(curr.value));
    }
    return prev;
  }, new SLL())
  return result.next;
}

SLL.find = (list, value) => {
  let current = list;
  while(current){
    if(current.value === value)
      return current;
    current = current.next;
  }
}

SLL.reverse = (list) => {
  let rest = list.next;
  let result = list;
  result.next = null;

  let _reverse = (list) => {
    let rest = list.next
    let temp = list 
    temp.next = null
    result = SLL.prepend(result, temp)
    if(rest) _reverse(rest)
  }

  _reverse(rest);
  return result;
}

SLL.getMiddle = (list) => {
  let slow = list;
  let fast = list;
  while(fast && fast.next){
    slow = slow.next;
    fast = fast.next.next
  }
  return slow
}

let getNthFromLast = n => list => {
  var i;
  let result = list;
  let offset = list;
  for(i=0; i<n && offset.next; i++)
    offset = offset.next 
  while(offset.next){
    result = result.next;
    offset = offset.next
  }
  return result
}

SLL.getLast = getNthFromLast(0)
SLL.getSecondFromLast = getNthFromLast(1)
SLL.getThirdFromLast = getNthFromLast(2)
SLL.getNthFromLast = (list, n) => getNthFromLast(n)(list)

let getNth = n => list => {
   for(var result=list, i=0; i<n && result; i++, result=result.next);
   if(i===n && result) return result;
}

SLL.getFirst = getNth(0)
SLL.getSecond = getNth(1)
SLL.getThird = getNth(2)
SLL.getNth = (list, n) => getNth(n)(list)

// ALL ABOVE METHODS WILL ALSO BE prototype methods
SLL.prototype = Object.keys(SLL).reduce((methods, key) => {
  methods[key] = function(...args){ return SLL[key](this, ...args) };
  return methods;
}, {})

// all below methods are factory methods on SLL

SLL.fromArray = items => {
  return items.reverse().reduce((p, n) => SLL.prepend(p, new SLL(n)), null)
}

