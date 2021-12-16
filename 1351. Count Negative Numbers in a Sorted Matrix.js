/*

Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.

 

Example 1:

Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
Output: 8
Explanation: There are 8 negatives number in the matrix.
Example 2:

Input: grid = [[3,2],[1,0]]
Output: 0
Example 3:

Input: grid = [[1,-1],[-1,-1]]
Output: 3
Example 4:

Input: grid = [[-1]]
Output: 1
 

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 100
-100 <= grid[i][j] <= 100
 

Follow up: Could you find an O(n + m) solution?

tags: Microsoft, Facebook

*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
// O(m*log(n))
 var countNegatives = function(grid) {
    const m = grid.length, n = grid[0].length, lastIndex = n-1;
    let result = 0;
    for(let i=0;i<m;i++){
        if( grid[i][n-1] >= 0 ){
            continue;
        }
        if( grid[i][0] < 0 ){
            result += n;
            continue;
        }
        let left = 0, right = lastIndex;
        while(left<=right){
            let mid = left + parseInt((right-left)/2);
            if(grid[i][mid]<0){
                right = mid-1;
            }
            else{
                left = mid+1;
            }
        }
        result += n-left;
        right = lastIndex;
    }
    return result;
};


// O(n+m)
var countNegatives = function(grid) {
    const m = grid.length, n = grid[0].length;
    let row = m-1, col = 0;
    let result = 0;
    while(row>=0 && col<n){
        if(grid[row][col]<0){
            row--;
            result += n-col;
        }
        else{
            col++;
        }
    }
    return result;
};

