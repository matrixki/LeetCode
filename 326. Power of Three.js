/*
Given an integer, write a function to determine if it is a power of three.

Follow up:
Could you do it without using any loop / recursion?

Credits:
Special thanks to @dietpepsi for adding this problem and creating all test cases.
*/

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if(n<=0){ return false; }
    else if(n===1){ return true; }
    var sum = 0;
    while(n%3===0){
        n = Math.floor(n/3);
    }
    return n===1;
};

//Math: since 3^19 is the max number in power of 3 within INT range
var isPowerOfThree = function(n) {
    if(n<=0){ return false; }
    var max = Math.pow(3, 19);
    return max%n===0;
};

//tags: Google