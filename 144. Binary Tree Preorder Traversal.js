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
    let result = [];
    if(!root){ return result; }
    let stack = [];
    while(root || stack.length>0){
        if(root){
            result.push(root.val);
            stack.push(root);
            root = root.left;
        }
        else{
            root = stack.pop();
            root = root.right;
        }
    }
    return result;
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    let result = [];
    traverse(root, result);
    return result;
};

const traverse = (node, result) => {
    if(!node){ return; }
    result.push(node.val);
    traverse(node.left, result);
    traverse(node.right, result);
};


//tags: Cisco, Google
