/*
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example:

Input: "babad"

Output: "bab"

Note: "aba" is also a valid answer.
Example:

Input: "cbbd"

Output: "bb"
*/


/**
 * @param {string} s
 * @return {string}
 */
// update 20170829
var longestPalindrome = function(s) {

    let len = s.length;
    if(len<=1){
       return s;
    }
    else if(len===2 && s[0]===s[1]){
        return s;
    }
    
    let result = '';
    for(let i=0;i<len;i++){
        let temp1 = palinDromeCircle(s,i,i);
        let temp2 = palinDromeCircle(s,i,i+1);
        let temp = (temp1.right-temp1.left)>(temp2.right-temp2.left)?temp1:temp2; 
        if( (temp.right-temp.left+1) > result.length ){
            result = s.substring(temp.left, temp.right+1);
        }
    }
    return result;
};

function palinDromeCircle(s, left, right){
    while( s[left] === s[right] && left >=0 && right < s.length ){
        left--;
        right++;
    }
    return {
        left: left+1,
        right: right-1
    };
}


/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    let maxLen = 0, low;
    if(s.length<=1){ return s; }
    for(let i=0;i<s.length-1;i++){
        //odd
        findPalindrome(s, i, i);
        //even
        findPalindrome(s, i, i+1);
    }
    return s.substring(low, low+maxLen);
    
    function findPalindrome(s, left, right){
        while(left>=0 && right<s.length && s[left]===s[right]){
            left--;
            right++;
        }
        if( right-left-1 > maxLen ){
            low = left+1;
            maxLen = right-left-1;
        }
    }
};
