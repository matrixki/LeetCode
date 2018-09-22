/*
Given a string S of digits, such as S = "123456579", we can split it into a Fibonacci-like sequence [123, 456, 579].

Formally, a Fibonacci-like sequence is a list F of non-negative integers such that:

0 <= F[i] <= 2^31 - 1, (that is, each integer fits a 32-bit signed integer type);
F.length >= 3;
and F[i] + F[i+1] = F[i+2] for all 0 <= i < F.length - 2.
Also, note that when splitting the string into pieces, each piece must not have extra leading zeroes, except if the piece is the number 0 itself.

Return any Fibonacci-like sequence split from S, or return [] if it cannot be done.

Example 1:

Input: "123456579"
Output: [123,456,579]
Example 2:

Input: "11235813"
Output: [1,1,2,3,5,8,13]
Example 3:

Input: "112358130"
Output: []
Explanation: The task is impossible.
Example 4:

Input: "0123"
Output: []
Explanation: Leading zeroes are not allowed, so "01", "2", "3" is not valid.
Example 5:

Input: "1101111"
Output: [110, 1, 111]
Explanation: The output [11, 0, 11, 11] would also be accepted.
Note:

1 <= S.length <= 200
S contains only digits.

*/

/**
 * @param {string} S
 * @return {number[]}
 */
var splitIntoFibonacci = function(S) {
    var len = S.length;
    var result = [];
    var int_max = Math.pow(2, 31) - 1;
    for(var i=1;i<=Math.floor(len/2);i++){
        for(var j=1;Math.max(i,j)<=(len-i-j);j++){
            if(split(i,j,S)){
                if(result.length>=3){
                    return result;    
                }
            }
            else{
                result = [];
            }
        }
    }
    return [];
    
    function split(i,j,S){
        if(S[0] === '0' && i>1){
            return false;
        }
        if(S[i] === '0' && j>1){
            return false;
        }
        var sum = '';
        var num1 = parseInt( S.substring(0,i) );
        var num2 = parseInt( S.substring(i, i+j) );
        if(num1 > int_max || num2 > int_max){
            return false;
        }
        result.push(num1);
        result.push(num2);
        for( var start = i+j;start!==S.length;start+=sum.length ){
            num2 = num2+num1;
            num1 = num2-num1;
            if(num1 > int_max || num2 > int_max){
                return false;
            }
            sum = num2.toString();
            if( !S.startsWith(sum, start) ){
                return false;
            }
            else{
                result.push( num2 );
            }
        }
        return true;
    }
};

//tags: Amazon
