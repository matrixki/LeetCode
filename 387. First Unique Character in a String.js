/*
Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
Note: You may assume the string contain only lowercase letters.
*/

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    var length = s.length;
    var lookup = new Array(26);
    lookup.fill(0);
    for(var i=0; i<length ;i++){
        lookup[ s.charCodeAt(i) - 97 ]++;
    }
    for(i=0;i<length;i++){
        if( lookup[ s.charCodeAt(i) - 97 ] === 1 ){
            return i;
        }
    }
    
    return -1;
};