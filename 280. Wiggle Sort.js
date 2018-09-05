/*
Given an unsorted array nums, reorder it in-place such that nums[0] <= nums[1] >= nums[2] <= nums[3]....

Example:

Input: nums = [3,5,2,1,6,4]
Output: One possible answer is [3,5,1,6,2,4]
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
    for(var i=1, len=nums.length;i<len;i++){
        if(i%2===1){
            if(nums[i-1]>nums[i]){
                //es6 swap
                [nums[i-1], nums[i]] = [nums[i], nums[i-1]];                
            }
        }
        else if( nums[i-1]<nums[i] ){
            //es6 swap
            [nums[i-1], nums[i]] = [nums[i], nums[i-1]];
        }
    }
};

//tags: Microsoft, Google, Facebook
