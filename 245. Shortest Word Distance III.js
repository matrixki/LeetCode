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

tags :Google, LinkedIn

*/

/**
 * @param {string[]} wordsDict
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
 var shortestWordDistance = function(wordsDict, word1, word2) {
    let result = wordsDict.length;
    let p1 = -1, p2 = -1;
    let isSame = word1 === word2;
    for(let i=0;i<wordsDict.length;i++){
        if(wordsDict[i]===word1){
            if(isSame){
                p1 = p2;
                p2 = i;
            }
            else{
                p1 = i;   
            }
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

//tags: Linkedin
