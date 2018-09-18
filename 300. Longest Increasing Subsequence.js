/*
Given an unsorted array of integers, find the length of longest increasing subsequence.

Example:

Input: [10,9,2,5,3,7,101,18]
Output: 4 
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4. 
Note:

There may be more than one LIS combination, it is only necessary for you to return the length.
Your algorithm should run in O(n2) complexity.
Follow up: Could you improve it to O(n log n) time complexity?
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    if(nums.length<1){
        return 0;
    }
    let len = nums.length;
    let dp = [];
    dp.length = len;
    dp.fill(1);
    let result = 1;
    for(let i=1;i<len;i++){
        for(let j=0;j<i;j++){
            if(nums[i]>nums[j]){
                if( dp[j]+1>dp[i] ){
                    dp[i] = dp[j]+1;
                }
            }
        }
    }
    for(var i=0;i<len;i++){
        result = Math.max(result, dp[i]);
    }
    return result;

};

//tags: Facebook, Amazon, Google, VMware, Microsoft, Apple, Salesforce
