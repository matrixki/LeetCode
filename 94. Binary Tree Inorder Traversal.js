/*
Given a binary tree, return the inorder traversal of its nodes' values.

For example:
Given binary tree [1,null,2,3],
   1
    \
     2
    /
   3
return [1,3,2].

Note: Recursive solution is trivial, could you do it iteratively?
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
var inorderTraversal = function(root) {
    var result = [];
    var stack = [];
    var node  = root;
    while( node !== null || stack.length>0 ){
        while(node!==null){
            stack.push(node);
            node = node.left;
        }
        node = stack.pop();
        result.push(node.val);
        node = node.right;
    }
    return result;
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let result = [];
    traverse(root, result);
    return result;
};

const traverse = (node, result) => {
    if(!node){ return; }
    traverse(node.left, result);
    result.push(node.val);
    traverse(node.right, result);
};


//tags: Microsoft, Facebook, Adobe, Amazon, Google, Uber, Alibaba

