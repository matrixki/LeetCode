/*
Given a collection of candidate numbers (C) and a target number (T), find all unique combinations in C where the candidate numbers sums to T.

Each number in C may only be used once in the combination.

Note:
All numbers (including target) will be positive integers.
The solution set must not contain duplicate combinations.
For example, given candidate set [10, 1, 2, 7, 6, 1, 5] and target 8, 
A solution set is: 
[
  [1, 7],
  [1, 2, 5],
  [2, 6],
  [1, 1, 6]
]
*/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    
    candidates.sort(function(a, b) {
        return a - b;
    });
    var result = [];
    
    dfs( 0, target, candidates, 0, [], result );
    
    function checkArrExist( curr, compare ){
        for( var i=0, len = compare.length;i<len;i++ ){
            var ccompare = compare[i];
            if(curr.length === compare[i].length ){
                var flag = true;
                for( var j=0, clen = ccompare.length;j<clen;j++ ){
                    if( curr[j] !== ccompare[j]){
                        flag = false;
                        break;
                    }
                }
                if( flag ){
                    return true;
                }
            }
        }
        return false;
    }
    
    function dfs(start, target, candidates, sum, curr, result){
        if( sum === target ){
            if( !checkArrExist( curr, result ) ){
               result.push(curr.concat());
            }
            
        }
        for( var i=start, len = candidates.length;i<len;i++ ){
            if( sum+candidates[i] <= target ){
                curr.push(candidates[i]);
                dfs( i+1, target, candidates, sum+candidates[i], curr, result );
                curr.pop();
            }                
        }
    }
    return result;    
};

//tags: Snapchat
