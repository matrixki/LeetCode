/*
Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:
[
  [3],
  [9,20],
  [15,7]
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
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    var result = [];
    if(!root){ return []; }
    addNode(root,0);
    return result;
    
    function addNode(node, level){
        if(!node){ return; }
        // add value
        if(result[level] === undefined){
            result[level] = [];
        }
        result[level].push(node.val);
        // go left
        if(node.left!==null){
            addNode(node.left,level+1);
        }
        // go right
        if(node.right!==null){
            addNode(node.right,level+1);
        }
    }
};

//tags: Facebook, Microsoft, Amazon, Bloomberg, Linkedin, Apple
