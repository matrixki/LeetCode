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
var longestPalindrome = function(s) {

   var result = '';
   for(var i =0;i<s.length;i++){
        if(result.length < 1){
            result = s[i];
        }
        if( s[i] === s[i+1] && result.length < 2 ){
           result = s[i] + s[i+1];
        }        
        if(i > 0){
            var oddStr = s[i], evenStr = '';
            // even case
            var j = 1;
            if(s[i]===s[i+1]){
                evenStr = s[i] + s[i+1];
                while( i-j >= 0 && i+j+1 < s.length ){
                    if( s[i-j] === s[i+j+1] ){
                        evenStr = s[i-j] + evenStr + s[i+j+1];
                        j++;                        
                   }
                    else{
                        break;
                    }
                }
            }
            // odd case
            j = 1;
            while( (i-j) >= 0 && (i+j) < s.length ){
                if(s[i-j] === s[i+j]){
                    oddStr = s[i-j] + oddStr + s[i+j];
                    j++;
                }
                else{
                    break;
                }
            }
            var subStr = oddStr.length >= evenStr.length ? oddStr : evenStr;
            if(subStr.length >= result.length){
                result = subStr;
            }            
        }
    }
    return result;
    
};
