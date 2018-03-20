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
    var firstRow = false, firstColumn = false;
    for( var i=0;i<m;i++ ){
        for( var j=0;j<n;j++ ){
            if( matrix[i][j] === 0 ){
                if( i === 0 ){
                    firstRow = true;
                }
                if( j === 0 ){
                    firstColumn = true;
                }
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }
    for( var i=1;i<m;i++ ){
        for( var j=1;j<n;j++ ){
            if( matrix[0][j] === 0 || matrix[i][0] === 0 ){
                matrix[i][j] = 0;
            }
        }
    }
    if(firstRow){
        for(var i=0;i<n;i++){
            matrix[0][i] = 0;
        }
    }
    if(firstColumn){
        for(var i=0;i<m;i++){
            matrix[i][0] = 0;
        }
    }
};

//tags: Microsoft, Amazon
