/*
Given a List of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard like the image below.


American keyboard


Example 1:
Input: ["Hello", "Alaska", "Dad", "Peace"]
Output: ["Alaska", "Dad"]
Note:
You may use one character in the keyboard more than once.
You may assume the input string will only contain letters of alphabet.
*/


/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    var result = [];
    var lookup = [
        ['q','w','e','r','t','y','u','i','o','p'],
        ['a','s','d','f','g','h','j','k','l'],
        ['z','x','c','v','b','n','m']
    ];
    
    var length = words.length;    
    for(var i=0;i<length;i++){
        var word = words[i];
        var wlen = word.length;
        var innerlookup = [];
        for( var j=0;j<lookup.length;j++ ){
            var row = lookup[j];
            if( row.indexOf( word[0].toLowerCase() ) !== -1 ){
                innerlookup = row;
                break;
            }
        }
        
        var flag = true;
        for( var k=0;k<word.length;k++ ){
            if( innerlookup.indexOf(word[k].toLowerCase()) === -1 ){
                flag = false;    
            }
        }
        if(flag){
            result.push(word);
        }
    }
    return result;
};