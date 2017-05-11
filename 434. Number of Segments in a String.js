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
    // remove leading, trailing space
    s = s.trim();
    for(var i=0;i<s.length;i++){
    	// condition: all spaces
        if( s[i] !== ' ' ){
            flag = true;
        }
        if( s[i] !== ' ' && s[i+1] === ' ' ){
            count++;
        }
        // reach the end
        if( i=== (s.length-1) && i > 1 ){
            break;
        }        
    }
    return flag?(count+1):0;
};
