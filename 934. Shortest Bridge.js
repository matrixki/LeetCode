/*

You are given an n x n binary matrix grid where 1 represents land and 0 represents water.

An island is a 4-directionally connected group of 1's not connected to any other 1's. There are exactly two islands in grid.

You may change 0's to 1's to connect the two islands to form one island.

Return the smallest number of 0's you must flip to connect the two islands.

 

Example 1:

Input: grid = [[0,1],[1,0]]
Output: 1
Example 2:

Input: grid = [[0,1,0],[0,0,0],[0,0,1]]
Output: 2
Example 3:

Input: grid = [[1,1,1,1,1],[1,0,0,0,1],[1,0,1,0,1],[1,0,0,0,1],[1,1,1,1,1]]
Output: 1
 

Constraints:

n == grid.length == grid[i].length
2 <= n <= 100
grid[i][j] is either 0 or 1.
There are exactly two islands in grid.

*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestBridge = function(grid) {
    let queue = [];
    for(let i=0;i<grid.length;i++) {
        for(let j=0;j<grid[0].length;j++) {
            if (markOneIsland(grid, i, j, queue)) {
                return findBridgeDistance(grid, queue);
            }
        }
    }
};

const dirs = [ [-1, 0], [1, 0], [0, -1], [0, 1] ];

// mark the first island to 2: DFS
const markOneIsland = (grid, x, y, queue) => {
    if (x<0 || x>=grid.length || y<0 || y>=grid[0].length || grid[x][y] !== 1) {
        return false;
    }
    queue.push([x, y]);
    grid[x][y] = 2;

    for (let dir of dirs) {
        markOneIsland(grid, x+dir[0], y+dir[1], queue);
    }

    return true;
};

// find the shortest distance: BFS
const findBridgeDistance = (grid, queue) => {
    let distance = -1;
    let currentQueue = [];
    while (queue.length > 0) {
        currentQueue = queue;
        queue = [];
        for (let [row, col] of currentQueue) {
            for (let dir of dirs) {
                const nextRow = row + dir[0];
                const nextCol = col + dir[1];
                if (nextRow >= 0 && nextRow < grid.length && nextCol >= 0 && nextCol < grid[0].length && grid[nextRow][nextCol] !== 2) {
                    if (grid[nextRow][nextCol] === 1) {
                        return distance+1;
                    }
                    queue.push([nextRow, nextCol]);
                    grid[nextRow][nextCol] = 2;
                }
            }
        }
        distance++;
    }
    return -1;
};

//tags: Flipkart, Google, Amazon