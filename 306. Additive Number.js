/*
Additive number is a string whose digits can form additive sequence.

A valid additive sequence should contain at least three numbers. Except for the first two numbers, each subsequent number in the sequence must be the sum of the preceding two.

Given a string containing only digits '0'-'9', write a function to determine if it's an additive number.

Note: Numbers in the additive sequence cannot have leading zeros, so sequence 1, 2, 03 or 1, 02, 3 is invalid.

Example 1:

Input: "112358"
Output: true 
Explanation: The digits can form an additive sequence: 1, 1, 2, 3, 5, 8. 
             1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5, 3 + 5 = 8
Example 2:

Input: "199100199"
Output: true 
Explanation: The additive sequence is: 1, 99, 100, 199. 
             1 + 99 = 100, 99 + 100 = 199
Follow up:
How would you handle overflow for very large input integers?
*/

/**
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber = function(num) {
    var len = num.length;
    for(var i=1;i<=Math.floor(len/2);i++){
        for(var j=1;Math.max(i,j)<=(len-i-j);j++){
            if( isValid(i, j, num) ){
                return true;
            }
        }
    }
    return false;
    
    function isValid(i, j, num){
        if( num.charAt(0) === '0' && i>1 ){
            return false;
        }
        if( num.charAt(i) === '0' && j>1 ){
            return false;
        }
        var sum = '';
        var num1 = parseInt( num.substring(0, i) );
        var num2 = parseInt( num.substring(i, i+j) );
        for( var start = i+j ;start!==num.length; start+=sum.length ){
            num2 = num1+num2;
            num1 = num2-num1;
            sum = num2.toString();
            if( !num.startsWith(sum,start) ){
                return false;
            }
        }
        return true;
    }
};

//tags: Epic Systems
