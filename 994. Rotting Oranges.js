/*
In a given grid, each cell can have one of three values:

the value 0 representing an empty cell;
the value 1 representing a fresh orange;
the value 2 representing a rotten orange.
Every minute, any fresh orange that is adjacent (4-directionally) to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange.  If this is impossible, return -1 instead.

 

Example 1:



Input: [[2,1,1],[1,1,0],[0,1,1]]
Output: 4
Example 2:

Input: [[2,1,1],[0,1,1],[1,0,1]]
Output: -1
Explanation:  The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.
Example 3:

Input: [[0,2]]
Output: 0
Explanation:  Since there are already no fresh oranges at minute 0, the answer is just 0.
 

Note:

1 <= grid.length <= 10
1 <= grid[0].length <= 10
grid[i][j] is only 0, 1, or 2.

tags: Amazon, Microsoft, Oracle, Google, Apple, Facebook, Bloomberg, Walmart Labs, Samsung, VMware

*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    const m = grid.length, n = grid[0].length;
    let fresh = 0, rottens = [], level = 0;
    for (let i=0;i<m;i++) {
        for (let j=0;j<n;j++) {
            if (grid[i][j]===1) {
                fresh++;
            }
            if (grid[i][j]===2) {
                rottens.push([i, j]);
            }
        }
    }
    if (fresh===0){return 0;}

    const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    while (rottens.length > 0) {
        const total = rottens.length;
        level++;
        for (let i=0;i<total;i++) {
            const rotten = rottens.shift();
            for (let dir of dirs) {
                const x = dir[0]+rotten[0];
                const y = dir[1]+rotten[1];
                if (x<0 || x>=m || y<0 || y>=n || grid[x][y] !== 1) { continue; }
                rottens.push([x, y]);
                fresh--;
                grid[x][y] = 2;
            }
        }
    }
    return fresh === 0 ? level-1 : -1;
};

//tags: Amazon, Google, Tiktok, Lyft
