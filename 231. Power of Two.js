/*
Given an integer, write a function to determine if it is a power of two.
*/

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(n<=0) return false;
    if(n<=2) return true;
    while(n>1){
        n = n /2;
    }
    return n === 1 ? true : false;
};

/* bitwise n&(n-1) */
var isPowerOfTwo = function(n) {
    if(n<=0) return false;
    return parseInt(n&(n-1))===0 ? true:false;
};