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
*/

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;
    for( let i=0;i<m;i++ ){
        for(let j=0;j<n;j++){
            if(matrix[i][j]===1&&!hasNeiborZeros(i,j, matrix)){
                matrix[i][j] = m+n+1;
            }
        }
    }
    
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(matrix[i][j]===1){
                dfs(matrix,i,j,1);
            }    
        }
    }
    return matrix;
    
    function dfs(matrix,x,y,curr){
        if( x<0 || x>=m || y<0 || y>=n || ( matrix[x][y]<=curr&&curr!==1 ) ){
            return;
        }
        
        matrix[x][y] = curr;    
        
        dfs(matrix,x-1,y,matrix[x][y]+1);
        dfs(matrix,x+1,y,matrix[x][y]+1);
        dfs(matrix,x,y-1,matrix[x][y]+1);
        dfs(matrix,x,y+1,matrix[x][y]+1);
        
    }
    
    function hasNeiborZeros(x,y,matrix){
        if(x-1>=0&&matrix[x-1][y]===0){
            return true;
        }
        if(x+1<=m-1&&matrix[x+1][y]===0){
            return true;
        }
        if(y-1>=0&&matrix[x][y-1]===0){
            return true;
        }  
        if(y+1<=n-1&&matrix[x][y+1]===0){
            return true;
        }       
        return false;
    }
};

//tags: Google
