/*
Given an array of integers sorted in ascending order, find the starting and ending position of a given target value.

Your algorithm's runtime complexity must be in the order of O(log n).

If the target is not found in the array, return [-1, -1].

For example,
Given [5, 7, 7, 8, 8, 10] and target value 8,
return [3, 4].
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    var start = 0, end = nums.length -1;
    var mid, flag = false, result = [-1, -1];
    if( nums.length === 1 && nums[0] === target ){
        return [0,0];
    }
    else if( nums.length < 1){
        return result;
    }
    while( start <= end ){
        mid = start + Math.floor( (end-start)/2 );
        if( target === nums[mid] ){
            flag = true;
            break;
        }
        else if( target > nums[mid]){
            start = mid+1;
        }
        else{
            end = mid-1;
        }
    }
    if( flag ){
        var pointera = 0, pointerb = 0;
        while( mid-pointera >= 0 && nums[mid-pointera] === target){
            result[0] = mid-pointera;
            pointera++;
        }
        while( mid+pointerb <= nums.length-1 && nums[mid+pointerb] === target){
            result[1] = mid+pointerb;
            pointerb++
        }
    }
    return result;
};

//tags: Linkedin