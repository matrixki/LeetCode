/*

You are given an m x n integer matrix grid where each cell is either 0 (empty) or 1 (obstacle). You can move up, down, left, or right from and to an empty cell in one step.

Return the minimum number of steps to walk from the upper left corner (0, 0) to the lower right corner (m - 1, n - 1) given that you can eliminate at most k obstacles. If it is not possible to find such walk return -1.

 

Example 1:


Input: grid = [[0,0,0],[1,1,0],[0,0,0],[0,1,1],[0,0,0]], k = 1
Output: 6
Explanation: 
The shortest path without eliminating any obstacle is 10.
The shortest path with one obstacle elimination at position (3,2) is 6. Such path is (0,0) -> (0,1) -> (0,2) -> (1,2) -> (2,2) -> (3,2) -> (4,2).
Example 2:


Input: grid = [[0,1,1],[1,1,1],[1,0,0]], k = 1
Output: -1
Explanation: We need to eliminate at least two obstacles to find such a walk.
 

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 40
1 <= k <= m * n
grid[i][j] is either 0 or 1.
grid[0][0] == grid[m - 1][n - 1] == 0

tags: Google, Amazon

*/

/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
 var shortestPath = function(grid, k) {
    let m = grid.length, n = grid[0].length;
    let queue = [];
    let visited = new Array(m);
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    let step = 0;
    for(let i=0;i<m;i++){
        visited[i] = [];
        for(let j=0;j<n;j++){
            visited[i][j] = Number.MAX_SAFE_VALUE;
        }
    }
    queue.push([0, 0, 0]);
    visited[0][0] = true;
    while(queue.length>0){
        let size = queue.length;
        for(let i=0;i<size;i++){
            const node = queue.shift();
            if(node[0] === m-1 && node[1] === n-1){
                return step;
            }
            for(let dir of directions){
                const x = node[0] + dir[0];
                const y = node[1] + dir[1];
                if(x<0 || x>=m || y<0 || y>=n){
                   continue;
                }
                let currK = grid[x][y] + node[2];
                if(currK>k || currK >= visited[x][y]){
                    continue;
                }
                visited[x][y] = currK;
                queue.push([x, y, currK]);
            }
        }
        step++;
    }
    return -1;
};