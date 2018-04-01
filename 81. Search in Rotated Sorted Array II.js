/*
Follow up for "Search in Rotated Sorted Array":
What if duplicates are allowed?

Would this affect the run-time complexity? How and why?

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

Write a function to determine if a given target is in the array.

The array may contain duplicates.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    var start = 0, end = nums.length -1;
    var mid;
    while( start <= end ){
        mid = Math.floor((start+end)/2);
        if(nums[mid]===target){ return true; }
        
        if( nums[start] === nums[mid] && nums[mid] === nums[end] ){
            start++, end--;
        }
        else if( nums[start] <= nums[mid] ){
            // 前半段sorted
            if( nums[start] <= target && nums[mid] > target ){
                end = mid-1;
            }
            else{
                start = mid+1;
            }
        }
        else{
            // 後半段sorted
            if( nums[mid] < target && nums[end] >= target ){
                start = mid+1;
            }
            else{
                end = mid-1;
            }
        }
    }
    return false;   
};

