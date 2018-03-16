/*
Follow up for "Unique Paths":

Now consider if some obstacles are added to the grids. How many unique paths would there be?

An obstacle and empty space is marked as 1 and 0 respectively in the grid.

For example,
There is one obstacle in the middle of a 3x3 grid as illustrated below.

[
  [0,0,0],
  [0,1,0],
  [0,0,0]
]
The total number of unique paths is 2.

Note: m and n will be at most 100.
*/

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    var m = obstacleGrid.length;
    var n = obstacleGrid[0].length;
    // Dynamic Programming
    var result = [];
    for( var i=0;i<m;i++ ){
        result.push([]);
    }
    for( var i=0;i<m;i++ ){
        for( var j=0;j<n;j++ ){
            if( obstacleGrid[i][j] === 1 ){
                result[i][j] = 0;
            }                
            else{
                if( i===0 ){
                    if( j===0 ){
                        result[i][j] = 1;
                    }
                    else if(j>0){
                        result[i][j] = result[i][j-1]===0?0:1;
                    }
                }
                else if( j===0 ){
                    if( i===0 ){
                        result[i][j] = 1;
                    }
                    else if(i>0){
                        result[i][j] = result[i-1][j]===0?0:1;
                    }
                }
                else{
                    result[i][j] = result[i-1][j] + result[i][j-1];
                }
            }
        }
    }
    return obstacleGrid[m-1][n-1] !== 1 ? result[m-1][n-1] : 0;    
};

// one dimensional DP
var uniquePathsWithObstacles = function(obstacleGrid) {
    var m = obstacleGrid.length;
    var n = obstacleGrid[0].length;
    // Dynamic Programming
    var result = [];
    for( var i=0;i<n;i++ ){
        result.push(0);
    }
    result[0] = 1;
    for( var i=0;i<m;i++ ){
        for( var j=0;j<n;j++ ){
            if( obstacleGrid[i][j] === 1 ){
                result[j] = 0;
            }                
            else if(j>0){
                result[j] += result[j-1];
            }
        }
    }
    return result[n-1];    
};

//tags: Bloomberg