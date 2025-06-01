/*
Given a set of candidate numbers (C) (without duplicates) and a target number (T), find all unique combinations in C where the candidate numbers sums to T.

The same repeated number may be chosen from C unlimited number of times.

Note:
All numbers (including target) will be positive integers.
The solution set must not contain duplicate combinations.
For example, given candidate set [2, 3, 6, 7] and target 7, 
A solution set is: 
[
  [7],
  [2, 2, 3]
]
*/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  
    candidates.sort(function(a, b) {
        return a - b;
    });
    var result = [];
    
    dfs( 0, target, candidates, 0, [], result );
    
    function dfs(start, target, candidates, sum, curr, result){
        if( sum === target ){
            result.push(curr.concat());
        }
        for( var i=start, len = candidates.length;i<len;i++ ){
            if( sum+candidates[i] <= target ){
                curr.push(candidates[i]);
                dfs( i, target, candidates, sum+candidates[i], curr, result );
                curr.pop();
            }
        }
    }
    return result;
};

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let result = [];
    const backTracking = (idx, curr, total) => {
        if (total===target) {
            result.push(Array.from(curr));
            return;
        }

        if (total > target || idx >= candidates.length) {
            return;
        }

        curr.push(candidates[idx]);
        backTracking(idx, curr, total+candidates[idx]);
        curr.pop();
        backTracking(idx+1, curr, total);
    };
    backTracking(0, [], 0);
    return result;
};


//tags: Uber, Snapchat