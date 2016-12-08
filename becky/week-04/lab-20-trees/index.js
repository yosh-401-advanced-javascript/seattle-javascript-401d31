'use strict';

const Tree = require('./lib/tree');


const coolTree = new Tree('1st value')
coolTree.top.addNodeWithValue('A');
coolTree.top.addNodeWithValue('B');
coolTree.top.children[0].addNodeWithValue('1st child of A');
coolTree.top.children[1].addNodeWithValue('1st child of B');
coolTree.top.children[1].children[0].addNodeWithValue('1');
coolTree.top.children[1].children[0].addNodeWithValue('2');
coolTree.top.children[1].children[0].addNodeWithValue('3');
coolTree.top.children[1].addNodeWithValue('2nd child of B');
coolTree.top.children[1].addNodeWithValue('3rd child of B');
coolTree.top.children[1].addNodeWithValue('4th child of B');
coolTree.depthFirstPrint()
