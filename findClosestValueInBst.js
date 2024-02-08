/*
Write a function that takes in a Binary Search Tree and a target integer value and returns the closest
value to that target value contained in the BST.  Assume that there will only be one closest value.

Example
tree =      10
          /    \
         5      15
       /  \    /   \
       2   5  13    22
      /          \
     1            14

target = 12

answer = 13
*/

function findClosestValueInBst(tree, target) {
  currentNode = tree;
  currentMin = Math.abs(target - currentNode.value);
  while (currentNode != null) {
    if (Math.abs(currentNode.value - target) <= currentMin) {
      currentMin = Math.abs(currentNode.value - target);
      currentClosest = currentNode.value;
    }
    if (currentMin == 0) {
      break
    }
    if (currentNode.value < target) {
      currentNode = currentNode.right;
    }
    else {
      currentNode = currentNode.left;
    }
  }
  return currentClosest;
}

// This is the class of the input tree. Do not edit.
class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
}