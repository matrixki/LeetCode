/*
Related to question Excel Sheet Column Title

Given a column title as appear in an Excel sheet, return its corresponding column number.

For example:

    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28 
Credits:
Special thanks to @ts for adding this problem and creating all test cases.
*/

/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    var result = 0, exp = s.length -1;
    for( var i=0;i<s.length;i++ ){
        var val = s[i].charCodeAt() - 64;
        result += val*Math.pow(26,exp--);
    }
    return result;
};