/*
Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its bottom-up level order traversal as:
[
  [15,7],
  [9,20],
  [3]
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
var levelOrderBottom = function(root) {   
    if(!root){ return []; }
    var result = [];
    var treeMap = {};

    goDeeper(root, 0);
    for (var i in treeMap) {
        result.push(treeMap[i]);   
    }
    return result.reverse();
    
    function goDeeper(node, level){
        if(!node){ return false; }
        if( !treeMap[level] ){
            treeMap[level] = [node.val];
        }
        else{
            treeMap[level].push(node.val);
        }
        goDeeper(node.left, level+1);
        goDeeper(node.right, level+1);
    }
};