/*
Given a string, find the length of the longest substring without repeating characters.

Examples:

Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let start = 0, end = 0, result = 0;
    const len = s.length;
    let subStr = "";
    while (start < len && end < len) {
        if (subStr.indexOf(s[end]) !== -1) {
            subStr = subStr.substring(1);
            start++;
        } else {
            subStr = subStr + s[end];
            end++;
            result = Math.max(subStr.length, result);
        }
    }
    return result;
};

//tags: Amazon, Bloomberg, Facebook, Adobe, Tencent, Microsoft, Apple, Alibaba, Baidu, Google, Yelp, ebay
