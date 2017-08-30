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
    if(!root){ return 0; }
    if(root && !root.left && !root.right ){ return 1; }
    
    return goDeeper(root);
    
    function goDeeper(node){
        if(!node){
            return 0;
        }
        let lc = 1, rc = 1;
        if(node.left){
            lc += goDeeper(node.left);
        }
        if(node.right){
            rc += goDeeper(node.right);
        }
        return Math.max(lc,rc);
    }  
};