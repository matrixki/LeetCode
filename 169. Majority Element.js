/*
Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

Credits:
Special thanks to @ts for adding this problem and creating all test cases.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

// map solution: to keep all count if ask for second largest majority
var majorityElement = function(nums) {
    var lookup = new Map();
    if( nums.length === 1 ){
        return nums[0];
    }
    for(var i=0;i<nums.length;i++){
        if( lookup.has( nums[i] ) ){
            var count = lookup.get( nums[i] );
            count++;
            lookup.set( nums[i], count );
            if(count > Math.floor( nums.length/2 )){
                return nums[i];
            }
        }
        else{
            lookup.set( nums[i], 1 );
        }
    }
};
//only for majority solution
var majorityElement = function(nums) {
    var major = nums[0], count = 1;
    for(var i=1;i<nums.length;i++){
        if( count === 0 ){
            count++;
            major = nums[i];
        }
        else if( major === nums[i] ){
            count++;
        }
        else{
            count--;
        }
    }
    return major;
};