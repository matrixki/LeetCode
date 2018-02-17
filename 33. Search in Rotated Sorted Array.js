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
    var start = 0, end = nums.length -1;
    var mid;
    while( start < end-1 ){
        mid = start + Math.floor((end-start)/2);
        if( nums[start] < nums[mid] ){
            // 前半段sorted
            if( nums[start] <= target && nums[mid] >= target ){
                end = mid;
            }
            else{
                start = mid;
            }
        }
        else{
            // 後半段sorted
            if( nums[mid] <= target && nums[end] >= target ){
                start = mid;
            }
            else{
                end = mid;
            }
        }
    }
    if( nums[start] === target ){ return start; }
    else if( nums[end] === target ){ return end; }
    else{ return -1; }
};

//tags: Facebook, Microsoft, Bloomberg, Uber, Linkedin