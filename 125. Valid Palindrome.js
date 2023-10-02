/*
Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

For example,
"A man, a plan, a canal: Panama" is a palindrome.
"race a car" is not a palindrome.

Note:
Have you consider that the string might be empty? This is a good question to ask during an interview.

For the purpose of this problem, we define empty string as valid palindrome.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const str = s.replace(/[^a-z0-9]/ig, "").toLowerCase();
    let start =0, end = str.length-1;
    while(start<end){
      if (str[start] !== str[end]) {
        return false;
      }
      start++, end--;
    }    
    return true;
};

//tags: Facebook, Yandex, Adobe, Apple, Yandex