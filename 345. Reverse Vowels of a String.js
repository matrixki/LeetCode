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
    var start =0, end = s.length-1, left='', right='', sa = s.split('');
    var dict = [ 'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U' ];
    
    while( start<end ){
        if( dict.indexOf(sa[start]) !== -1 ){
            left = sa[start];
        }
        else{
            start++;
        }
        if(dict.indexOf(sa[end]) !== -1 ){
            right = sa[end];
        }
        else{
            end--;
        }
        if( left !== '' && right !=='' ){
            sa[start] = right;
            sa[end] = left;
            start++;
            end--;
            left = right = '';
        }
    }
    return sa.join('');
};