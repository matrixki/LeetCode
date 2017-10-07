/*
Given a positive integer, return its corresponding column title as appear in an Excel sheet.

For example:

    1 -> A
    2 -> B
    3 -> C
    ...
    26 -> Z
    27 -> AA
    28 -> AB 
Credits:
Special thanks to @ifanchu for adding this problem and creating all test cases.
*/

/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    var dict =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z' ];
    var result = '';
    if( n<=26 ){
        return dict[n-1];
    }
    while( n ){
        var val = (n-1)%26;
        result = dict[val] + result;
        n = Math.floor( (n-1) /26 );
    }
    return result;    
};
