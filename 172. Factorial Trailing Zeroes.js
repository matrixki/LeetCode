/*
Given an integer n, return the number of trailing zeroes in n!.

Note: Your solution should be in logarithmic time complexity.

Credits:
Special thanks to @ts for adding this problem and creating all test cases.
*/

/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    // math problems: only need to count the number of factor 5
    if( n === 0 ) return 0;
    var result = 0;
    while( n ){
        n = Math.floor(n/5);
        result += n;
    }
    return result;
};