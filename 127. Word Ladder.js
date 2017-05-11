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
    var queue = [], lookup = wordList;
    var found = false;
    if(beginWord ===endWord){ return 1; }
    queue.push([ beginWord, 1 ]);
    //Breadth First Search
    while(queue.length >0){
        // console.log(queue);
        var obj = queue.shift();
        var curr = obj[0];
        var length = obj[1];
        if( curr === endWord ){
            found = true;
            return length;
        }
        // only change one character
        for( var i=0;i<curr.length;i++ ){
            var newWord = curr;
            newWord = newWord.split('');
            for(var j=0;j<26;j++){
                newWord[i] = String.fromCharCode(97+j);
                var newStr = newWord.join('');
                if( lookup.indexOf( newStr ) !== -1 ){
                    // console.log(newStr); 
                    queue.push( [ newStr, length+1 ] );
                    var index = lookup.indexOf( newStr );
                    lookup.splice( index, 1 );
                }
            }
        }
    }
    if(!found){
        return 0;
    }
};