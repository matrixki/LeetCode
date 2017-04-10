/*
Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are not zero-based.

You may assume that each input would have exactly one solution and you may not use the same element twice.

Input: numbers={2, 7, 11, 15}, target=9
Output: index1=1, index2=2
*/

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    var results = [];
    var left = 0, right = numbers.length -1;
    while( left<right ){
        var addUp = numbers[left] + numbers[right];
        if(addUp == target){
            results.push(left+1, right+1);
            break;
        }
        else if(addUp > target){
            right--;
        }
        else{
            left++;
        }
    }
    return results;
};
