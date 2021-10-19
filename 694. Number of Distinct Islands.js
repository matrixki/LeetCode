/*

You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

An island is considered to be the same as another if and only if one island can be translated (and not rotated or reflected) to equal the other.

Return the number of distinct islands.

 

Example 1:


Input: grid = [[1,1,0,0,0],[1,1,0,0,0],[0,0,0,1,1],[0,0,0,1,1]]
Output: 1
Example 2:


Input: grid = [[1,1,0,1,1],[1,0,0,0,0],[0,0,0,0,1],[1,1,0,1,1]]
Output: 3
 

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 50
grid[i][j] is either 0 or 1.

tags: Amazon, Facebook, Uber, Oracle, ByteDance

*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
 var numDistinctIslands = function(grid) {
    if(grid.length === 0 || grid[0].length === 0){
        return 0;
    }
    let paths = new Set();
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            if(grid[i][j] === 1){
                let path = traverse(i, j, []);
                paths.add(path);
            }
        }
    }
    return paths.size;
    
    function traverse(x, y, path){
        if(x<0 || x>=grid.length || y<0 || y>=grid[0].length || grid[x][y] === 0){
            return;
        }
        grid[x][y] = 0;
        let directions = [ [-1, 0, "d"], [1, 0, "u"], [0, -1, "d"], [0, 1, "up"] ];
        for(let dir of directions){
            path.push(dir[2]);
            traverse(x+dir[0], y+dir[1], path);
        }
        return path.join("");
    }
};