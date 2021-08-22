/*
Given an array of integers, find out whether there are two distinct indices i and j in the array such that the absolute difference between nums[i] and nums[j] is at most t and the absolute difference between i and j is at most k.

Example 1:

Input: nums = [1,2,3,1], k = 3, t = 0
Output: true
Example 2:

Input: nums = [1,0,1,1], k = 1, t = 2
Output: true
Example 3:

Input: nums = [1,5,9,1,5,9], k = 2, t = 3
Output: false
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    if(k<1 || t<0){
        return false;
    }
    var lookup = new Map();
    for(var i=0, len=nums.length;i<len;i++){
        if(i>k){
            var rmElement = nums[i-k-1];
            var key = Math.floor(rmElement / Math.max(1,t));
            lookup.delete(key);
        }
        var curr = nums[i];
        var currkey = Math.floor(curr / Math.max(1,t));
        if(lookup.has(currkey) && Math.abs(lookup.get(currkey) - nums[i]) <=t ){
            return true;
        }
        if(lookup.has(currkey-1) && Math.abs(lookup.get(currkey-1) - nums[i]) <=t ){
            return true;
        }
        if(lookup.has(currkey+1) && Math.abs(lookup.get(currkey+1) - nums[i]) <=t ){
            return true;
        }
        lookup.set(currkey, curr);
    }
    return false;
};

//tags: Airbnb, Palantir, Adobe
