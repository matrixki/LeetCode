/*
Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Determine if you are able to reach the last index.

For example:
A = [2,3,1,1,4], return true.

A = [3,2,1,0,4], return false.
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    var maxReach = 0;
    for( var i=0, len=nums.length;i<len;i++ ){
        if( i > maxReach ){
            return false;
        }
        maxReach = Math.max( maxReach, i+nums[i] );
    }
    return true;
};

var canJump = function(nums) {
    let canReach = nums.length-1;
    for(let i=nums.length-2;i>=0;i--){
        if(i+nums[i]>=canReach){
            canReach = i;
        }
    }
    return canReach === 0;
};

//tags: Microsoft
