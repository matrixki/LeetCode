/*
Compare two version numbers version1 and version2.
If version1 > version2 return 1; if version1 < version2 return -1;otherwise return 0.

You may assume that the version strings are non-empty and contain only digits and the . character.
The . character does not represent a decimal point and is used to separate number sequences.
For instance, 2.5 is not "two and a half" or "half way to version three", it is the fifth second-level revision of the second first-level revision.

Example 1:

Input: version1 = "0.1", version2 = "1.1"
Output: -1
Example 2:

Input: version1 = "1.0.1", version2 = "1"
Output: 1
Example 3:

Input: version1 = "7.5.2.4", version2 = "7.5.3"
Output: -1
*/

/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    var a1 = version1.split('.');
    var a2 = version2.split('.');
    for(var i=0, len = Math.max( a1.length, a2.length );i<len;i++){
        var n1 = i<a1.length?parseInt(a1[i]):0;
        var n2 = i<a2.length?parseInt(a2[i]):0;
        if( n1 < n2 ){
            return -1;
        }
        else if( n1 > n2 ){
            return 1;
        }
    }
    return 0;    
};

//tags: Microsoft, Apple
