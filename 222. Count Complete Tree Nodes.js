/*
Given a complete binary tree, count the number of nodes.

Note:

Definition of a complete binary tree from Wikipedia:
In a complete binary tree every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.

Example:

Input: 
    1
   / \
  2   3
 / \  /
4  5 6

Output: 6
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
var countNodes = function(root) {
    if(!root){ return 0; }
    var lh = 0, rh = 0;
    var lnode = root;
    var rnode = root;
    while(lnode){
        lh++;
        lnode = lnode.left;
    }
    while(rnode){
        rh++;
        rnode = rnode.right;
    }
    if( lh === rh ){
        return Math.pow(2, lh) - 1;
    }
    return 1+countNodes(root.left)+countNodes(root.right);
};

//tags: Google

