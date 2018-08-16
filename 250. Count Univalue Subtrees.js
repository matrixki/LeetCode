/*
Given a binary tree, count the number of uni-value subtrees.

A Uni-value subtree means all nodes of the subtree have the same value.

Example :

Input:  root = [5,1,5,5,5,null,5]

              5
             / \
            1   5
           / \   \
          5   5   5

Output: 4

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
var countUnivalSubtrees = function(root) {
    var result = 0;
    dfs(root);
    return result;
    
    function dfs(node){
        if(node===null){
            return true;
        }    
        var left = dfs(node.left);
        var right = dfs(node.right);
        
        if(left&&right){
            if(node.left!==null&&node.left.val!==node.val){
                return false;
            }
            if(node.right!==null&&node.right.val!==node.val){
                return false;
            }
            result++;
            return true;
        }
        return false;
    }    
};

//tags: Google
