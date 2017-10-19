/*
Write a function that takes an unsigned integer and returns the number of ’1' bits it has (also known as the Hamming weight).

For example, the 32-bit integer ’11' has binary representation 00000000000000000000000000001011, so the function should return 3.

Credits:
Special thanks to @ts for adding this problem and creating all test cases.
*/

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    var nStr = n.toString(2);
    var result = 0;
    for(var i=0;i<nStr.length;i++){
        if(nStr[i]==='1'){
            result++;
        }
    }
    return result;
};

var hammingWeight = function(n) {
    var result = 0;
    while(n!==0){
        n = n&(n-1);
        result++;
    }
    return result;
};