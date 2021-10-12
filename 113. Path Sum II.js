/*
Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.

Note: A leaf is a node with no children.

Example:

Given the below binary tree and sum = 22,

      5
     / \
    4   8
   /   / \
  11  13  4
 /  \    / \
7    2  5   1
Return:

[
   [5,4,11,2],
   [5,8,4,5]
]

tags: Amazon, Facebook, Microsoft

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
 var pathSum = function(root, targetSum) {
    if(!root){ return []; }
    let result = [];
    traverse(root, targetSum, []);
    return result;
    function traverse(node, sum, path){
        if(!node.left && !node.right){ 
            if(node.val === sum){
                path.push(node.val);
                result.push(path);
            }            
            return;
        }
        path.push(node.val);
        if(node.left){
            traverse(node.left, sum-node.val, [...path]);    
        }
        if(node.right){
            traverse(node.right, sum-node.val,[...path]);    
        }
    }
};

//tags: Bloomberg
