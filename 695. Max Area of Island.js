/*

You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

The area of an island is the number of cells with a value 1 in the island.

Return the maximum area of an island in grid. If there is no island, return 0.

 

Example 1:


Input: grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
Output: 6
Explanation: The answer is not 11, because the island must be connected 4-directionally.
Example 2:

Input: grid = [[0,0,0,0,0,0,0,0]]
Output: 0
 

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 50
grid[i][j] is either 0 or 1.

tags: Facebook, Amazon, Google, DoorDash, Microsoft, DE Shaw, Bloomberg, Dropbox, Qualtrics, Apple

*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let result = 0;
    const m = grid.length, n = grid[0].length;
    for (let i=0;i<m;i++) {
        for (let j=0;j<n;j++) {
            if (grid[i][j]===1) {
                result = Math.max(result, traverse(grid, i, j));
            }
        }
    }
    return result;
};

const traverse = (grid, x, y) => {
    if (x<0 || x>=grid.length || y<0 || y>=grid[0].length || grid[x][y] === 0){ return 0; }
    grid[x][y] = 0;
    return 1 + traverse(grid, x+1, y) + traverse(grid, x-1, y) + traverse(grid, x, y+1) + traverse(grid, x, y-1);
};