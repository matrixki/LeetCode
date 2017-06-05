/*
Given a positive integer, output its complement number. The complement strategy is to flip the bits of its binary representation.

Note:
The given integer is guaranteed to fit within the range of a 32-bit signed integer.
You could assume no leading zero bit in the integer’s binary representation.
Example 1:
Input: 5
Output: 2
Explanation: The binary representation of 5 is 101 (no leading zero bits), and its complement is 010. So you need to output 2.
Example 2:
Input: 1
Output: 0
Explanation: The binary representation of 1 is 1 (no leading zero bits), and its complement is 0. So you need to output 0.
*/


/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    var copy = num;
    var ones = 1;
    while(copy>1){
        copy = copy >>> 1;
        ones = (ones << 1) | 1;
    }
    return num ^ ones;
};

/* faster just a little... */
var findComplement = function(num) {
    var result = [];
    var bitstr = num.toString(2);
    var length = bitstr.length
    for(var i=0;i<length;i++){
        if( bitstr[i] === '1' ){
            result.push('0');
        }
        else{
            result.push('1');
        }
    }
    var str = result.join('');
    return parseInt(str,2);
};