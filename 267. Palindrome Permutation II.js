/*
Given a string s, return all the palindromic permutations (without duplicates) of it. Return an empty list if no palindromic permutation could be form.

Example 1:

Input: "aabb"
Output: ["abba", "baab"]
Example 2:

Input: "abc"
Output: []

*/

/**
 * @param {string} s
 * @return {string[]}
 */
var generatePalindromes = function(s) {
    var lookup = new Map();
    var odd = 0;
    
    // build map
    for(var i=0, len=s.length;i<len;i++){
        if(lookup.has(s[i])){
            lookup.set( s[i], lookup.get(s[i])+1 );
        }
        else{
            lookup.set( s[i], 1 );
        }
        odd += lookup.get(s[i])%2!==0 ? 1 : -1;
    }
    if(odd>1){
        return [];
    }
    
    // half permutation
    var mid = '';
    var chars = [];
    lookup.forEach(function(value, key, map){
        if(value%2!==0){
            mid += key;
        }
        for(var i=0;i<Math.floor(value/2);i++){
            chars.push(key);
        }
    });
    
    // generate permutation
    var result = [];
    var used = [];
    used.length = chars.length;
    helper(chars, mid, '', used, result);
    return result;
    
    function helper(chars, mid, str, used, result){
        if(str.length === chars.length){
            result.push(str+mid+str.split("").reverse().join(""));
            return;
        }
        for(var i=0, len=chars.length;i<len;i++){
            if(i>0 && chars[i]===chars[i-1] && !used[i-1]){
                continue;
            }
            if(!used[i]){
                used[i] = true;
                str += chars[i];
                helper(chars, mid, str, used, result);
                used[i] = false;
                str = str.substring(0, str.length-1);                
            }
        }
    }
};

//tags: Uber
