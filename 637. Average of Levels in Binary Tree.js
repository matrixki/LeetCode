/*

Given the root of a binary tree, return the average value of the nodes on each level in the form of an array. Answers within 10-5 of the actual answer will be accepted.
 

Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: [3.00000,14.50000,11.00000]
Explanation: The average value of nodes on level 0 is 3, on level 1 is 14.5, and on level 2 is 11.
Hence return [3, 14.5, 11].
Example 2:


Input: root = [3,9,20,15,7]
Output: [3.00000,14.50000,11.00000]
 

Constraints:

The number of nodes in the tree is in the range [1, 104].
-231 <= Node.val <= 231 - 1

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
 * @param {TreeNode} root
 * @return {number[]}
 */
 var averageOfLevels = function(root) {
    let resultArray = [];
    function traverse(node, level){
        resultArray[level] = resultArray[level] ? resultArray[level] : [];
        resultArray[level].push(node.val);
        if(node.left){
            traverse(node.left, level+1);
        }
        if(node.right){
            traverse(node.right, level+1);
        }        
    }
    traverse(root, 0);
    let result = [];
    for(let i=0;i<resultArray.length;i++){
        const arr = resultArray[i];
        const sum = arr.reduce((prev, curr)=>{
            return prev+curr;
        });
        const val = sum / arr.length;
        result.push(val);
    }
    return result;
};