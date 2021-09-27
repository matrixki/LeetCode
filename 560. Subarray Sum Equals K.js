/*

Given an array of integers nums and an integer k, return the total number of continuous subarrays whose sum equals to k.

 

Example 1:

Input: nums = [1,1,1], k = 2
Output: 2
Example 2:

Input: nums = [1,2,3], k = 3
Output: 2
 

Constraints:

1 <= nums.length <= 2 * 104
-1000 <= nums[i] <= 1000
-107 <= k <= 107

tags: Facebook, Amazon, Microsoft, Google, Yandex, LinkedIn, Oracle, ByteDance, Quora, Tesla, Apple, Cisco, Twilio, Walmart Labs, Yahoo, ServiceNow, JPMorgan, Paypal

*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var subarraySum = function(nums, k) {
    let lookup = new Map();
    let sum = 0, count = 0;
    lookup.set(0, 1);
    for(let i=0;i<nums.length;i++){
        sum += nums[i];
        if(lookup.has(sum-k)){
            count += lookup.get(sum-k);
        }
        lookup.set(sum, lookup.get(sum)+1 || 1);
    }
    return count;
};