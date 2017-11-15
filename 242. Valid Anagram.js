/*
Given two strings s and t, write a function to determine if t is an anagram of s.

For example,
s = "anagram", t = "nagaram", return true.
s = "rat", t = "car", return false.

Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length){ return false; }
    var lookup = {};
    for(var i=0, len=s.length;i<len;i++){
        var num = s[i];
        if( lookup[ s[i] ] ){
            lookup[ s[i] ]++;
        }
        else{
            lookup[ s[i] ] = 1;
        }
    }
    
    for(var j=0, len=t.length;j<len;j++){
        var num = t[j];
        if( lookup[ t[j] ] ){
            lookup[ t[j] ]--;
            if( lookup[ t[j] ] === 0 ){
                delete lookup[ t[j] ];
            }
            
        }
        else{
            return false;
        }    
    }
    return Object.keys(lookup).length > 0 ? false : true; 
};