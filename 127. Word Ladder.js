/*
Given two words (beginWord and endWord), and a dictionary's word list, find the length of shortest transformation sequence from beginWord to endWord, such that:

Only one letter can be changed at a time.
Each transformed word must exist in the word list. Note that beginWord is not a transformed word.
For example,

Given:
beginWord = "hit"
endWord = "cog"
wordList = ["hot","dot","dog","lot","log","cog"]
As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog",
return its length 5.

Note:
Return 0 if there is no such transformation sequence.
All words have the same length.
All words contain only lowercase alphabetic characters.
You may assume no duplicates in the word list.
You may assume beginWord and endWord are non-empty and are not the same.
UPDATE (2017/1/20):
The wordList parameter had been changed to a list of strings (instead of a set of strings). Please reload the code definition to get the latest changes.
*/

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    let queue = [], wordLen = beginWord.length;
    queue.push( [beginWord, 1] );
    let lookup = new Set(wordList);
    if(!lookup.has(endWord)){ return 0; }
    while(queue.length>0){
        let curr = queue.shift();
        let word = curr[0];
        let length = curr[1];
        if(word === endWord){
            return length;
        }
        for(let i=0;i<wordLen;i++){
            for(let j=0;j<26;j++){
                let str = word.substr(0,i)+String.fromCharCode(97+j)+word.substring(i+1);
                if(lookup.has(str)){
                    queue.push([str, length+1]);
                    lookup.delete(str);
                }
            }
        }
    }
    return 0;
};

//tags: Facebook, Amazon, Linkedin, Snapchat, Yelp, Google, Lyft, Salesforce, Square, Microsoft, Oracle, Uber, Affirm, Zillow

