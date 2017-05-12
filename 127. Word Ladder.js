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
    var queue = [], wordLen = beginWord.length;
    queue.push([ beginWord, 1 ]);
    // use set for better time performance
    var lookup = new Set(wordList);
    if( !lookup.has(endWord) ){ return 0; }
    //Breadth First Search
    while(queue.length >0){
        var obj = queue.shift();
        var curr = obj[0];
        var length = obj[1];
        if( curr === endWord ){
            return length;
        }
        // only change one character
        for( var i=0;i<wordLen;i++ ){
            for(var j=0;j<26;j++){
                // replace one character at index i
                var newStr = curr.substr(0,i)+String.fromCharCode(97+j)+curr.substring(i+1);
                // check if exists in the lookup
                if( lookup.has(newStr) ){
                    queue.push( [ newStr, length+1 ] );
                    lookup.delete(newStr);
                }
            }
        }
    }
    return 0;
};