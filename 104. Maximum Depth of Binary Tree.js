/*
Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
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
 * @return {number}
 */
var maxDepth = function(root) {
    if (!root) { return 0; }
    return traverse(root, 0);
};

const traverse = (node, depth) => {
    if (!node) { return depth; }
    return Math.max(traverse(node.left, depth+1), traverse(node.right, depth+1));
};

//tags: Apple, Google, Adobe 