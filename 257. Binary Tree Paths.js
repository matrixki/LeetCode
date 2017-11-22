/*
Given a binary tree, return all root-to-leaf paths.

For example, given the following binary tree:

   1
 /   \
2     3
 \
  5
All root-to-leaf paths are:

["1->2->5", "1->3"]
Credits:
Special thanks to @jianchao.li.fighter for adding this problem and creating all test cases.
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    var result = [];
    if(!root){
        return [];
    }
    
    traverseTree(root,"");
    return result;
    
    function traverseTree(node,str){
        if( node.left === null && node.right === null ){
            result.push( str+node.val );
        }
        else{
            if( node.left !== null ){
                traverseTree( node.left, str + node.val + '->' );
            }
            if( node.right !== null ){
                traverseTree( node.right, str + node.val + '->' );
            }
        }
    }
};

//tag: Google Facebook Apple