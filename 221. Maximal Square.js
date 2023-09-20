/*
Given a 2D binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

Example:

Input: 

1 0 1 0 0
1 0 1 1 1
1 1 1 1 1
1 0 0 1 0

Output: 4
*/

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    const m = matrix.length, n = matrix[0].length;
    let dp = [...Array(m)].map(()=>{ return Array(n).fill(0); });
    let side = 0;
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(i===0){
                dp[0][j] = matrix[0][j];
            }
            if(j===0){
                dp[i][0] = matrix[i][0];
            }
            if(matrix[i][j] > 0 && i>0&&j>0){
                dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1;
            }
            side = Math.max(side, dp[i][j]);
        }
    }
    return side*side;
};

//tags: Facebook, Apple, Airbnb
