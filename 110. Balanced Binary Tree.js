/*
Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.
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
 * @return {boolean}
 */
var isBalanced = function(root) {
  
    if( !root || ( !root.left && !root.right ) ){
        return true;
    }
    
    let dl = maxDepth(root.left);
    let dr = maxDepth(root.right);
    
    let heightBalanced = Math.abs(dl-dr) <= 1;
    
    return heightBalanced && isBalanced(root.left) && isBalanced(root.right);
    
    function maxDepth(node){
        if(!node) return 0;
        let lc = 1, rc = 1;
        if(node.left){
            lc += maxDepth(node.left);
        }
        if(node.right){
            rc += maxDepth(node.right);
        }
        return Math.max(lc, rc);
    }
};