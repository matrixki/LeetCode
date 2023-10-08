/*
Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note: The solution set must not contain duplicate triplets.

For example, given array S = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let result = [];
    nums.sort((a, b)=>{
        return a-b;
    }); // O(n*log(n))
    for (let i=0, len=nums.length;i<len-2;i++) { // two pointers: O(n*n)
        let left = i+1, right = len-1;
        while (left<right) {
            if ( nums[i] + nums[left] + nums[right] === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;
                while (nums[left] === nums[left-1]) { left++; }
                while (nums[right] === nums[right+1]) { right--; }
            } else if (nums[i] + nums[left] + nums[right] > 0) {
                right--;
            } else {
                left++;
            }
        }
        while (i<len-1 && nums[i] === nums[i+1]) {
            i++;
        }
    }
    return result;
};

//tags: facebook, Microsoft, ebay, Google, Uber, Adobe, Apple, Bloomberg, Microsoft, Walmart Labs, Alibaba, Baidu, Yahoo, Box, Quora, Indeed, Oracle
