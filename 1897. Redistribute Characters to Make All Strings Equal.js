/*
You are given an array of strings words (0-indexed).

In one operation, pick two distinct indices i and j, where words[i] is a non-empty string, and move any character from words[i] to any position in words[j].

Return true if you can make every string in words equal using any number of operations, and false otherwise.

 

Example 1:

Input: words = ["abc","aabc","bc"]
Output: true
Explanation: Move the first 'a' in words[1] to the front of words[2],
to make words[1] = "abc" and words[2] = "abc".
All the strings are now equal to "abc", so return true.
Example 2:

Input: words = ["ab","a"]
Output: false
Explanation: It is impossible to make all the strings equal using the operation.
 

Constraints:

1 <= words.length <= 100
1 <= words[i].length <= 100
words[i] consists of lowercase English letters.

*/

/**
 * @param {string[]} words
 * @return {boolean}
 */
 var makeEqual = function(words) {
    let len = words.length;
    let dict = {};
    for(let i=0;i<len;i++){
        let word = words[i];
        for(let j=0;j<word.length;j++){
            if(word[j] in dict){
                dict[word[j]] += 1;
            }
            else{
                dict[word[j]] = 1;
            }
        }
    }
    for (let val of Object.values(dict)) {
        if(val%len !== 0){
            return false;
        }
    }
    return true;
};