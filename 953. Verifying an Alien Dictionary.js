/*

In an alien language, surprisingly, they also use English lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.

Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographically in this alien language.

 

Example 1:

Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
Output: true
Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.
Example 2:

Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
Output: false
Explanation: As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted.
Example 3:

Input: words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
Output: false
Explanation: The first three characters "app" match, and the second string is shorter (in size.) According to lexicographical rules "apple" > "app", because 'l' > '∅', where '∅' is defined as the blank character which is less than any other character (More info).
 

Constraints:

1 <= words.length <= 100
1 <= words[i].length <= 20
order.length == 26
All characters in words[i] and order are English lowercase letters.

tags: Facebook, Walmart Labs, eBay, DE Shaw

*/

/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
 var isAlienSorted = function(words, order) {
    let lookup = [];
    for(let i=0;i<order.length;i++){
        lookup[ order[i].charCodeAt() - 97 ] = i;
    }
    
    function isBigger(s1, s2){
        let len1 = s1.length, len2 = s2.length;
        for(let i=0;i<len1 && i<len2;i++){
            if(s1[i] !== s2[i]){
                return lookup[s1[i].charCodeAt() - 97] > lookup[s2[i].charCodeAt() - 97];
            }
        }
        return len1 > len2;
    }
    
    for(let i=1;i<words.length;i++){
        if(isBigger(words[i-1], words[i])){
            return false;
        }
    }
    return true;
};
