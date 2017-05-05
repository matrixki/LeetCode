/*
Given an input string, reverse the string word by word.

For example,
Given s = "the sky is blue",
return "blue is sky the".

Update (2015-02-12):
For C programmers: Try to solve it in-place in O(1) space.
*/

/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
    var sArray = str.trim().split(' ');
    str = '';
    for(var i=0;i<sArray.length;i++){
        if(sArray[ sArray.length -1 -i ] !== ' ' && sArray[ sArray.length -1 -i ] !== ''){
            str += sArray[ sArray.length -1 -i ]+' ';    
        }
    }
    return str.trim();
};

/* better solution */
var reverseWords = function(str) {
    var strlen = str.length, result='';
    for( var i=strlen-1;i>=0;i-- ){
        if( str[i] ===' ' ){
            strlen = i;
        }    
        else if( str[i-1]===' ' || i===0 ){
            if( result !== '' ){
                result += ' ';
            }
            result += str.substr(i,strlen-i);
        }
    }
    return result;
};