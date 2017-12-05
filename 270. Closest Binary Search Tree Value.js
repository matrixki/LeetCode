/*
Given a non-empty binary search tree and a target value, find the value in the BST that is closest to the target.

Note:
Given target value is a floating point.
You are guaranteed to have only one unique value in the BST that is closest to the target.
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
 * @param {number} target
 * @return {number}
 */
var closestValue = function(root, target) {
    var result = root.val;
    var min = Number.MAX_SAFE_INTEGER;
    while( root ){
        if( Math.abs( root.val - target ) < min ){
            min = Math.abs( root.val - target );
            result = root.val;
        } 
        if( root.val < target ){
            root = root.right;
        }
        else if( root.val > target ){
            root = root.left;
        }
        else{
            return root.val;
        }
    }   
    return result;
};

//tags: Google, Microsoft, Snapchat