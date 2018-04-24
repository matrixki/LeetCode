/*
Given preorder and inorder traversal of a tree, construct the binary tree.

Note:
You may assume that duplicates do not exist in the tree.

For example, given

preorder = [3,9,20,15,7]
inorder = [9,3,15,20,7]
Return the following binary tree:

    3
   / \
  9  20
    /  \
   15   7
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    
    return trace(preorder, inorder, 0, preorder.length-1, 0, inorder.length-1);
    
    function trace(preorder, inorder, preLeft, preRight, inLeft, inRight){
        if(preLeft>preRight){
           return null;
        }
        var node = new TreeNode( preorder[preLeft] );
        for( var i=inLeft;i<=inRight;i++ ){
            if( inorder[i] === preorder[preLeft] ){
                node.left = trace( preorder, inorder, preLeft+1, preLeft+(i-inLeft), inLeft, i-1 );
                node.right = trace( preorder, inorder, preLeft+(i-inLeft)+1, preRight, i+1, inRight );
            }
        }
        return node;
    }
};

//tags: Bloomberg
