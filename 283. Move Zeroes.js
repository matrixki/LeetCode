/*
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].

Note:
You must do this in-place without making a copy of the array.
Minimize the total number of operations.
Credits:
Special thanks to @jianchao.li.fighter for adding this problem and creating all test cases.
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let pointer = 0;
    for(let num of nums) {
        if (num !== 0) {
            nums[pointer++] = num;
        }
    }
    while(pointer<nums.length) {
        nums[pointer++] = 0;
    }
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let low = 0, high = low +1;
    while (high < nums.length) {
        if (nums[low] === 0) {
            if (nums[high] !== 0) {
                [nums[low], nums[high]] = [nums[high], nums[low]];
                low++;
            }
            high++;
        } else {
            low++;
            high++;
        }
    }
};

//tags: Facebook, Bloomberg