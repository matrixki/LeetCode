/* 
Given a non-empty string check if it can be constructed by taking a substring of it and appending multiple copies of the substring together. You may assume the given string consists of lowercase English letters only and its length will not exceed 10000.

 

Example 1:

Input: "abab"
Output: True
Explanation: It's the substring "ab" twice.
Example 2:

Input: "aba"
Output: False
Example 3:

Input: "abcabcabcabc"
Output: True
Explanation: It's the substring "abc" four times. (And the substring "abcabc" twice.)
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    let len = s.length;
    for(let i=Math.floor(len/2);i>=1;i--){
        if( len % i === 0 ){
            let count = Math.floor(len/i);
            let str = '';
            for(let j=0;j<count;j++){
                str += s.substring(0,i);
            }
            if( s === str ){
                return true;
            }
        }
    }
    return false;
};

//tags: Google
