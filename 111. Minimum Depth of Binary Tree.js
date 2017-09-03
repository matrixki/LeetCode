/*
Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
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
var minDepth = function(root) {
    
    if( !root ) return 0;
    if( !root.left && !root.right ){
        return 1;
    }
    else if(!root.left){
        return 1+minDepth(root.right);
    }
    else if(!root.right){
        return 1+minDepth(root.left);
    }    
    return 1+ Math.min(minDepth(root.left), minDepth(root.right));
};