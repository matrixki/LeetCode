/*

Given a string s, return true if the s can be palindrome after deleting at most one character from it.

 

Example 1:

Input: s = "aba"
Output: true
Example 2:

Input: s = "abca"
Output: true
Explanation: You could delete the character 'c'.
Example 3:

Input: s = "abc"
Output: false
 

Constraints:

1 <= s.length <= 105
s consists of lowercase English letters.

tags: Facebook, Google, Apple, Amazon, Microsoft, Bloomberg, Oracle

*/

/**
 * @param {string} s
 * @return {boolean}
 */
 var validPalindrome = function(s) {
    let left = 0, right = s.length-1;
    while(left<right){
        if(s[left] !== s[right]){
            const takeLeft = s.substring(0, left) + s.substring(left+1);
            const takeRight = s.substring(0, right) + s.substring(right+1);
            return takeLeft === reverse(takeLeft) || takeRight === reverse(takeRight);
        }
        left++;
        right--;
    }
    return true;
};

function reverse(s){
    let result = "";
    for(let i=s.length-1;i>=0;i--){
        result += s[i];
    }
    return result;
}