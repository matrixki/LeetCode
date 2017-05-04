/*
Rotate an array of n elements to the right by k steps.

For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].

Note:
Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.

[show hint]

Hint:
Could you do it in-place with O(1) extra space?
Related problem: Reverse Words in a String II
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    var step = k%nums.length;
    var temp = [];
    for(var i = nums.length-step; i<nums.length;i++){
        temp.push( nums[i] );
    }
    for(i=0;i<nums.length;i++){
        if( nums.length-i > step ){
            nums[ nums.length-1-i ] = nums[ nums.length-1-i-step ]  
        }
        else{
            nums[nums.length-1-i] = temp[nums.length-1-i];
        }
    }
};