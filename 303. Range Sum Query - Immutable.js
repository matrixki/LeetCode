/*
Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), inclusive.

Example:
Given nums = [-2, 0, 3, -5, 2, -1]

sumRange(0, 2) -> 1
sumRange(2, 5) -> -1
sumRange(0, 5) -> -3
Note:
You may assume that the array does not change.
There are many calls to sumRange function.
*/

/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.sumArr = [];
    var sum = 0;
    for(var i=0, len=nums.length;i<len;i++){
        sum = nums[i] + sum;    
        this.sumArr[i] = sum;
    }
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    return i>0 ? (this.sumArr[j] - this.sumArr[i-1]) : this.sumArr[j];
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = Object.create(NumArray).createNew(nums)
 * var param_1 = obj.sumRange(i,j)
 */

 //tags: Palantir