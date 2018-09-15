/*
Given a binary tree, find the length of the longest consecutive sequence path.

The path refers to any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The longest consecutive path need to be from parent to child (cannot be the reverse).

Example 1:

Input:

   1
    \
     3
    / \
   2   4
        \
         5

Output: 3

Explanation: Longest consecutive sequence path is 3-4-5, so return 3.
Example 2:

Input:

   2
    \
     3
    / 
   2    
  / 
 1

Output: 2 

Explanation: Longest consecutive sequence path is 2-3, not 3-2-1, so return 2.
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
 * @return {number}
 */
var longestConsecutive = function(root) {
    if(!root){
        return 0;
    }
    var result = 0;
    helper(root, root.val, 1);       
    return result;
    
    function helper(node, pre, count){ 
        if(!node){
            return;
        }
        if(node.left){
            if(node.left.val===pre+1){
                helper(node.left, node.left.val, count+1);    
            }
            else{
                helper(node.left, node.left.val, 1);
            }
        }
        if(node.right){
            if(node.right.val===pre+1){
                helper(node.right, node.right.val, count+1);    
            }
            else{
                helper(node.right, node.right.val, 1);
            }
        }
        result = Math.max(result, count);
    }
};

//tags: Google, Facebook, Amazon
