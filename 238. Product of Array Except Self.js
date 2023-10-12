/*
Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Example:

Input:  [1,2,3,4]
Output: [24,12,8,6]
Note: Please solve it without division and in O(n).

Follow up:
Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    var result = [];
    var len = nums.length;
    result[0] = 1;
    for(var i=1;i<len;i++){
        result[i] = result[i-1]*nums[i-1];
    }
    var right = 1;
    for(var i=len-1;i>=0;i--){
        result[i] = result[i]*right;
        right *= nums[i];
    }
    return result;
};

// more straight forward

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let totalProduct = nums[0] === 0 ? 1 : nums[0], zeroCount = nums[0] === 0 ? 1: 0, result = [];
    for(let i=1;i<nums.length;i++) {
        const num = nums[i];
        if (num===0) {
            zeroCount++;
            continue;
        }
        totalProduct *= num;
    }
    for (let num of nums) {
        if (zeroCount > 0) {
            if (zeroCount === 1) {
                result.push( num === 0 ? totalProduct : 0 );
            } else {
                result.push(0);
            }
        } else {
            result.push(totalProduct/num);
        }
    }
    return result;
};

//tags: Lyft, Facebook, Amazon, Apple, Hulu, Google, Zenefits, Expedia, Yelp, Microsoft, Linkedin

