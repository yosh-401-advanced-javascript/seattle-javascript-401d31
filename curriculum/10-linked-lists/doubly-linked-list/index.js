'use strict'; 

let DLL = module.exports =  function(value, next=null, prev=null){
  this.value = value;
  this.next = next;
  this.prev = prev;
}

DLL.append = (list, node) => {
  let _append = (list, node) => {
    if(!list.next){
      list.next = node;
      list.next.prev = list
      return list.next = node;
    }
    _append(list.next, node);
  };
  _append(list, node);
  return list;
};

DLL.prepend = (list, node) => {
  node.next = list;
  list.prev = node;
  return node;
};

DLL.remove = (list, node) => {
  if(list === node){
    node.next.prev = null
    return node.next;
  }

  let _remove = (list, node) => {
    if(list.next == node){
      list.next = list.next.next;
      list.next.prev = list
      return
    }
    _remove(list.next, node);
  };

  _remove(list, node);
  return list;
};

DLL.reverse = (list) => {
  let rest = list.next;
  let result = list;
  result.next = null;

  let _reverse = (list) => {
    let rest = list.next
    let temp = list 
    temp.next = null
    result = DLL.prepend(result, temp)
    if(rest) _reverse(rest)
  }

  _reverse(rest);
  return result;
}


DLL.findMiddle = (list) => {
  let slow = list;
  let fast = list;
  while(fast && fast.next){
    slow = slow.next;
    fast = fast.next.next
  }
  return slow
}

DLL.findNthFromLast = n => list => {
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
DLL.findLast = DLL.findNthFromLast(0)
DLL.findSecondFromLast = DLL.findNthFromLast(1)
DLL.findThirdFromLast = DLL.findNthFromLast(2)

// ALL ABOVE METHODS WILL ALSO BE prototype methods
DLL.prototype = Object.keys(DLL).reduce((methods, key) => {
  methods[key] = function(arg){ return DLL[key](this, arg) };
  return methods;
}, {})


// all below methods are factory methods on SLL

DLL.fromArray = items => {
  let reverse = items.reverse()
  return reverse.slice(1).reduce((p, n) => DLL.prepend(p, new DLL(n)), new DLL(reverse[0]))
}

