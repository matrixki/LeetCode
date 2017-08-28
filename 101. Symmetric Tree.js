/*
Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

    1
   / \
  2   2
 / \ / \
3  4 4  3
But the following [1,2,2,null,3,null,3] is not:
    1
   / \
  2   2
   \   \
   3    3
Note:
Bonus points if you could solve it both recursively and iteratively.
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if(root === null || (root.left === null && root.right === null) ){
        return true;
    }
    
    root.right = invertTree(root.right);
    return isSameTree(root.left, root.right);
};


// from 226. invert binary tree
function invertTree(root) {
    if( root === null ) return root;    
    let temp  = root.left;
    root.left = invertTree(root.right);
    root.right = invertTree(temp);
    
    return root;
};
// from 100. same tree
function isSameTree(p, q){
    if( !p && !q ) return true;
    if( (p&&!q) || (!p&&q) ) return false;
    if( p.val !== q.val ) return false;
    
    return isSameTree(p.left, q.left)&&isSameTree(p.right, q.right);
}


// another way
var isSymmetric = function(root) {
    return checkLeftRight(root, root);
};

function checkLeftRight(p, q){
    if(p===null&&q===null) return true;
    if( (!p&&q) || (p&&!q) ) return false;
    
    return (p.val===q.val)&&checkLeftRight(p.left, q.right)&&checkLeftRight(p.right, q.left);
}
