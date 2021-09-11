/*

Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2.

 

Example 1:

Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").
Example 2:

Input: s1 = "ab", s2 = "eidboaoo"
Output: false
 

Constraints:

1 <= s1.length, s2.length <= 104
s1 and s2 consist of lowercase English letters.

tags: Yandex, Adobe, Facebook, Microsoft

*/


/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 var checkInclusion = function(s1, s2) {
    let lookup = [];
    let len1 = s1.length, len2 = s2.length;
    if (len1 > len2) { 
        return false;
    }
    for(let i=0;i<len1;i++){
        lookup[s1[i].charCodeAt()-97] = lookup[s1[i].charCodeAt()-97] || 0;
        lookup[s2[i].charCodeAt()-97] = lookup[s2[i].charCodeAt()-97] || 0;
        lookup[s1[i].charCodeAt()-97]++;
        lookup[s2[i].charCodeAt()-97]--;
    }
    if(allZero(lookup)){
        return true;
    }
    for(let i=len1;i<len2;i++){
        lookup[s2[i].charCodeAt()-97] = lookup[s2[i].charCodeAt()-97] || 0;
        lookup[s2[i].charCodeAt()-97]--;
        lookup[s2[i-len1].charCodeAt()-97]++;
        if(allZero(lookup)){
            return true;
        }
    }
    
    return false;
};

let allZero = function(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i] && arr[i]!==0){
            return false;
        }
    }
    return true;
}