/*
Given a string and an integer k, you need to reverse the first k characters for every 2k characters counting from the start of the string. If there are less than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and left the other as original.
Example:
Input: s = "abcdefg", k = 2
Output: "bacdfeg"
Restrictions:
The string consists of lower English letters only.
Length of the given string and k will in the range [1, 10000]
*/

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    var slen = s.length, pointer = 0, result='', flag = true;
    while(pointer < slen){
        if(flag){
            var substr = s.substr(pointer, k);
            for(var i=0;i<substr.length;i++){
                result += substr[substr.length-1-i];
            }
            pointer += k;
            flag = false;
        }
        else{
            result += s[pointer];
            pointer++;
            if(pointer% (2*k) === 0){
                flag = true;
            }
        }
    }
    return result;
};
