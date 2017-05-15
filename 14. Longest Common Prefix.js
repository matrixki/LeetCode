/*
Write a function to find the longest common prefix string amongst an array of strings.
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs === '' || strs.length === 0){ return ""; }

    var result = strs[0], i=1;
    while(i<strs.length){
        while(strs[i].indexOf(result) !== 0){
            result = result.substring(0, result.length-1);
        }
        i++;
    }
    return result ? result : '';
};