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
    let lookup = new Map();
    for (let i=0;i<magazine.length;i++) {
        const letter = magazine[i];
        if (!lookup.has(letter)) {
            lookup.set(letter, 1);
        } else {
            lookup.set( letter, lookup.get(letter)+1 );
        }
    }
    for (let j=0;j<ransomNote.length;j++) {
        const letter = ransomNote[j];
        if (!lookup.has(letter)) {
            return false;
        }
        if (lookup.get(letter) < 1) {
            return false;
        }
        lookup.set(letter, lookup.get(letter)-1);
    }
    return true;
};

//tags: Apple