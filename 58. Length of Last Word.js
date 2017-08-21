/*
Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.

If the last word does not exist, return 0.

Note: A word is defined as a character sequence consists of non-space characters only.

For example, 
Given s = "Hello World",
return 5.
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var len = s.length;
    var count = 0, emptyFlag = false;
    for(var i=0;i<len;i++){
        if(s[i]!==' '){
            if(emptyFlag){
                count = 1;
                emptyFlag = false;
            }
            else{
                count++;
            }       
        }
        else{
            emptyFlag = true;
        }
    }
    return count; 
};

var lengthOfLastWord = function(s) {
    var len = s.length;
    var tail = len-1, count = 0;
    while( tail>=0 && s[tail] === ' ' ){
        tail--;
    }
    while( tail >=0 && s[tail] !== ' ' ){
        count++;
        tail--;
    }
    return count;
};