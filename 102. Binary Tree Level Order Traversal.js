/*
Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:
[
  [3],
  [9,20],
  [15,7]
]
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let result = [];
    traverse(root, 0, result);
    return result;
};

const traverse = (node, level, result) => {
    if (!node) {return;}
    result[level] ? result[level].push(node.val) : result[level] = [node.val];
    traverse(node.left, level+1, result);
    traverse(node.right, level+1, result);
};

//tags: Facebook, Microsoft, Amazon, Bloomberg, Linkedin, Apple, Uber, Oracle, Walmart Labs
