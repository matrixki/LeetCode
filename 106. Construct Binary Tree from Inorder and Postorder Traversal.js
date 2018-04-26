/*
Given inorder and postorder traversal of a tree, construct the binary tree.

Note:
You may assume that duplicates do not exist in the tree.

For example, given

inorder = [9,3,15,20,7]
postorder = [9,15,7,20,3]
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    return trace( inorder, postorder, 0, inorder.length-1, 0, postorder.length-1 );
    function trace( inorder, postorder, inLeft, inRight, postLeft, postRight ){
        if(inLeft>inRight){ return null; }
        var node = new TreeNode( postorder[postRight] );
        
        for(var i=inLeft;i<=inRight;i++){
            if( inorder[i] === postorder[postRight] ){
                node.right = trace( inorder, postorder, i+1, inRight, postRight-(inRight-i), postRight-1);
                node.left = trace( inorder, postorder, inLeft, i-1, postLeft, postRight-(inRight-i)-1);
            }
        }
        return node;
    }
};

//tags: Microsoft
