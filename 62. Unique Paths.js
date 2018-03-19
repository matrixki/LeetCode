/*
A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?


Above is a 3 x 7 grid. How many possible unique paths are there?

Note: m and n will be at most 100.
*/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    // Dynamic Programming
    var result = [];
    for( var i=0;i<m;i++ ){
        result.push([]);
    }
    for( var i=0;i<m;i++ ){
        for( var j=0;j<n;j++ ){
            if( j === 0 || i === 0 ){
                result[i][j] = 1;   
            }
            else{
                result[i][j] = result[i][j-1] + result[i-1][j];
            }
        }
    }
    return result[m-1][n-1];  
};

// one dimensional DP, lower memory space
var uniquePaths = function(m, n) {
    // one dimensional DP
    var result = [];
    for( var i=0;i<n;i++ ){
        result.push(1);
    }
    for( var i=1;i<m;i++ ){
        for( var j=1;j<n;j++ ){
            result[j] += result[j-1];
        }
    }
    return result[n-1];    
};


//tags: Bloomberg