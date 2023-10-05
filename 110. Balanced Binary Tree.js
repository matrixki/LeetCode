/*
Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    if (!root) { return true };
    return (Math.abs(traverse(root.left, 1) - traverse(root.right, 1)) <= 1) && isBalanced(root.left) && isBalanced(root.right);
};

const traverse = (node) => {
    if (!node) { return 0; }
    let leftCount = 1, rightCount = 1;
    if (node.left) {
        leftCount += traverse(node.left);
    }
    if (node.right) {
        rightCount += traverse(node.right);
    }
    return Math.max(leftCount, rightCount);
};
//tags: Google, Facebook
