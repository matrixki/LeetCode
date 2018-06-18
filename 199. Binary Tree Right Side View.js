/*
Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

Example:

Input: [1,2,3,null,5,null,4]
Output: [1, 3, 4]
Explanation:

   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---
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
var rightSideView = function(root) {
    var result = [];
    findRightSide(root, result, 0);
    return result;
    
    function findRightSide(node, result, level){
        if(!node){
            return;
        }        
        if( level === result.length ){
            result.push(node.val);
        }
        findRightSide(node.right, result, level+1);
        findRightSide(node.left, result, level+1);
    }
};

//tags: Amazon
