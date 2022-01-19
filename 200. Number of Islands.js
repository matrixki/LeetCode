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
    let result = 0;
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            if(grid[i][j]==="1"){
                dfs(grid, i, j);
                result++;
            }
        }
    }
    return result;
};

const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
const dfs = (grid, x, y) => {
    if(x<0 || x>=grid.length || y<0 || y>=grid[0].length || grid[x][y]==="0"){
        return;
    }
    grid[x][y] = "0";
    for(let i=0;i<dirs.length;i++){
        dfs(grid, x+dirs[i][0], y+dirs[i][1]);
    }
};

//tags: Google, Facebook, Microsoft, Amazon, Zenefits
