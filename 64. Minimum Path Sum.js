/*
Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.

Example 1:
[[1,3,1],
 [1,5,1],
 [4,2,1]]
Given the above grid map, return 7. Because the path 1→3→1→1→1 minimizes the sum.
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    var m = grid.length;
    var n = grid[0].length;
    // Dynamic Programming
    var result = [];
    for( var i=0;i<m;i++ ){
        result.push([]);
    }
    for( var i=0;i<m;i++ ){
        for( var j=0;j<n;j++ ){
            if( i===0 && j===0 ){
                result[0][0] = grid[0][0];
            }
            else if( i===0 && j>0){
                result[i][j] = result[i][j-1] + grid[0][j];
            }
            else if( j===0 && i>0 ){
                result[i][j] = result[i-1][j] + grid[i][0];
            }
            else{
                result[i][j] = Math.min( result[i-1][j], result[i][j-1] )+grid[i][j];
            }
        }
    }
    return result[m-1][n-1];     
};