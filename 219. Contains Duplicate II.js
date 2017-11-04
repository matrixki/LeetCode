/*
Given an array of integers and an integer k, find out whether there are two distinct indices i and j in the array such that nums[i] = nums[j] and the absolute difference between i and j is at most k.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    var lookup = {};
    for( var i=0, len = nums.length;i<len;i++ ){
        if( nums[i] in lookup && (i-lookup[nums[i]]) <= k ){
            return true;
        }
        else{
            lookup[nums[i]] = i;
        }
    }
    return false;
};