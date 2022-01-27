/*

Given two binary search trees root1 and root2, return a list containing all the integers from both trees sorted in ascending order.

 

Example 1:


Input: root1 = [2,1,4], root2 = [1,0,3]
Output: [0,1,1,2,3,4]
Example 2:


Input: root1 = [1,null,8], root2 = [8,1]
Output: [1,1,8,8]
 

Constraints:

The number of nodes in each tree is in the range [0, 5000].
-105 <= Node.val <= 105

tags: Facebook

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
 var getAllElements = function(root1, root2) {
    let stack1 = [], stack2 = [], result = [];
    while(root1 !== null || root2 !== null || stack1.length>0 || stack2.length>0){
        while(root1!==null){
            stack1.push(root1);
            root1 = root1.left;
        }
        while(root2!==null){
            stack2.push(root2);
            root2 = root2.left;
        }
        
        if(stack2.length === 0 || (stack1.length > 0 && stack1[stack1.length-1].val <= stack2[stack2.length-1].val)){
            root1 = stack1.pop();
            result.push(root1.val);
            root1 = root1.right;
        }
        else{
            root2 = stack2.pop();
            result.push(root2.val);
            root2 = root2.right;
        }
    }
    return result;
};