/*
Given a string array words, find the maximum value of length(word[i]) * length(word[j]) where the two words do not share common letters. You may assume that each word will contain only lower case letters. If no such two words exist, return 0.

Example 1:

Input: ["abcw","baz","foo","bar","xtfn","abcdef"]
Output: 16 
Explanation: The two words can be "abcw", "xtfn".
Example 2:

Input: ["a","ab","abc","d","cd","bcd","abcd"]
Output: 4 
Explanation: The two words can be "ab", "cd".
Example 3:

Input: ["a","aa","aaa","aaaa"]
Output: 0 
Explanation: No such pair of words.
*/

/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
    if(!words || words.length===0){
        return 0;
    }    
    var len = words.length;
    var val = [];
    val.length = len;
    for(var i=0;i<len;i++){
        var curr = words[i];
        val[i] = 0;
        for(var j=0, wordlen = curr.length;j<wordlen;j++){
            var num = 1 << curr.charCodeAt(j) - 'a'.charCodeAt(0);
            val[i] = val[i] | num;
        }
    }
    var max = 0;
    for(var i=0;i<len;i++){
        for(var j=i+1;j<len;j++){
            if( (val[i]&val[j])===0 && (words[i].length*words[j].length > max) ){
                max = words[i].length*words[j].length;
            }
        }
    }
    return max;
};

//tags: Google, Works Applications
