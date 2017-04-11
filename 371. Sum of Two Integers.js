/*
Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.

Example:
Given a = 1 and b = 2, return 3.
*/

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    
    // case 0:
    if(b===0){return a}
    if(a===0){return b}  

    // bitwise operation
    while(b!==0){
        var carry = a&b; // carry means the bit which is 1+1, AND operator

        a = a^b;         //XOR operator make sure it's 0+1

        b = carry << 1;  //bit left shift
    }
    return a;
};