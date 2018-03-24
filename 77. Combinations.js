/*
Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.

For example,
If n = 4 and k = 2, a solution is:

[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
*/


/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    var result = [];
    backTracking([], 1);
    return result;
    
    function backTracking( temp, start ){
        if( temp.length === k ){
            result.push(temp);
            return;
        }
        for( var i=start;i<=n;i++ ){
            temp.push(i);
            backTracking( temp.concat(), i+1 );
            temp.pop();
        }
    }
};
