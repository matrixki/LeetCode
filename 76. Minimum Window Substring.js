/*

Given two strings s and t of lengths m and n respectively, return the minimum window 
substring
 of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.

 

Example 1:

Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
Example 2:

Input: s = "a", t = "a"
Output: "a"
Explanation: The entire string s is the minimum window.
Example 3:

Input: s = "a", t = "aa"
Output: ""
Explanation: Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string.
 

Constraints:

m == s.length
n == t.length
1 <= m, n <= 105
s and t consist of uppercase and lowercase English letters.
 

Follow up: Could you find an algorithm that runs in O(m + n) time?

*/

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let l = 0, r = 0;
    let count = 0, leftIndex = s.length+1, minLength = s.length+1;
    let lookup = new Map();
    for (let i=0;i<t.length;i++) {
        lookup.set(t[i], (lookup.get(t[i]) || 0)+1 );
    }
    while (r<s.length) {
        if (lookup.has(s[r])) {
            const curr = lookup.get(s[r]);
            if (curr >= 1) {
                count++;
            }
            lookup.set( s[r], curr-1);
        }
        r+=1;
        while (count === t.length) {
            if ( (r-l) < minLength) {
                leftIndex = l;
                minLength = r-l;
            }
            if (lookup.has(s[l])) {
                const curr = lookup.get(s[l]);
                if (curr >= 0) {
                    count-=1;
                }
                lookup.set( s[l], curr+1 );
            }
            l+=1;
        }
    }
    return s.substring(leftIndex, leftIndex + minLength);
};

//tags: Amazon, Adobe, Yandex