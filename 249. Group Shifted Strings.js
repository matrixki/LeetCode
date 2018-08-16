/*
Given a string, we can "shift" each of its letter to its successive letter, for example: "abc" -> "bcd". We can keep "shifting" which forms the sequence:

"abc" -> "bcd" -> ... -> "xyz"
Given a list of strings which contains only lowercase alphabets, group all strings that belong to the same shifting sequence.

Example:

Input: ["abc", "bcd", "acef", "xyz", "az", "ba", "a", "z"],
Output: 
[
  ["abc","bcd","xyz"],
  ["az","ba"],
  ["acef"],
  ["a","z"]
]
*/

/**
 * @param {string[]} strings
 * @return {string[][]}
 */
var groupStrings = function(strings) {
    var result = [];
    var lookup = new Map();
    for(var i=0, len=strings.length;i<len;i++){
        var curr = strings[i];
        var s = '';
        for(var j=0, strlen = curr.length;j<strlen;j++){
            var temp = ( (curr[j].charCodeAt()+26 - curr[0].charCodeAt()) % 26 ).toString();
            s += temp+',';
        }
        if(lookup.has(s)){
            var val = lookup.get(s);
            val.push(curr);
            lookup.set(s, val);
        }
        else{
            lookup.set(s, [curr]);
        }
    }
    //iterate map
    for (var value of lookup.values()) {
        result.push(value);
    }
    return result;
};

//tags: Google, Apple
