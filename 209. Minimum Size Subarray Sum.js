/*
Given an array of n positive integers and a positive integer s, find the minimal length of a contiguous subarray of which the sum ≥ s. If there isn't one, return 0 instead.

Example: 

Input: s = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: the subarray [4,3] has the minimal length under the problem constraint.
Follow up:
If you have figured out the O(n) solution, try coding another solution of which the time complexity is O(n log n). 

*/

/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    var min = Number.MAX_SAFE_INTEGER, sum = 0, pointer = 0;
    
    for(var i=0, len=nums.length;i<len;i++){
        sum += nums[i];
        while( sum>=s ){
            min = Math.min( min, i-pointer+1 );
            sum -= nums[pointer];
            pointer++;
        }
    }    
    return min === Number.MAX_SAFE_INTEGER ? 0 : min;
};

//tags: Facebook