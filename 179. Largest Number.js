/*
Given a list of non negative integers, arrange them such that they form the largest number.

Example 1:

Input: [10,2]
Output: "210"
Example 2:

Input: [3,30,34,5,9]
Output: "9534330"
Note: The result may be very large, so you need to return a string instead of an integer.


*/

/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    if(nums.length<1){
        return "0"; 
    }
    nums.sort(function(str1, str2){
        var a = parseInt('' + str1 + str2);
        var b = parseInt('' + str2 + str1);
        if( b > a ){
            return 1;  
        } 
        else if( b === a ){
            return 0;
        }
        else{
            return -1;
        }
        
    });
    // all zeros
    if(nums[0] === 0){
        return '0';
    }
    return nums.join('');
};

//tags: Works Application
