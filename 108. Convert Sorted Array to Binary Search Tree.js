/*
Given an array where elements are sorted in ascending order, convert it to a height balanced BST.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    
    return setTree(nums, 0, nums.length-1);
    
    function setTree(arr, start, end){
        if( start > end ) return null;
        let mid = Math.floor( (start+end) / 2 );
        let tnode = new TreeNode( nums[mid] );
        tnode.left = setTree(arr, start, mid-1);
        tnode.right = setTree(arr, mid+1, end);
        return tnode;
    }    
};