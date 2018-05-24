/*
Given a binary tree, return the preorder traversal of its nodes' values.

Example:

Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [1,2,3]
Follow up: Recursive solution is trivial, could you do it iteratively?
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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    var result = [];
    if(!root){ return result; }
    var stack = [];
    
    while(root !== null || stack.length>0){
        if(root !== null ){
            stack.push(root);
            result.push(root.val);
            root = root.left;
        }    
        else{
            root = stack.pop();
            root = root.right;
        }
    }
    return result;
};
