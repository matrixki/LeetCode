/*
Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

For example,
Given the following matrix:

[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
You should return [1,2,3,6,9,8,7,4,5].
*/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if( matrix.length < 1 ){ return matrix; }
    var result = [];
    var left = 0, right = matrix[0].length-1, bottom = matrix.length-1, top = 0;
    var totalLength = (matrix[0].length)*(matrix.length);
    var i=0, j=0;
    while( result.length < totalLength ){
        // go right
        while( j<=right && i<=bottom){
            result.push(matrix[i][j]);
            j++;
        }
        j--;
        i++;
        top++;
        // go down
        while( i<=bottom && j>=left){
            result.push(matrix[i][j]);
            i++;
        }
        i--;
        j--;
        right--;
        // go left
        while( j>=left && i>=top){
            result.push(matrix[i][j]);
            j--;
        }
        j++;
        i--;
        bottom--;
        // go up
        while( i>=top && j<=right){
            result.push(matrix[i][j]);
            i--;
        }
        i++;
        j++;
        left++;
    }
    return result;     
};

//tags: Google, Microsoft, Uber, Adobe, Apple, Walmart Labs, Paypal, Bloomberg, Facebook, ByteDance, Robinhood, eBay, Drawbridge, Cisco, Snapchat
