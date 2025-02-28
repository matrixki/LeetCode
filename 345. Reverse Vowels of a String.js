/*
Write a function that takes a string as input and reverse only the vowels of a string.

Example 1:
Given s = "hello", return "holle".

Example 2:
Given s = "leetcode", return "leotcede".

Note:
The vowels does not include the letter "y".
*/


/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let left = 0, right = s.length-1, strL = "", strR = "", strArr = s.split("");
    const VOWELS = "aeiouAEIOU";
    while (left <right) {
        if( VOWELS.indexOf(strArr[left]) !== -1 ) {
            strL = strArr[left];
        } else {
            left++;
        }

        if (VOWELS.indexOf(strArr[right]) !== -1) {
            strR = strArr[right];
        } else {
            right--;
        }

        if (strL !== "" && strR !== "") {
            // swap
            strArr[left] = strR;
            strArr[right] = strL;
            strL = "";
            strR = "";
            left++;
            right--;
        }
    }
    return strArr.join("");
};