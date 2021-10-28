/*
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    let left = 0, right = nums.length-1;
    while(left<right-1){
        let mid = left + Math.floor((right-left)/2);
        if(nums[left]<nums[mid]){
            // first half sorted
            if(nums[left]<=target && target <= nums[mid]){
                right = mid;
            }
            else{
                left = mid;
            }
        }
        else{
            // second half sorted
            if(nums[mid]<=target && target<=nums[right]){
                left = mid;
            }
            else{
                right = mid;
            }
        }
    }
    if(nums[left]===target){ return left; }
    if(nums[right]===target){ return right; }
    return -1;
};

//tags: Facebook, Microsoft, Bloomberg, Uber, Linkedin