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
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    if(!root){ return []; }
    var result = [];
    addNode(root, 0, [], sum);
    return result;
    
    function addNode(node, curr, currArr, sum){
        if( node.left === null && node.right === null ){
            if( node.val+curr === sum ){
                currArr.push(node.val);
                result.push(currArr);
            }
            else{
                return;
            }
        }  
        curr+=node.val;
        if( node.left !== null ){ 
            addNode( node.left, curr, currArr.concat([node.val]), sum );
        }
        if( node.right !== null ){
            addNode( node.right, curr, currArr.concat([node.val]), sum );
        }
    }
};

//tags: Bloomberg
