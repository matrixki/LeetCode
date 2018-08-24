/*
Given an array of numbers nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once.

Example:

Input:  [1,2,1,3,2,5]
Output: [3,5]
Note:

The order of the result is not important. So in the above example, [5, 3] is also correct.
Your algorithm should run in linear runtime complexity. Could you implement it using only constant space complexity?

*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    var bit = 0, len = nums.length;
    for(var i=0;i<len;i++){
        bit ^= nums[i];
    }
    var a = bit, b = bit;
    var mask = 1;
    while((bit&mask)===0){
        mask = mask<<1;
    }
    for(var i=0;i<len;i++){
        if( mask&nums[i] ){
            a ^= nums[i];
        }
        else{
            b ^= nums[i];
        }
    }
    return [a,b];
};

//tags: Apple
