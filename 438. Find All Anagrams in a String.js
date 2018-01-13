/*
Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.

Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.

The order of output does not matter.

Example 1:

Input:
s: "cbaebabacd" p: "abc"

Output:
[0, 6]

Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".
Example 2:

Input:
s: "abab" p: "ab"

Output:
[0, 1, 2]

Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".
*/

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    var plen = p.length;
    var lookup = {};
    var result = [];
    for(var i=0;i<plen;++i){
        lookup[ p[i] ] = lookup[ p[i] ] ? ++lookup[ p[i] ] : 1;
    }
    var checker = {};
    for( var i=0;i<plen;++i ){
        checker[ s[i] ] = checker[ s[i] ] ? ++checker[ s[i] ] : 1;
    }    
    
    for( var i=0;i<s.length-plen+1;++i ){
        var flag = true;
        for( var key in lookup ){
            if( lookup[key] !== checker[key]){
                flag = false;
            }
        }
        if(flag){ result.push(i) }
        --checker[ s[i] ];
        checker[ s[i+plen] ] = checker[ s[i+plen] ] ? ++checker[ s[i+plen] ] : 1;
    }
    return result;
};

//tags: Amazon