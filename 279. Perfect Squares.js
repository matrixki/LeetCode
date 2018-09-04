/*
Given a positive integer n, find the least number of perfect square numbers (for example, 1, 4, 9, 16, ...) which sum to n.

Example 1:

Input: n = 12
Output: 3 
Explanation: 12 = 4 + 4 + 4.
Example 2:

Input: n = 13
Output: 2
Explanation: 13 = 4 + 9.
*/

/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    var result = [];
    result.length = n;
    result.fill(Number.MAX_SAFE_INTEGER);
    result[0] = 0;
    for(var i=1;i<=n;i++){
        var temp = Number.MAX_SAFE_INTEGER;
        var j = 1;
        while(i>=j*j){
            temp = Math.min( temp, result[i-j*j]+1 );
            j++;
        }
        result[i] = temp;
    }
    return result[n];
};

//tags: Google
