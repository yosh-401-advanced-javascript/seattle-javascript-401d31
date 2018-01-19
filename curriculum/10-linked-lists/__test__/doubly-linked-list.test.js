'use strict'

const DLL = require('../doubly-linked-list');

describe('testing singlyLinkedList', function(){
  it('new DLL should create a node', () => {
    let node = new DLL(4);
    expect(node.value).toEqual(4);
    expect(node.next).toEqual(null);

    let head = new DLL(3, node);
    expect(head.value).toEqual(3);
    expect(head.next).toEqual(node);
  });

  it('DLL.fromArray should return a linked list', () => {
    let head = DLL.fromArray([1,2,3,4])
    expect(head.next.prev).toEqual(head)
    expect(head.value).toEqual(1)
    expect(head.next.value).toEqual(2)
    expect(head.next.next.value).toEqual(3)
    expect(head.next.next.next.value).toEqual(4)
  })

  it('DLL.append(list, node, should append node to list', () => {
    let head = new DLL(0);
    DLL.append(head, new DLL(3));
    DLL.append(head, new DLL(4));
    expect(head.value).toEqual(0);
    expect(head.next.value).toEqual(3);
    expect(head.next.next.value).toEqual(4);
  });

  it('node.append(value), should append node to list', () => {
    let head = new DLL(0)
    head.append(new DLL(4)).append(new DLL(5))
    expect(head.value).toEqual(0)
    expect(head.next.value).toEqual(4)
    expect(head.next.next.value).toEqual(5)
  });

  it('DLL.prepend(list, node) should return a list with node as head', () => {
    let list = DLL.fromArray([0, 4, 5])
    let head = new DLL(-1);
    let result = DLL.prepend(list, head);
    expect(result.value).toEqual(-1);
    expect(result.next).toEqual(list);
    expect(result).toEqual(head);
  })

  it('list.prepend(node) should return a list with node as head', () => {
    let list = DLL.fromArray([0, 4, 5])
    let head = new DLL(-1);
    let result = list.prepend(head);
    expect(result.value).toEqual(-1);
    expect(result.next).toEqual(list);
    expect(result).toEqual(head);
  })

  it('DLL.remove(list, node) should remove a list with node as head', () => {
    let removeMe = new DLL('delete')
    let head = new DLL('head')

    DLL.append(head, removeMe)
    DLL.append(head, new DLL('first'))
    expect(head.value).toEqual('head')
    expect(head.next).toEqual(removeMe)

    DLL.remove(head, removeMe)
    expect(head.value).toEqual('head')
    expect(head.next.value).toEqual('first')
  });

  it('list.remove(node) should remove a list with node as head', () => {
    let removeMe = new DLL('delete')
    let head = new DLL('head')

    head.append(removeMe).append(new DLL('first'))
    expect(head.value).toEqual('head')
    expect(head.next).toEqual(removeMe)

    head.remove(removeMe)
    expect(head.value).toEqual('head')
    expect(head.next.value).toEqual('first')
  });

  it('DLL.reverse(list) should reverse the list', () => {
    let list = DLL.fromArray([4, 5, 6])
    let result = DLL.reverse(list)
    expect(result.value).toEqual(6)
    expect(result.next.value).toEqual(5)
    expect(result.next.next.value).toEqual(4)
  })

  it('list.reverse() should reverse the list', () => {
    let list = DLL.fromArray([4, 5, 6])
    let result = list.reverse()
    expect(result.value).toEqual(6)
    expect(result.next.value).toEqual(5)
    expect(result.next.next.value).toEqual(4)
  })

  it('DLL.findMiddle(list) should return middle node', () => {
    let list = DLL.fromArray([4, 5, 6])
    let middle = DLL.findMiddle(list)
    expect(middle.value).toEqual(5)

    list = DLL.fromArray([3, 4, 5, 6])
    middle = DLL.findMiddle(list)
    expect(middle.value).toEqual(5)
  });

  it('list.findMiddle() should return middle node', () => {
    let list = DLL.fromArray([4, 5, 6])
    let middle = list.findMiddle()
    expect(middle.value).toEqual(5)
    expect(middle.prev).toEqual(list)

    list = DLL.fromArray([3, 4, 5, 6])
    middle = list.findMiddle()
    expect(middle.value).toEqual(5)
    expect(middle.prev).toEqual(list.next)
  });

  it('list.findLast() should return last node', () => {
    let list = DLL.fromArray([3, 4, 5, 6]);
    let result = list.findLast();
    expect(result.value).toEqual(6);
  });

  it('DLL.findLast(list) should return last  node', () => {
    let list = DLL.fromArray([3, 4, 5, 6]);
    let result = DLL.findLast(list);
    expect(result.value).toEqual(6);
  });

  it('DLL.findSecondFromLast(list) should return second to last node', () => {
    let list = DLL.fromArray([3, 4, 5, 6]);
    let result = DLL.findSecondFromLast(list);
    expect(result.value).toEqual(5);
  });

  it('list.findSecondFromLast() should return second to last node', () => {
    let list = DLL.fromArray([3, 4, 5, 6]);
    let result = list.findSecondFromLast();
    expect(result.value).toEqual(5);
  });

  it('DLL.findThirdFromLast(list) should return third from lastnode', () => {
    let list = DLL.fromArray([3, 4, 5, 6]);
    let result = DLL.findThirdFromLast(list);
    expect(result.value).toEqual(4);
    expect(result.next.prev).toEqual(result)
  });

  it('list.findThirdFromLast() should return third from last node', () => {
    let list = DLL.fromArray([3, 4, 5, 6]);
    let result = list.findThirdFromLast();
    expect(result.value).toEqual(4);
  });
})
