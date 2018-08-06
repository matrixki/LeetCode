/*
Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

Integers in each row are sorted in ascending from left to right.
Integers in each column are sorted in ascending from top to bottom.
Example:

Consider the following matrix:

[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
Given target = 5, return true.

Given target = 20, return false.
*/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    var m = matrix.length;
    if(m<1){
        return false;
    }
    var n = matrix[0].length;
    if(n<1){
        return false;
    }
    
    var row = 0;
    var col = n-1;
    while(row<m&&col>=0){
        var curr = matrix[row][col];
        if(curr===target){
            return true;
        }
        else if(curr>target){
            col--;
        }
        else{
            row++;
        }
    }
    return false;
};

//tags: Amazon, Microsoft, Bloomberg, Google, Tencent, Apple
