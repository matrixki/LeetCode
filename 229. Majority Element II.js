/*
Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

Note: The algorithm should run in linear time and in O(1) space.

Example 1:

Input: [3,2,3]
Output: [3]
Example 2:

Input: [1,1,1,3,3,2,2,2]
Output: [1,2]

*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    var result = [];
    if(nums.length<0){
        return result;
    }
    var c1 = 0, c2 = 0;
    var n1 = 0, n2 = 0;
    for(var i=0, len=nums.length;i<len;i++){
        if( nums[i] === c1 ){
            n1++
        }
        else if(nums[i] === c2){
            n2++;
        }
        else if(n1 === 0){
            c1 = nums[i];
            n1 = 1;
        }
        else if(n2 === 0){
            c2 = nums[i];
            n2 = 1;
        }
        else{
            n1--;
            n2--;
        }
    }
    n1 = 0; n2 = 0;
    for(var i=0, len=nums.length;i<len;i++){
        if(nums[i]===c1){
            n1++;
        }
        if(nums[i]===c2){
            n2++;
        }
    }
    if(c1!==c2){
        if(n1>Math.floor(nums.length/3)){
            result.push(c1);
        }
        if(n2>Math.floor(nums.length/3)){
            result.push(c2);
        }
    }
    else{
        if(n1>Math.floor(nums.length/3)){
            result.push(c1);
        }
    }
    return result;
};

//tags: Microsoft, Google, Amazon, Alibaba, Adobe, Zenefits

