/*
Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

Input:
11110
11010
11000
00000

Output: 1
Example 2:

Input:
11000
11000
00100
00011

Output: 3
*/

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    var result = 0;
    var m = grid.length;
    if( m === 0 ){
        return 0;
    }
    var n = grid[0].length;
    for(var i=0;i<m;i++){
        for(var j=0;j<n;j++){
            if( grid[i][j] === '1' ){
                calculate(grid, i, j);
                result++;
            }
        }
    }
    return result;
    
    
    function calculate(grid, i, j){
        if( i<0 || j<0 || i>=m || j>=n || grid[i][j] === '0'){
            return;
        }
        grid[i][j] = '0';
        calculate( grid, i+1, j );
        calculate( grid, i-1, j );
        calculate( grid, i, j+1 );
        calculate( grid, i, j-1 );
    }
};

//tags: Google, Facebook, Microsoft, Amazon, Zenefits
