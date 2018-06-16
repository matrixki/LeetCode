/*
All DNA is composed of a series of nucleotides abbreviated as A, C, G, and T, for example: "ACGAATTCCG". When studying DNA, it is sometimes useful to identify repeated sequences within the DNA.

Write a function to find all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule.

Example:

Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"

Output: ["AAAAACCCCC", "CCCCCAAAAA"]

*/

/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    var result = [];
    var lookup = new Set();
    for(var i=0, len=s.length;i<=len-10;i++){
        var current = s.substring(i,i+10);
        if(lookup.has(current) && result.indexOf(current)===-1){
            result.push(current);
        }
        else{
            lookup.add(current);
        }
    }
    return result;
};

/* bitwise solution to save memory */
var findRepeatedDnaSequences = function(s) {
    var result = [];
    var letterMap = new Map();
    letterMap.set('A',0);
    letterMap.set('C',1);
    letterMap.set('G',2);
    letterMap.set('T',3);
    
    var lookup = new Set();
    var tmp = 0;
    for(var i=0, len=s.length;i<len;i++){
        tmp = (tmp << 2) + letterMap.get(s[i]);
        if(i>=9){
            tmp = tmp & ((1 << 20) - 1);
            if( lookup.has(tmp) && result.indexOf(s.substring(i-9,i+1)) === -1){
                result.push( s.substring(i-9,i+1) );
            }
            else{
                lookup.add(tmp);
            }
        }
    }
    return result;
};

//tags: Linkedin