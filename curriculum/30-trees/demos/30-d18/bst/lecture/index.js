const BST = require('./bst')
const fs = require('fs')
let bst

let arr = [...Array(20).keys()]
arr.sort(() => .5 - Math.random()).map((n, i) => i === 0 ? bst = new BST(n) : bst.insert(new BST(n)))

let svg = bst.treeify()

fs.writeFile('./tree.html', svg, () => {})

// Contains()
console.log('#contains should be false', bst.contains(600))
console.log('#contains should be true', bst.contains(1))
console.log('#contains should be true', bst.contains(99))


console.log('balanced? ', bst.isBalanced())