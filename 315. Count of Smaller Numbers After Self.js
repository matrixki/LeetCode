/*

You are given an integer array nums and you have to return a new counts array. The counts array has the property where counts[i] is the number of smaller elements to the right of nums[i].

 

Example 1:

Input: nums = [5,2,6,1]
Output: [2,1,1,0]
Explanation:
To the right of 5 there are 2 smaller elements (2 and 1).
To the right of 2 there is only 1 smaller element (1).
To the right of 6 there is 1 smaller element (1).
To the right of 1 there is 0 smaller element.
Example 2:

Input: nums = [-1]
Output: [0]
Example 3:

Input: nums = [-1,-1]
Output: [0,0]
 

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104

tags: Amazon, Google, Apple, Uber, Microsoft, Sprinklr

*/

// below solution will get TLE on LeetCode test case but I fell it make more sense to come up during the interview process

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var countSmaller = function(nums) {
    let result = [];
    if(nums.length === 1){ return [0]; }
    let root = new TreeNode(nums[nums.length-1]);
    result.push(0);
    for(let i=nums.length-2;i>=0;i--){
        let count = insertNode(root, nums[i]);
        result.unshift(count);
    }
    return result;
};

function insertNode(root, val){
    let count = 0;
    while(true){
        if(val<=root.val){
            root.count++;
            if(!root.left){
                root.left = new TreeNode(val);
                break;
            }
            else{
                root = root.left;
            }
        }
        else{
            count += root.count;
            if(!root.right){
                root.right = new TreeNode(val);
                break;
            }
            else{
                root = root.right;
            }
        }
    }
    return count;
}

function TreeNode(val){
    this.val = val;
    this.count = 1;
    this.left = null;
    this.right = null;
}