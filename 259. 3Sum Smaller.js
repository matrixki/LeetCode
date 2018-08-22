/*
Given an array of n integers nums and a target, find the number of index triplets i, j, k with 0 <= i < j < k < n that satisfy the condition nums[i] + nums[j] + nums[k] < target.

Example:

Input: nums = [-2,0,1,3], and target = 2
Output: 2 
Explanation: Because there are two triplets which sums are less than 2:
             [-2,0,1]
             [-2,0,3]
Follow up: Could you solve it in O(n2) runtime?


*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumSmaller = function(nums, target) {
    var result = 0;
    if(nums.length<3){
        return 0;
    }
    nums.sort(function(a,b){
        return a-b;
    });
    for(var i=0, len=nums.length;i<len-2;i++){
        var start = i+1, end = nums.length-1; 
        while(start<end){
            if(nums[i]+nums[start]+nums[end]<target){
                result += (end-start);
                start++;
            }
            else{
                end--;
            }
        }
    }
    return result;
};

//tags: Facebook
