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
