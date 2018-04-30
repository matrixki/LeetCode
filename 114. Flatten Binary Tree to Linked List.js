/*
Given a binary tree, flatten it to a linked list in-place.

For example, given the following tree:

    1
   / \
  2   5
 / \   \
3   4   6
The flattened tree should look like:

1
 \
  2
   \
    3
     \
      4
       \
        5
         \
          6
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
        
    goFlatten(root);
    
    function goFlatten(node){
        if(!node){ return; } 
        var leftTree = goFlatten(node.left);
        var rightTree = goFlatten(node.right);
        if(node.left){
            var temp = node.right;
            node.right = node.left;
            node.left = null;
            leftTree.right = temp;
        }
        
        if(rightTree){
            return rightTree;
        }
        if(leftTree){
            return leftTree;
        }
        return node;
    }

};

//tags: Microsoft
