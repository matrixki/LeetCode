/*
Given a list of words (without duplicates), please write a program that returns all concatenated words in the given list of words.
A concatenated word is defined as a string that is comprised entirely of at least two shorter words in the given array.

Example:
Input: ["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"]

Output: ["catsdogcats","dogcatsdog","ratcatdogcat"]

Explanation: "catsdogcats" can be concatenated by "cats", "dog" and "cats"; 
 "dogcatsdog" can be concatenated by "dog", "cats" and "dog"; 
"ratcatdogcat" can be concatenated by "rat", "cat", "dog" and "cat".
Note:
The number of elements of the given array will not exceed 10,000
The length sum of elements in the given array will not exceed 600,000.
All the input string will only include lower case letters.
The returned elements order does not matter.
*/

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findAllConcatenatedWordsInADict = function(words) {
    let dict = new Set();
    let result = [];
    for(let i=0;i<words.length;i++){
        if(words[i]!==""){
            dict.add(words[i]);
        }
    }
    for(let i=0;i<words.length;i++){
        if(helper(words[i])){
            result.push(words[i]);
        }
    }
    return result;

    function helper(word){
        for(let j=1;j<=word.length;j++){
            let first = word.substring(0,j);
            let second = word.substring(j);
            if(dict.has(first)&&dict.has(second)){
                return true;
            }
            if(dict.has(first)&&helper(second)){
                return true;
            }
            if(dict.has(second)&&helper(first)){
                return true;
            }
        }
        return false;
    }
};

//tags: Amazon
