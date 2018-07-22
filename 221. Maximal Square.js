/*
Given a 2D binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

Example:

Input: 

1 0 1 0 0
1 0 1 1 1
1 1 1 1 1
1 0 0 1 0

Output: 4
*/

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    var m = matrix.length;
    if(!m){ return 0; }
    var n = matrix[0].length;
    var size = [];
    for(var i=0;i<m;i++){
        size[i] = [];
        for(var j=0;j<n;j++){
            size[i][j] = 0;
        }
    }
    var maxsize = 0;
    for(var j=0;j<n;j++){
        size[0][j] = matrix[0][j] - '0';
        maxsize = Math.max(maxsize, size[0][j]);
    }
    for(var i=0;i<m;i++){
        size[i][0] = matrix[i][0] - '0';
        maxsize = Math.max(maxsize, size[i][0]);
    }
    for(var i=1;i<m;i++){
        for(var j=1;j<n;j++){
            if(matrix[i][j] === '1'){
                size[i][j] = Math.min( size[i-1][j-1], Math.min( size[i-1][j], size[i][j-1] ) ) +1;
                maxsize = Math.max(maxsize, size[i][j]);
            }
        }
    }
    return maxsize*maxsize;
};

//tags: Facebook, Apple, Airbnb
