/*
Given a matrix consists of 0 and 1, find the distance of the nearest 0 for each cell.

The distance between two adjacent cells is 1.
Example 1: 
Input:

0 0 0
0 1 0
0 0 0
Output:
0 0 0
0 1 0
0 0 0
Example 2: 
Input:

0 0 0
0 1 0
1 1 1
Output:
0 0 0
0 1 0
1 2 1
Note:
The number of elements of the given matrix will not exceed 10,000.
There are at least one 0 in the given matrix.
The cells are adjacent in only four directions: up, down, left and right.

tags: Google, Amazon, Microsoft, Uber, Apple

*/

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    const m = mat.length, n = mat[0].length;
    for (let i=0;i<m;i++) {
        for (let j=0;j<n;j++) {
            if (mat[i][j] === 1 && !hasZeroNeighbor(mat, i, j)) {
                mat[i][j] = Number.MAX_SAFE_VALUE;
            }
        }
    }
    for (let i=0;i<m;i++) {
        for (let j=0;j<n;j++) {
            if (mat[i][j] === 1) {
                traverse(mat, i , j, 1)
            }
        }
    }
    return mat;
};

const traverse = (mat, x, y, count) => {

    if (x<0 || x>=mat.length || y<0 || y>=mat[0].length || mat[x][y] < count) { return; }

    mat[x][y] = count;

    traverse(mat, x-1, y, count+1);
    traverse(mat, x+1, y, count+1);
    traverse(mat, x, y-1, count+1);
    traverse(mat, x, y+1, count+1);

};

const hasZeroNeighbor = (mat, x, y) => {
    if(x-1>=0 && mat[x-1][y] === 0) { return true; }
    if(x+1<mat.length && mat[x+1][y] === 0) { return true; }
    if(y-1>=0 && mat[x][y-1] === 0) { return true; }
    if(y+1<mat[0].length && mat[x][y+1] === 0) { return true; }
    return false;
};


// add bfs solution at the bottom, easier to understand and code

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
 var updateMatrix = function(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;
    const directions = [ [-1, 0], [1, 0], [0, -1], [0, 1] ];
    
    let queue = [], visited = [], result = [];
    
    for( let i=0;i<m;i++ ){
        result[i] = [];
        visited[i] = [];
        for(let j=0;j<n;j++){
            if(matrix[i][j]===0){
                result[i][j] = 0;
                visited[i][j] = true;
                queue.push([i,j]);
            }
        }
    }
    
    let level = 0;
    while(queue.length > 0){
        level++;
        const len = queue.length;
        for(let i=0;i<len;i++){
            let curr = queue.shift();
            let row = curr[0], col = curr[1];
            for(let direction of directions){
                const x = row + direction[0];
                const y = col + direction[1];
                if(!checkBoundary(x, y)){
                    continue;
                }
                if(visited[x][y]){
                    continue;
                }
                result[x][y] = level;
                queue.push([x,y]);
                visited[x][y] = true;
            }
        }
    }
    return result;
    
    function checkBoundary(x,y){
        if(x<0 || x>=m || y < 0 || y >= n){
            return false;
        }
        return true;
    }
};

//tags: Google
