/*
Count the number of segments in a string, where a segment is defined to be a contiguous sequence of non-space characters.

Please note that the string does not contain any non-printable characters.

Example:

Input: "Hello, my name is John"
Output: 5
*/

/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    var count =0, flag=false;
    s = s.trim();
    for(var i=0;i<s.length;i++){
        // check if no space in the str
        if( s[i] !== ' ' ){
            flag = true;
        }
        if( s[i-1] !== ' ' && s[i] === ' ' ){
            count++;
        }
    }
    return flag?(count+1):0;
};
