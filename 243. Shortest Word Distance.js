/*
Given a list of words and two words word1 and word2, return the shortest distance between these two words in the list.

For example,
Assume that words = ["practice", "makes", "perfect", "coding", "makes"].

Given word1 = “coding”, word2 = “practice”, return 3.
Given word1 = "makes", word2 = "coding", return 1.

Note:
You may assume that word1 does not equal to word2, and word1 and word2 are both in the list.

tags: LinkedIn, Amazon, Goldman Sachs, Indeed, Uber, Salesforce, DiDi

*/

/**
 * @param {string[]} wordsDict
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
 var shortestDistance = function(wordsDict, word1, word2) {
    let result = wordsDict.length;
    let p1 = -1, p2 = -1;
    for(let i=0;i<wordsDict.length;i++){
        if(wordsDict[i]===word1){
            p1 = i;
        }
        if(wordsDict[i]===word2){
            p2 = i;
        }
        if(p1 !== -1 && p2 !== -1){
            const distance = Math.abs(p1-p2);
            result = Math.min(result, distance)
        }
    }
    return result;
};