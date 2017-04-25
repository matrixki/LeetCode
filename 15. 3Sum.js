/*
Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note: The solution set must not contain duplicate triplets.

For example, given array S = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var result = [];
    if( nums.length < 3 ){
        return result;
    }    
    nums.sort(function(a, b){return a-b});
    for( var i=0;i<nums.length-2;i++ ){
        var j = i+1;
        var k = nums.length-1;
        while( j<k ){
            if( nums[i]+nums[j]+nums[k] === 0 ){
                result.push([nums[i],nums[j],nums[k]]);
                j++;
                k--;
                while( j<k && nums[j] === nums[j-1] ){
                    j++
                }
                while( j<k && nums[k] === nums[k+1] ){
                    k--;
                }
            }
            else if( nums[i]+nums[j]+nums[k] < 0 ){
                j++;
            }
            else{
                k--;
            }
        }
        while( i<nums.length-1 && nums[i]===nums[i+1] ){
            i++;
        }
    }
    return result;
};