/*

Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
 

Constraints:

1 <= nums.length <= 105
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.
 

Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

tags: Facebook, Amazon, Bloomberg, Microsoft, Uber, Apple, Google, Snapchat, VMware, Oracle, ByteDance, Adobe, LinkedIn, Walmart Labs, HBO, Cashfree

*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var topKFrequent = function(nums, k) {
    let lookup = {};
    for(let i=0;i<nums.length;i++){
        lookup[nums[i]] = lookup[nums[i]] ? lookup[nums[i]]+1 : 1;
    }
    const arr = Object.entries(lookup).sort((a, b)=>{
        return b[1]-a[1];
    });
    let result = [];
    arr.slice(0, k).map((item)=>{
        result.push(parseInt(item[0]));
    });
    return result;
};