/*
Given a list of words and two words word1 and word2, return the shortest distance between these two words in the list.

word1 and word2 may be the same and they represent two individual words in the list.

Example:
Assume that words = ["practice", "makes", "perfect", "coding", "makes"].

Input: word1 = “makes”, word2 = “coding”
Output: 1
Input: word1 = "makes", word2 = "makes"
Output: 3
Note:
You may assume word1 and word2 are both in the list.


*/

/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestWordDistance = function(words, word1, word2) {
    var result = Number.MAX_SAFE_INTEGER;
    var i1 = result, i2 = -result;
    var isSame = word1===word2;
    for(var i=0, len=words.length;i<len;i++){
        var curr = words[i];
        if(curr===word1){
            if(isSame){
                i1 = i2;
                i2 = i;
            }
            else{
                i1 = i;
            }
        }
        else if(curr===word2){
            i2 = i;
        }
        result = Math.min( result, Math.abs(i1-i2) );
    }
    return result;
};

//tags: Linkedin
