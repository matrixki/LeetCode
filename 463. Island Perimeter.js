/*
You are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water. Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells). The island doesn't have "lakes" (water inside that isn't connected to the water around the island). One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

Example:

[[0,1,0,0],
 [1,1,1,0],
 [0,1,0,0],
 [1,1,0,0]]

Answer: 16
Explanation: The perimeter is the 16 yellow stripes in the image below:

*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    var islands = 0;
    var neighbors = 0;
    for(var i=0, lenm = grid.length;i<lenm;i++){
        for(var j=0, lenn=grid[0].length;j<lenn;j++){
            if( grid[i][j] === 1 ){
                islands++;
                if( i<(lenm-1) && grid[i+1][j]===1 ){
                    neighbors++;
                }
                if( j<(lenn-1) && grid[i][j+1]===1 ){
                    neighbors++;
                }
            }
        }
    }
    return 4*islands - 2*neighbors;
};

//tags: Facebook, Bloomberg