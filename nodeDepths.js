/*
The distance between a node in a binary tree and the tree's root is called the node's depth.
Write a function that takes in a binary tree and returns the sum of the nodes' depths.

sample input
tree =          1
            /       \
           2         3
          /  \      /  \
         4    5    6    7
        / \   /
       8   9 10

answer: 19 (1+1 + 2+2+2+2 + 3+3+3)
*/

function nodeDepths(root) {
    return helper(root, 0)
}

function helper(node, level) {
    if (!node) return 0;
    return level + helper(node.left, level+1) + helper(node.right, level+1);
}