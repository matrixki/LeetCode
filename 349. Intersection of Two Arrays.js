/*
Given two arrays, write a function to compute their intersection.

Example:
Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].

Note:
Each element in the result must be unique.
The result can be in any order.
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let nums1Map = new Set(nums1);
    let result = new Set();
    nums2.forEach(item => {
        if(nums1Map.has(item)){
            result.add(item)
        }
    })
    return [...result]; 
};

//tags: Amazon, LinkedIn, Google, Bloomberg, Apple, Microsoft