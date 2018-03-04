/*
Given an array of strings, group anagrams together.

For example, given: ["eat", "tea", "tan", "ate", "nat", "bat"], 
Return:

[
  ["ate", "eat","tea"],
  ["nat","tan"],
  ["bat"]
]
Note: All inputs will be in lower-case.
*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    var map = new Map();
    var result = [];
    for( str of strs ){
        var sortedStr = str.split('').sort().join('');
        if( map.has(sortedStr) ){
            var temp = map.get(sortedStr);
            temp.push(str);
            map.set( sortedStr, temp );
        }
        else{
            map.set( sortedStr, [ str ] );
        }
    }
    for( var value of map.values() ){
        result.push( value );
    }
    return result;
};

//tags: Facebook, Amazon, Bloomberg, Uber, Yelp