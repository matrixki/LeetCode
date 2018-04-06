/*
Given a collection of integers that might contain duplicates, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.

For example,
If nums = [1,2,2], a solution is:

[
  [2],
  [1],
  [1,2,2],
  [2,2],
  [1,2],
  []
]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    var result = [];
    nums.sort();
    tracking(0,[],nums);
    return result;    
    
    function tracking(start,curr,nums){
        result.push(curr);
        for( var i=start,len=nums.length;i<len;i++ ){
            if( i===start || nums[i] !== nums[i-1] ){
                curr.push(nums[i]);
                tracking(i+1,curr.concat(),nums);
                curr.pop();                
            }
        }
    }
};

//tags: Facebook
