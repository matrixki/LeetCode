/*
Given two strings s and t, determine if they are isomorphic.

Two strings are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.

For example,
Given "egg", "add", return true.

Given "foo", "bar", return false.

Given "paper", "title", return true.

Note:
You may assume both s and t have the same length.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const lookups = {};
    const lookupt = {};
    for (var i = 0, l = s.length; i < l; i++) {
        if( lookups[s[i]] === undefined && lookupt[t[i]] === undefined ){
            lookups[s[i]] = t[i];
            lookupt[t[i]] = s[i];
        }
        else{
            if( lookups[s[i]] !== t[i] ){
                return false;
            }
        }
    }
    return true;
};