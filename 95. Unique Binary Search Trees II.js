/*
Given an integer n, generate all structurally unique BST's (binary search trees) that store values 1...n.

For example,
Given n = 3, your program should return all 5 unique BST's shown below.

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3
*/


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    if(n<1){ return []; }
    return generateBST(1,n);
    function generateBST(start,end){
        var result = [];
        if(start>end){
            result.push(null);
            return result;
        }
        for(var i=start;i<=end;i++){
            var leftTree = generateBST(start,i-1);
            var rightTree = generateBST(i+1, end);
            for(var j=0;j<leftTree.length;j++){
                for(var k=0;k<rightTree.length;k++){
                    var root = new TreeNode(i);
                    root.left = leftTree[j];
                    root.right  = rightTree[k];
                    result.push(root);
                }
            }
        }        
        return result;
    }
};

