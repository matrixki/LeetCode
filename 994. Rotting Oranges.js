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
    let rotten = [], level = 0, fresh = 0;
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            if(grid[i][j]===2){
                rotten.push([i, j]);
            }
            if(grid[i][j]===1){
                fresh++;
            }
        }
    }
    if(fresh===0){ return 0; }
    const directions = [ [-1, 0], [1, 0], [0, -1], [0, 1] ];
    while(rotten.length>0){
        level++;
        const size = rotten.length;
        for(let i=0;i<size;i++){
            const orange = rotten.shift();
            for(let dir of directions){
                let x = orange[0] + dir[0];
                let y = orange[1] + dir[1];
                if(x<0 || y<0 || x>=grid.length || y>=grid[0].length || grid[x][y]===0 || grid[x][y]===2){
                    continue;
                }
                grid[x][y] = 2;
                rotten.push([x,y]);
                fresh--;
            }
        }
    }
    return fresh === 0 ? level-1 : -1;
};

//tags: Amazon, Google
