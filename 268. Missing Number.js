/*
Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

Example 1

Input: [3,0,1]
Output: 2
Example 2

Input: [9,6,4,2,3,5,7,0,1]
Output: 8

Note:
Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?

Credits:
Special thanks to @jianchao.li.fighter for adding this problem and creating all test cases.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    var lookup = [];
    for(var i=0, len=nums.length;i<len;i++){
        lookup[ nums[i] ] = true;
    }        
    for(var j=0, len=lookup.length;j<len;j++){
        if( lookup[j] === undefined ){
            return j;
        }
    }
    return lookup.length;
};

//tags: Microsoft, Bloomberg