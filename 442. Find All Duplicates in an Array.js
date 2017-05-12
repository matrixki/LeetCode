/*
Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements that appear twice in this array.

Could you do it without extra space and in O(n) runtime?

Example:
Input:
[4,3,2,7,8,2,3,1]

Output:
[2,3]
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    var result = [];
    if( nums.length < 2 ){ return result; }
    nums.sort();
    for(var i=1;i<nums.length;i++){
        if(nums[i]===nums[i-1]){
            result.push(nums[i]);
        }
    }
    return result;
};

// better solution, the constraints is 1<= nums[i] <= n (size of the array)
var findDuplicates = function(nums) {
    var result = [];
    for(var i=0;i<nums.length;i++){
        var val = Math.abs(nums[i]);
        if( nums[val-1] <0 ){
            result.push(val);
        }
        else{
            nums[val-1] *= -1;
        }
    }
    return result;
};
