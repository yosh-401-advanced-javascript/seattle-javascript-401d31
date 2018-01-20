'use strict'

const {LinkedList, ListNode} = require('../singly-linked-list');

describe('testing LinkedList', function(){
  test('new LinkedList should create a node', () => {
    let blue = new ListNode(4);
    expect(blue.value).toEqual(4);
    expect(blue.next).toEqual(null);

    let green = new ListNode(3, blue);
    expect(green.value).toEqual(3);
    expect(green.next).toEqual(blue);
    expect(green.next.value).toEqual(4);
  });

  test('list.fromArray should return a linked list', () => {
    let list = new LinkedList();
    list.fromArray([1,2,3,4])
    expect(list.root.value).toEqual(1)
    expect(list.root.next.value).toEqual(2)
    expect(list.root.next.next.value).toEqual(3)
    expect(list.root.next.next.next.value).toEqual(4)
  })

  test('append(value) should append node to empty list', () => {
    let list = new LinkedList();
    list.append(0);
    expect(list.root.value).toBe(0);
  });


  test('append(value) should append node to non-empty list', () => {
    let list = new LinkedList();
    list.append(0);
    list.append(3);
    list.append(4);
    expect(list.root.value).toEqual(0);
    expect(list.root.next.value).toEqual(3);
    expect(list.root.next.next.value).toEqual(4);
  });

  test('prepend(node) should node to empty list', () => {
    let list = new LinkedList();
    list.prepend(5)
    expect(list.root.value).toBe(5);
  });

  test('prepend(node) should node to non-empty list', () => {
    let list = new LinkedList();
    list.prepend(5)
    list.prepend(4)
    list.prepend(0)
    expect(list.root.value).toBe(0);
    expect(list.root.next.value).toBe(4);
    expect(list.root.next.next.value).toBe(5);
  });

  test('remove(value) should remove node from one-element list', () => {
    let list = new LinkedList()
    list.append(42);
    list.remove(42);
    expect(list.root).toBe(null)
  });

  test('remove(value) should remove node from front of list', () => {
    let list = new LinkedList();
    list.fromArray([0,1,2,3,4,5,6,7,8])
    list.remove(0);
    expect(list.root.value).toBe(1);
  });

  test('remove(value) should remove node from middle of list', () => {
    let list = new LinkedList();
    list.fromArray([0,1,2,3,4,5,6,7,8])
    list.remove(3);
    expect(list.root.next.next.value).toBe(2);
    expect(list.root.next.next.next.value).toBe(4);
  });

  test('remove(value) should remove node from end of list', () => {
    let list = new LinkedList();
    list.fromArray([0,1,2,3,4,5,6,7,8])
    list.remove(8);
    expect(list.root.next.next.next.next.next.next.next.value).toBe(7);
    expect(list.root.next.next.next.next.next.next.next.next).toBe(null);
  });

  // test('SLL.reverse(list) should reverse the list', () => {
  //   let list = SLL.fromArray([4, 5, 6]);
  //   let result = SLL.reverse(list);
  //   expect(result.value).toEqual(6);
  //   expect(result.next.value).toEqual(5);
  //   expect(result.next.next.value).toEqual(4);
  // });

  // test('list.reverse() should reverse the list', () => {
  //   let list = SLL.fromArray([4, 5, 6]);
  //   let result = list.reverse();
  //   expect(result.value).toEqual(6);
  //   expect(result.next.value).toEqual(5);
  //   expect(result.next.next.value).toEqual(4);
  // });

  test('getMiddle() should return middle node', () => {
    let list = (new LinkedList()).fromArray([4, 5, 6]);
    let middle = list.getMiddle();
    expect(middle.value).toEqual(5);

    list = (new LinkedList()).fromArray([3, 4, 5, 6]);
    middle = list.getMiddle();
    expect(middle.value).toEqual(5);
  });

  // test('list.getLast() should return last node', () => {
  //   let list = SLL.fromArray([3, 4, 5, 6]);
  //   let result = list.getLast();
  //   expect(result.value).toEqual(6);
  // });

  // test('SLL.getLast(list) should return last  node', () => {
  //   let list = SLL.fromArray([3, 4, 5, 6]);
  //   let result = SLL.getLast(list);
  //   expect(result.value).toEqual(6);
  // });

  // test('SLL.getSecondFromLast(list) should return second to last node', () => {
  //   let list = SLL.fromArray([3, 4, 5, 6]);
  //   let result = SLL.getSecondFromLast(list);
  //   expect(result.value).toEqual(5);
  // });

  // test('list.getSecondFromLast() should return second to last node', () => {
  //   let list = SLL.fromArray([3, 4, 5, 6]);
  //   let result = list.getSecondFromLast();
  //   expect(result.value).toEqual(5);
  // });

  // test('SLL.getThirdFromLast(list) should return third from lastnode', () => {
  //   let list = SLL.fromArray([3, 4, 5, 6]);
  //   let result = SLL.getThirdFromLast(list);
  //   expect(result.value).toEqual(4);
  // });

  // test('list.getThirdFromLast() should return third from last node', () => {
  //   let list = SLL.fromArray([3, 4, 5, 6]);
  //   let result = list.getThirdFromLast();
  //   expect(result.value).toEqual(4);
  // });

  // test('list.getNthFromLast() should return nth from last node', () => {
  //   let list = SLL.fromArray([3, 4, 5, 6]);
  //   let result = list.getNthFromLast(0);
  //   expect(result.value).toEqual(6);

  //   result = list.getNthFromLast(1);
  //   expect(result.value).toEqual(5);

  //   result = list.getNthFromLast(2)
  //   expect(result.value).toEqual(4);

  //   result = list.getNthFromLast(3)
  //   expect(result.value).toEqual(3);
  // });

  // test('SLL.getNthFromLast(list, n) should return nth from last node', () => {
  //   let list = SLL.fromArray([3, 4, 5, 6]);
  //   let result = SLL.getNthFromLast(list, 0)
  //   expect(result.value).toEqual(6);

  //   result = SLL.getNthFromLast(list, 1);
  //   expect(result.value).toEqual(5);

  //   result = SLL.getNthFromLast(list, 2);
  //   expect(result.value).toEqual(4);

  //   result = SLL.getNthFromLast(list, 3);
  //   expect(result.value).toEqual(3);
  // });

  // test('list.reduce(cb) should reduce list', () => {
  //   let list = SLL.fromArray([1,2,3]);
  //   let result = list.reduce((p, n) => p + n.value, 0);
  //   expect(result).toEqual(6);
  // });

  // test('list.map(doubler) should double a list', () => {
  //   let list = SLL.fromArray([1,2,3]);
  //   let result = list.map(n => n.value * 2);
  //   expect(result).toEqual(SLL.fromArray([2,4,6]));
  // });

  // test('list.filter(isEven) should filter out odd numbers', () => {
  //   let list = SLL.fromArray([1,2,3,4]);
  //   let result = list.filter(n => n.value % 2 === 0);
  //   expect(result).toEqual(SLL.fromArray([2,4]));
  // })

  // test('list.find(value) return fist node containg value', () => {
  //   let list = SLL.fromArray([1,2,3,2,1]);
  //   let result = list.find(2);
  //   expect(list.next).toEqual(result);
  //   result = result.next.find(2);
  //   expect(result).toEqual(list.getNthFromLast(1));
  // });

  // test('getNth shuold return the corect node', () => {
  //   let list = SLL.fromArray([1,2,3,4]);
  //   expect(list.getNth(0)).toEqual(list);
  //   expect(list.getNth(1)).toEqual(list.next);
  //   expect(list.getNth(2)).toEqual(list.next.next);
  //   expect(list.getNth(3)).toEqual(list.next.next.next);
  // });

  // test('getFirst getSecond and getThird', () => {
  //   let list = SLL.fromArray([1,2,3,4]);
  //   expect(list.getFirst()).toEqual(list);
  //   expect(list.getSecond()).toEqual(list.next);
  //   expect(list.getThird()).toEqual(list.next.next);
  // });
})
