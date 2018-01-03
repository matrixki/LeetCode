/*
Given a non-empty string s and an abbreviation abbr, return whether the string matches with the given abbreviation.

A string such as "word" contains only the following valid abbreviations:

["word", "1ord", "w1rd", "wo1d", "wor1", "2rd", "w2d", "wo2", "1o1d", "1or1", "w1r1", "1o2", "2r1", "3d", "w3", "4"]
Notice that only the above abbreviations are valid abbreviations of the string "word". Any other string is not a valid abbreviation of "word".

Note:
Assume s contains only lowercase letters and abbr contains only lowercase letters and digits.

Example 1:
Given s = "internationalization", abbr = "i12iz4n":

Return true.
Example 2:
Given s = "apple", abbr = "a2e":

Return false.
*/

/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
var validWordAbbreviation = function(word, abbr) {
    if(word.length < abbr.length){ return false; }
    var temp = '';
    var count = 0, loc = 0;
    var alen = abbr.length;
    var wlen = word.length;
    for( var i=0;i<alen;i++ ){
        var current = abbr[i];
        var currentInt = parseInt(current);
        if( !isNaN(currentInt) ){
            if( currentInt === 0 && count === 0 ){
                return false;
            }
            count = count*10 + currentInt;
        }
        else{
            loc += count;
            count=0;
            if( loc >= wlen || word[loc] !== current ){
                return false;
            }
            loc += 1;
        }
    }
    return loc+count === wlen;
};