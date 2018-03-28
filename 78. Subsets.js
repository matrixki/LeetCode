/*
Given a set of distinct integers, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.

For example,
If nums = [1,2,3], a solution is:

[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    var result = [];
    result.push([]);
    for( var i=1, len=nums.length;i<=len;i++ ){
        bfs( i, 0, [] );
    }
    return result;
    
    function bfs( n, start, curr ){
        if( curr.length === n ){
            result.push(curr);
            return;
        }
        for( var i=start;i<nums.length;i++ ){
            curr.push(nums[i]);
            bfs( n, i+1, curr.concat() );
            curr.pop();
        }
    }
};

//tags: Facebook, Amazon, Bloomberg, Uber, Coupang
