/*
Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in place.

click to show follow up.

Follow up:
Did you use extra space?
A straight forward solution using O(mn) space is probably a bad idea.
A simple improvement uses O(m + n) space, but still not the best solution.
Could you devise a constant space solution?
*/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    var m = matrix.length, n = matrix[0].length;
    var firstCol = 1;
    for( var i=0;i<m;i++ ){
        if( matrix[i][0] === 0 ){
            firstCol = 0;
        }
        for( var j=1;j<n;j++ ){
            if( matrix[i][j] === 0 ){
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }
    for( var i=m-1;i>=0;i-- ){
        for( var j=n-1;j>=1;j-- ){
            if( matrix[i][0] === 0 || matrix[0][j] === 0){
                matrix[i][j] = 0;
            }
        }
        if(firstCol===0){
            matrix[i][0] = 0;
        }
    }
};

//tags: Microsoft, Amazon, Facebook, Oracle

