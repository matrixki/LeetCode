/*
Given a string which consists of lowercase or uppercase letters, find the length of the longest palindromes that can be built with those letters.

This is case sensitive, for example "Aa" is not considered a palindrome here.

Note:
Assume the length of given string will not exceed 1,010.

Example:

Input:
"abccccdd"

Output:
7

Explanation:
One longest palindrome that can be built is "dccaccd", whose length is 7.
*/

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    var lookup = new Map();
    for( var i=0, len=s.length;i<len;i++ ){
        if( lookup.has( s[i] ) ){
            var temp = lookup.get( s[i] );
            lookup.set( s[i], temp+1 );
        }
        else{
            lookup.set( s[i], 1 );
        }
    }
    var result = 0, single = 0;
    for (let [key, value] of lookup) {
        if( value%2 === 0 ){
            result+=value;
        }
        else{
            result += (value-1);
            single = 1;
        }
    }
    return result+single;
};

//tags: Google