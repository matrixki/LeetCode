/*
Given a pattern and a string str, find if str follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

Examples:
pattern = "abba", str = "dog cat cat dog" should return true.
pattern = "abba", str = "dog cat cat fish" should return false.
pattern = "aaaa", str = "dog cat cat dog" should return false.
pattern = "abba", str = "dog dog dog dog" should return false.
Notes:
You may assume pattern contains only lowercase letters, and str contains lowercase letters separated by a single space.

Credits:
Special thanks to @minglotus6 for adding this problem and creating all test cases.
*/

/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    var strarr = str.split(" ");
    if( pattern.length !== strarr.length ){ return false; }
    var lookup1 = new Map();
    var lookup2 = new Map();
    
    
    for(var i=0, len=pattern.length;i<len;i++){
        if( !lookup1.has( strarr[i] ) ){
            lookup1.set( strarr[i], pattern[i] );
        }
        else{
            if( lookup1.get(strarr[i]) !== pattern[i] ){
                return false;
            }
        }
        
        if( !lookup2.has( pattern[i] ) ){
            lookup2.set( pattern[i], strarr[i] );
        }
        else{
            if( lookup2.get(pattern[i]) !== strarr[i] ){
                return false;
            }
        }
    }
    return true;
};

//tags: Uber, Dropbox