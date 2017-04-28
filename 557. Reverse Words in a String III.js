/*
Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

Example 1:
Input: "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
Note: In the string, each word is separated by single space and there will not be any extra space in the string.
*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    var sArray = s.split(" "), result="";
    for(var i=0;i<sArray.length;i++){
        var cStr = sArray[i];
        var pointer = 0;
        while(pointer < cStr.length){
            result += cStr[cStr.length-1-pointer];
            pointer++;
        }
        
        if( i < (sArray.length-1) ){
            result += ' ';
        }
    }
    return result;
};