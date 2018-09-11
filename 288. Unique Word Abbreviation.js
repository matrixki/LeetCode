/*
An abbreviation of a word follows the form <first letter><number><last letter>. Below are some examples of word abbreviations:

a) it                      --> it    (no abbreviation)

     1
     ↓
b) d|o|g                   --> d1g

              1    1  1
     1---5----0----5--8
     ↓   ↓    ↓    ↓  ↓    
c) i|nternationalizatio|n  --> i18n

              1
     1---5----0
     ↓   ↓    ↓
d) l|ocalizatio|n          --> l10n
Assume you have a dictionary and given a word, find whether its abbreviation is unique in the dictionary. A word's abbreviation is unique if no other word from the dictionary has the same abbreviation.

Example:

Given dictionary = [ "deer", "door", "cake", "card" ]

isUnique("dear") -> false
isUnique("cart") -> true
isUnique("cane") -> false
isUnique("make") -> true
*/

/**
 * @param {string[]} dictionary
 */
var ValidWordAbbr = function(dictionary) {
    this.lookup = new Map();
    for(var i=0, len=dictionary.length;i<len;i++){
        var word = dictionary[i];
        var abbr = '';
        if(word.length<=2){
            abbr = word;
        }
        else{
            abbr = word[0]+(word.length-2).toString()+word[word.length-1];   
        }
        if(!this.lookup.has(abbr)){
            this.lookup.set(abbr, word);
        }
        else{
            if(this.lookup.get(abbr)!==word){
                this.lookup.set(abbr, '');
            }
        }
    }
};

/** 
 * @param {string} word
 * @return {boolean}
 */
ValidWordAbbr.prototype.isUnique = function(word) {
    var tmp =  word[0]+(word.length-2).toString()+word[word.length-1];
    return !this.lookup.has(tmp) || this.lookup.get(tmp)===word;    
};

/** 
 * Your ValidWordAbbr object will be instantiated and called as such:
 * var obj = Object.create(ValidWordAbbr).createNew(dictionary)
 * var param_1 = obj.isUnique(word)
 */

 //tags: Google
 