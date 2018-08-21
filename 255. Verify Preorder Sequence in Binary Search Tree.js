/*
Given an array of numbers, verify whether it is the correct preorder traversal sequence of a binary search tree.

You may assume each number in the sequence is unique.

Consider the following binary search tree: 

     5
    / \
   2   6
  / \
 1   3
Example 1:

Input: [5,2,6,1,3]
Output: false
Example 2:

Input: [5,2,1,3,6]
Output: true
Follow up:
Could you do it using only constant space complexity?


*/

/**
 * @param {number[]} preorder
 * @return {boolean}
 */
var verifyPreorder = function(preorder) {
    var min = Number.MIN_SAFE_INTEGER, pointer = -1;
    for(var i=0, len=preorder.length;i<len;i++){
        if(preorder[i]<min){
            return false;
        }
        while(pointer>=0 && preorder[i] > preorder[pointer]){
            min = preorder[pointer];
            pointer--;
        }
        pointer++;
        preorder[pointer] = preorder[i];
    }
    return true;
};

//tags: Linkedin, Facebook, Zenefits
