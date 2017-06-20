/*
Given a non-empty array of integers, return the third maximum number in this array. If it does not exist, return the maximum number. The time complexity must be in O(n).

Example 1:
Input: [3, 2, 1]

Output: 1

Explanation: The third maximum is 1.
Example 2:
Input: [1, 2]

Output: 2

Explanation: The third maximum does not exist, so the maximum (2) is returned instead.
Example 3:
Input: [2, 2, 3, 1]

Output: 1

Explanation: Note that the third maximum here means the third maximum distinct number.
Both numbers with value 2 are both considered as second maximum.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    
    var first = null;
    var second = null;
    var third = null;

    var length = nums.length;
    for(var i=0;i<length;i++){
        var current = nums[i]
        if( first === null || current > first ){
            third = second;
            second = first;
            first = current;
        }    
        else if( current !== first && ( second === null || current > second ) ){
            third = second;
            second = current;
        }
        else if( current !== first && current !== second && ( third === null || current > third ) ){
            third = current;
        }
    }
    
    return third !== null ? third : first;
    
};