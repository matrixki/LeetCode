/*

There is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean. The Pacific Ocean touches the island's left and top edges, and the Atlantic Ocean touches the island's right and bottom edges.

The island is partitioned into a grid of square cells. You are given an m x n integer matrix heights where heights[r][c] represents the height above sea level of the cell at coordinate (r, c).

The island receives a lot of rain, and the rain water can flow to neighboring cells directly north, south, east, and west if the neighboring cell's height is less than or equal to the current cell's height. Water can flow from any cell adjacent to an ocean into the ocean.

Return a 2D list of grid coordinates result where result[i] = [ri, ci] denotes that rain water can flow from cell (ri, ci) to both the Pacific and Atlantic oceans.

 

Example 1:


Input: heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]
Output: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]
Example 2:

Input: heights = [[2,1],[1,2]]
Output: [[0,0],[0,1],[1,0],[1,1]]
 

Constraints:

m == heights.length
n == heights[r].length
1 <= m, n <= 200
0 <= heights[r][c] <= 105

tags: Google, Amazon, Facebook, Apple, Microsoft

*/

/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
 var pacificAtlantic = function(heights) {
    const n = heights.length, m = heights[0].length;
    let pacific = [], atlantic = [];
    const directions = [ [-1, 0], [1, 0], [0, -1], [0, 1] ];
    for(let i=0;i<n;i++){
        pacific[i] = [];
        atlantic[i] = [];
        for(let j=0;j<m;j++){
            pacific[i][j] = false;
            atlantic[i][j] = false;
        }
    }
    
    for(let i=0;i<n;i++){
        dfs(i, 0, pacific, Number.MIN_SAFE_INTEGER);
        dfs(i, m-1, atlantic, Number.MIN_SAFE_INTEGER);
    }

    for(let i=0;i<m;i++){
        dfs(0, i, pacific, Number.MIN_SAFE_INTEGER);
        dfs(n-1, i, atlantic, Number.MIN_SAFE_INTEGER);
    }
    
    let result = [];
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            if(pacific[i][j] && atlantic[i][j]){
                result.push([i, j]);
            }
        }
    }   
    return result;
    
    function dfs(x, y, visited, height){
        if(x<0 || x>=n || y<0 || y>=m || visited[x][y] || heights[x][y] < height){
            return;
        }
        visited[x][y] = true;
        for(let dir of directions){
            dfs(x+dir[0], y+dir[1], visited, heights[x][y]);
        }
    }
};