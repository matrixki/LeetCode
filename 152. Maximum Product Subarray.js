/*
Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.

Example 1:

Input: [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
Example 2:

Input: [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    if(!nums){
        return 0;
    }
    var result = nums[0];
    var max = nums[0], min = nums[0];
    for(var i=1, len=nums.length;i<len;i++){
        var curr = nums[i];
        if(curr<0){
            var temp = min;
            min = max;
            max = temp;
        }
        max = Math.max( curr, max*curr );
        min = Math.min( curr, min*curr );
        result = Math.max( result, max );
    }
    return result;
};

//tags: Linkedin
