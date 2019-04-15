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
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if(matrix.length===0){
        return false;
    }
    let m = 0;
    let n = matrix[0].length-1;
    while( m<matrix.length && n>=0){
        if(matrix[m][n]===target){
            return true;
        }
        else if(matrix[m][n]>target){
            n--;
        }
        else{
            m++;
        }
    }
    return false;
};

//tags: Amazon, Microsoft, Bloomberg, Google, Tencent, Apple, Facebook, Goldman Sachs, Citadel, eBay
