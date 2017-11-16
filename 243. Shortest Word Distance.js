/*
Given a list of words and two words word1 and word2, return the shortest distance between these two words in the list.

For example,
Assume that words = ["practice", "makes", "perfect", "coding", "makes"].

Given word1 = “coding”, word2 = “practice”, return 3.
Given word1 = "makes", word2 = "coding", return 1.

Note:
You may assume that word1 does not equal to word2, and word1 and word2 are both in the list.
*/

/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function(words, word1, word2) {
    var result = words.length;
    var p1 = -1, p2 = -1;
    for( var i=0;i<words.length;i++ ){
        if( words[i] === word1 ){
            p1 = i;
        }
        else if( words[i] === word2 ){
            p2 = i;
        }
        
        if( p1 > -1 && p2 > -1 ){
            var temp = Math.abs(p1-p2);
            if( temp < result ){
                result = temp;
            }
        }
    }
    return result;
};