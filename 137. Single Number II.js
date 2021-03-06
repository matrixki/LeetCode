/*
Given a non-empty array of integers, every element appears three times except for one, which appears exactly once. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:

Input: [2,2,3,2]
Output: 3
Example 2:

Input: [0,1,0,1,0,1,99]
Output: 99
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var map = {};
    for(var i=0, len=nums.length;i<len;i++){
        if(map[nums[i]]){
            map[nums[i]]++;   
        }
        else{
            map[nums[i]] = 1;
        }
        
    }
    for(var key in map){
        if(map[key]===1){
            return parseInt(key);
        }
    }
};

// bit manipulation
var singleNumber = function(nums) {
    var result = 0;
    for(var i=0;i<32;i++){
        var count = 0;
        var bit = 1<<i;
        for(var j=0, len=nums.length;j<len;j++){
            if(nums[j]&bit){
                count++;
            }
        }
        if(count%3!==0){
            result = result | bit;
        }
    }
    return result;
};

//tags: Google, Adobe, NetEase
