/*

Given a string s, remove duplicate letters so that every letter appears once and only once. You must make sure your result is the smallest in lexicographical order among all possible results.

 

Example 1:

Input: s = "bcabc"
Output: "abc"
Example 2:

Input: s = "cbacdcbc"
Output: "acdb"
 

Constraints:

1 <= s.length <= 104
s consists of lowercase English letters.
 

Note: This question is the same as 1081: https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/

tags: Amazon, Bloomberg, Facebook, Apple, Google

*/

/**
 * @param {string} s
 * @return {string}
 */
 var removeDuplicateLetters = function(s) {
    let lookup = [];
    for(let i=0;i<s.length;i++){
        let char  = s[i];
        if(lookup.indexOf(char) > -1){
            continue;
        }
        while(lookup.length > 0 && lookup[lookup.length-1] > char && s.indexOf(lookup[lookup.length-1], i) > i){
            lookup.pop();
        }
        lookup.push(char);
    }
    return lookup.join("");
};