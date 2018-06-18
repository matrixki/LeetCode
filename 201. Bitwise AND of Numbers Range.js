/*
Given a range [m, n] where 0 <= m <= n <= 2147483647, return the bitwise AND of all numbers in this range, inclusive.

Example 1:

Input: [5,7]
Output: 4
Example 2:

Input: [0,1]
Output: 0
*/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function(m, n) {
    if(m===0){
        return 0;
    }    
    var move = 1;
    while(m!==n){
        m = m >> 1;
        n = n >> 1;
        move = move << 1;
    }
    return m*move;
};

