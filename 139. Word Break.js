/*
Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words.

Note:

The same word in the dictionary may be reused multiple times in the segmentation.
You may assume the dictionary does not contain duplicate words.
Example 1:

Input: s = "leetcode", wordDict = ["leet", "code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".
Example 2:

Input: s = "applepenapple", wordDict = ["apple", "pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
             Note that you are allowed to reuse a dictionary word.
Example 3:

Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
Output: false
*/

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    let dp = new Array(s.length+1).fill(false);
    dp[0] = true;
    for (let i=0;i<s.length;i++) {
        for (let j=i;j>=0;j--) {
            const str = s.substring(j, i+1);
            if (dp[j] && wordDict.indexOf(str) !==-1) {
                dp[i+1] = true;
                break;
            }
        }
    }
    return dp[s.length];
};

//tags: Google, Facebook, Amazon, Bloomberg, Uber, Yahoo, Pocket Gems, Square, Coupang
