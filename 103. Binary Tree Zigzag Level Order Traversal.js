/*
Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its zigzag level order traversal as:
[
  [3],
  [20,9],
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
var zigzagLevelOrder = function(root) {
    var result = [];
    if(!root){ return []; }
    addNode(root, 0, false);
    return result;
    
    function addNode(node, level, reverse){
        if(!node){ return; }
        // add value
        if(result[level] === undefined){
            result[level] = [];
        }
        if(reverse){
            result[level].unshift(node.val);
        }
        else{
            result[level].push(node.val);    
        }
        
        // go left
        if(node.left!==null){
            addNode(node.left,level+1, !reverse);
        }
        // go right
        if(node.right!==null){
            addNode(node.right,level+1, !reverse);
        }
    }
};

//tags: Microsoft, Bloomberg, Linkedin
