/*
Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its bottom-up level order traversal as:
[
  [15,7],
  [9,20],
  [3]
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
var levelOrderBottom = function(root) {
    
    let result = [];
    if(!root){ return result; }
    helper(root, 0);
    return result;
    
    function helper(node, level){
        if(!node){
            return;
        }
        if(level===result.length){
            result.unshift([]);
        }
        if(node.left){
            helper(node.left, level+1);
        }
        if(node.right){
            helper(node.right, level+1);
        }
        result[result.length-level-1].push(node.val);
    }    
};

/* level-order traversal then reverse */
var levelOrderBottom = function(root) {
    
    let result = [];
    if(!root){ return result; }
    helper(root, 0);
    return result.reverse();
    
    function helper(node, level){
        if(!node){
            return;
        }
        if(!result[level]){
            result[level] = [];
        }
        result[level].push(node.val);
        if(node.left){
            helper(node.left, level+1);
        }
        if(node.right){
            helper(node.right, level+1);
        }
    }    
};

//tags: Facebook
