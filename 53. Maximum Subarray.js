/*
Find the contiguous subarray within an array (containing at least one number) which has the largest sum.

For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
the contiguous subarray [4,-1,2,1] has the largest sum = 6.

click to show more practice.

More practice:
If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (nums.length === 1) { return nums[0]; }
    let lookup = [nums[0]], result = nums[0];
    for (let i=1;i<nums.length;i++) {
        const temp = nums[i]+lookup[i-1];
        lookup[i] = Math.max(temp, nums[i]);
        result = Math.max(result, lookup[i]);
    }
    return result;
};

//tags: Apple, Microsoft, Google, Linkedin, Facebook, Amazon, Bloomberg, SAP, JPMorgan, Adobe, Uber, Alibaba, Two Sigma, Yahoo, Oracle, Capital One, Zillow, Cisco