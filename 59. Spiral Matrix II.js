/*
Given an integer n, generate a square matrix filled with elements from 1 to n2 in spiral order.

For example,
Given n = 3,

You should return the following matrix:
[
 [ 1, 2, 3 ],
 [ 8, 9, 4 ],
 [ 7, 6, 5 ]
]
*/

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    var matrixLen = n*n;
    var result = [];
    for( var i=0;i<n;i++ ){
        result.push([]);
    }
    var left = 0, right = n-1, bottom = n-1, top = 0;
    var i=0, j=0, counter = 1;
    while( counter <= matrixLen ){
        // go right
        while( j<=right && i<=bottom){
            result[i][j] = counter++;
            j++;
        }
        j--;
        i++;
        top++;
        // go down
        while( i<=bottom && j>=left){
            result[i][j] = counter++;
            i++;
        }
        i--;
        j--;
        right--;
        // go left
        while( j>=left && i>=top){
            result[i][j] = counter++;
            j--;
        }
        j++;
        i--;
        bottom--;
        // go up
        while( i>=top && j<=right){
            result[i][j] = counter++;
            i--;
        }
        i++;
        j++;
        left++;        
    }
    return result;
};
