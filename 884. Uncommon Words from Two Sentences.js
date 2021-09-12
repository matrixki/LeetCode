/*

A sentence is a string of single-space separated words where each word consists only of lowercase letters.

A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

Given two sentences s1 and s2, return a list of all the uncommon words. You may return the answer in any order.

 

Example 1:

Input: s1 = "this apple is sweet", s2 = "this apple is sour"
Output: ["sweet","sour"]
Example 2:

Input: s1 = "apple apple", s2 = "banana"
Output: ["banana"]
 

Constraints:

1 <= s1.length, s2.length <= 200
s1 and s2 consist of lowercase English letters and spaces.
s1 and s2 do not have leading or trailing spaces.
All the words in s1 and s2 are separated by a single space.

tags: Facebook, Google

*/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
 var uncommonFromSentences = function(s1, s2) {
    let words1 = s1.split(" ");
    let words2 = s2.split(" ");
    let dict = new Map();
    let result = [];
    for(let i=0;i<words1.length;i++){
        dict.set(words1[i], dict.has(words1[i]) ? dict.get(words1[i])+1 : 1);        
    }
    for(let i=0;i<words2.length;i++){
        dict.set(words2[i], dict.has(words2[i]) ? dict.get(words2[i])+1 : 1);        
    }
    for(let [key, val] of dict){
        if(val===1){
            result.push(key);
        }
    }
    return result;
};