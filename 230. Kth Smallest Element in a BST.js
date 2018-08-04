/*
Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.

Note: 
You may assume k is always valid, 1 ≤ k ≤ BST's total elements.

Example 1:

Input: root = [3,1,4,null,2], k = 1
   3
  / \
 1   4
  \
   2
Output: 1
Example 2:

Input: root = [5,3,6,2,4,null,null,1], k = 3
       5
      / \
     3   6
    / \
   2   4
  /
 1
Output: 3
Follow up:
What if the BST is modified (insert/delete operations) often and you need to find the kth smallest frequently? How would you optimize the kthSmallest routine?
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    var count = countNodes(root.left);
    if(k<=count){
        return kthSmallest(root.left, k);
    }
    else if(k>count+1){
        return kthSmallest(root.right, k-1-count);
    }
    return root.val;
    
    
    function countNodes(node){
        if(node === null){
            return 0;
        }
        return 1 + countNodes(node.left) + countNodes(node.right);
    }
};

//tags: Amazon, Facebook, Microsoft, Bloomberg, Google, Uber
