/*
Given two sparse matrices A and B, return the result of AB.

You may assume that A's column number is equal to B's row number.

Example:

Input:

A = [
  [ 1, 0, 0],
  [-1, 0, 3]
]

B = [
  [ 7, 0, 0 ],
  [ 0, 0, 0 ],
  [ 0, 0, 1 ]
]

Output:

     |  1 0 0 |   | 7 0 0 |   |  7 0 0 |
AB = | -1 0 3 | x | 0 0 0 | = | -7 0 3 |
                  | 0 0 1 |
*/

/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var multiply = function(A, B) {
    //init result to zeros
    var result = [];    
    for(var i=0;i<A.length;i++){
        result[i] = [];
        for(var j=0;j<B[0].length;j++){
            result[i][j] = 0;
        }
    }
    for(var i=0;i<A.length;i++){
        for(var j=0;j<A[0].length;j++){
            if(A[i][j]!==0){
                for (var k=0; k<B[0].length; k++) {
                    if(B[j][k]!==0){
                        result[i][k] += A[i][j]*B[j][k]; 
                    }
                }
            }
        }
    }
    return result;
    
};

//tags: Bloomberg
