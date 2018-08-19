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

    var start = 0, end = 0, max = 0;
    var strlen = s.length;
    var substr = '';
    
    while( start < strlen && end < strlen ){
        if( substr.indexOf(s[end]) === -1 ){ // if substr doesn't contain
            substr = substr + s[end];
            end++;
            max = Math.max(max, end-start);
        }        
        else{ // if substr contain, drop top character
            substr = substr.replace(s[start],'');
            start++;
        }
    }
    
    return max;
};

//tags:// Amazon, Bloomberg, Facebook, Adobe, Tencent, Microsoft, Apple, Alibaba, Baidu, Google, Yelp, ebay
