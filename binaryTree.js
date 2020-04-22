/**
 * Binary Tree Exercise
 *
 * Given a binary tree, similar to shape as below, write an algorithm
 * to count the number of times each `value` appears.
 * 
 * 
 * Assumptions:
 * 
 * 1. each node will have a `value` prop
 * 2. each node may or may not have a `left` prop
 * 3. each node may or may not have a `right` prop
 * 
 * 
 * Expected output for the given tree:
 * 
 * { tacos: 3, salad: 2, pizza: 2 }
 */

const tree = {
  left: {
    right: {
      value: 'tacos'
    },
    value: 'salad'
  },
  right: {
    left: {
      left: {
        right: {
          value: 'pizza'
        },
        value: 'salad'
      },
      value: 'tacos'
    },
    value: 'pizza'
  },
  value: 'tacos'
};


/****
let's visualize a binary tree - each X is a 'value' node
    x
   / \
  x   x
 / \ 
x   x
****/

// build output object
const output = {
  tacos: 0,
  salad: 0,
  pizza: 0,
}

// recursive "depth-first" function to count value from each node
const countNextNode = (key, node) => {
  output[node.value]++

  if (key === 'right') {
    if (node.left) {
      return node.left ? countNextNode('left', node.left) : null
    } else {
      return node.right ? countNextNode('right', node.right) : null
    }
  }

  if (key === 'left') {
    if (node.right) {
      return node.right ? countNextNode('right', node.right) : null
    } else {
      return node.left ? countNextNode('left', node.left) : null
    }
  }
}

// get value from top node, then dive through the tree on each side
output[tree.value]++
countNextNode('left', tree.left)
countNextNode('right', tree.right)

// how did we do?
console.log('output:', output)
