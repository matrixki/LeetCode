/*
Given a string, determine if a permutation of the string could form a palindrome.

For example,
"code" -> False, "aab" -> True, "carerac" -> True.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {
    var lookup = [];
    for(var i=0, len = s.length;i<len;i++){
        if( lookup[ s[i] ] ){
            lookup[ s[i] ]++;
        }
        else{
            lookup[ s[i] ] = 1;
        }
    }
    var oddcount = 0;
    for( var j in lookup ){
        if( lookup[j]%2 === 1 ){
            oddcount++;
        }
    }
    return oddcount<2;
};

// tags: Google, Bloomberg, Uber 