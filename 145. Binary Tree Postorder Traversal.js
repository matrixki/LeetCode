/*
Given a binary tree, return the postorder traversal of its nodes' values.

Example:

Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [3,2,1]
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
var postorderTraversal = function(root) {
    let result = [];
    let stack = [];
    if(!root){ return result; }
    stack.push(root);
    while(stack.length>0){
        let node = stack.pop();
        result.unshift(node.val);
        if(node.left!==null){
            stack.push(node.left);
        }
        if(node.right!==null){
            stack.push(node.right);
        }
    }
    return result;
};

//tags: Facebook, Amazon
