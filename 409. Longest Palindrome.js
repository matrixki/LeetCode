/*
Given a string which consists of lowercase or uppercase letters, find the length of the longest palindromes that can be built with those letters.

This is case sensitive, for example "Aa" is not considered a palindrome here.

Note:
Assume the length of given string will not exceed 1,010.

Example:

Input:
"abccccdd"

Output:
7

Explanation:
One longest palindrome that can be built is "dccaccd", whose length is 7.
*/

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let lookup = new Map();
    for (let i=0;i<s.length;i++) {
        lookup.set( s[i], (lookup.get(s[i]) || 0) +1 );
    }
    const lookupArr = Array.from(lookup).map((item)=> item[1]);
    let count = 0, oddFlag = false;
    for (let num of lookupArr) {
        if (num%2 === 0) {
            count += num;
        } else {
            oddFlag = true;
            count += (num-1);
        }
    }
    return oddFlag ? count+1 : count
};

//tags: Google, Amazon, Apple