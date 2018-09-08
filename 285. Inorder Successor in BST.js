/*
Given a binary search tree and a node in it, find the in-order successor of that node in the BST.

Note: If the given node has no in-order successor in the tree, return null.

Example 1:

Input: root = [2,1,3], p = 1

  2
 / \
1   3

Output: 2
Example 2:

Input: root = [5,3,6,2,4,null,null,1], p = 6

      5
     / \
    3   6
   / \
  2   4
 /   
1

Output: null
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
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var inorderSuccessor = function(root, p) {
    if(root===null){
        return null;
    }
    if(root.val>p.val){
        var left = inorderSuccessor(root.left, p);
        return left!==null ? left : root;        
    }
    else{
        return inorderSuccessor(root.right, p);
    }
};

//tags: Amazon, Google, Microsoft
