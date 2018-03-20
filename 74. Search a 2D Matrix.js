/*
Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.
For example,

Consider the following matrix:

[
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
Given target = 3, return true.
*/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    var start = 0, end = matrix.length-1;
    while( start <= end ){
        var mid = Math.floor((start+end)/2);
        if( matrix[mid][0] === target ){
            return true;
        }
        else if( matrix[mid][0] > target ){
            end = mid-1;
        }
        else if(matrix[mid][0] < target){
            start = mid+1;
        }
        else{
            //undefined
            break;
        }
    }
    if( start-1 < 0 ){
        return false;
    }
    var final = matrix[start-1];
    start = 0, end = final.length-1;
    while( start<=end ){
        var mid = Math.floor((start+end)/2);
        if( final[mid] === target ){
            return true;
        }
        else if( final[mid] > target ){
            end = mid-1;
        }
        else if( final[mid] < target ){
            start = mid+1;
        }
    }
    return false;
};

