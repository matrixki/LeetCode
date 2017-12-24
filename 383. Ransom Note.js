/*
Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

Each letter in the magazine string can only be used once in your ransom note.

Note:
You may assume that both strings contain only lowercase letters.

canConstruct("a", "b") -> false
canConstruct("aa", "ab") -> false
canConstruct("aa", "aab") -> true
*/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    var lookup = new Map();
    for( word of magazine ){
        if( lookup.has( word ) ){
            lookup.set( word, lookup.get(word) + 1 );
        }
        else{
            lookup.set( word, 1 );
        }
    }
    for( w of ransomNote ){
        if( lookup.has(w) ){
            var count = lookup.get(w) - 1;
            if( count < 0 ){
                return false;
            }
            else{
                lookup.set( w, count );
            }
        }
        else{
            return false;
        }
    }
    return true;
};

//tags: Apple