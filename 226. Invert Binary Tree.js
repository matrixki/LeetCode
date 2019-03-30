/*
Invert a binary tree.

     4
   /   \
  2     7
 / \   / \
1   3 6   9
to
     4
   /   \
  7     2
 / \   / \
9   6 3   1
Trivia:
This problem was inspired by this original tweet by Max Howell:
Google: 90% of our engineers use the software you wrote (Homebrew), but you can’t invert a binary tree on a whiteboard so fuck off.
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if( !root || (!root.left && !root.right) ){
        return root;
    }
    let tmp = root.left;
    root.left = invertTree(root.right);
    root.right = invertTree(tmp);
    return root;
};

// iterative with stack
var invertTree = function(root) {
    if(!root){
        return root;
    }
    let stack = [];
    stack.push(root);
    while(stack.length > 0){
        let node = stack.pop();
        console.log(node.left);
        let left = node.left;
        node.left = node.right;
        node.right = left;
        if(node.left){
            stack.push(node.left);
        }
        if(node.right){
            stack.push(node.right);
        }
    }
    return root;
};

//tags: Google, Bloomberg, Amazon, Facebook, Adobe
