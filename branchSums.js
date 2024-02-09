/*
Write a function that takes in a binary tree and returns a list of its branch sums ordered from
leftmost branch sum to rightmost branch sum.

A branch sum is the sum of all values in a Binary Tree branch.  A Binary Tree branch is a pth of
nodes in a tree that starts at the root node and ends at any leaf node.

sample input
tree =          1
            /       \
           2         3
          /  \      /  \
         4    5    6    7
        / \   /
       8   9 10

sample output:
   [15, 16, 18, 10, 11]
  where 15 = 1+2+4+8
        16 = 1+2+4+9
        18 = 1+2+5+10
        10 = 1+3+6
        11 = 1+3+7
*/

class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function branchSums(root) {
    currentSum = 0;
    currentNode = root;
    while (currentNode != null) {
        currentSum += currentNode.value;
    }
  }
  

  