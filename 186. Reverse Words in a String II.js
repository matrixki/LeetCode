/*
Given an input string, reverse the string word by word. A word is defined as a sequence of non-space characters.

The input string does not contain leading or trailing spaces and the words are always separated by a single space.

For example,
Given s = "the sky is blue",
return "blue is sky the".

Could you do it in-place without allocating extra space?
*/

/**
 * @param {character[]} str
 * @return {void} Do not return anything, modify the string in-place instead.
 */
var reverseWords = function(str) {
    
    reverse(str, 0, str.length-1);
    var low = 0;
    for(var i=0;i<=str.length;i++){
        if( str[i] === ' ' || i === str.length ){
            if( low !== i-1 ){
                reverse(str, low, i-1 );   
            }
            low = i+1;
        }
    }
    
    // function for reverse character array
    function reverse(s, start, end){
        for(var i=0;i<Math.floor( (end-start)/2)+1;i++){
            var temp = s[start+i];
            s[start+i] = s[end-i];
            s[end-i] = temp;
        }
    }
};

var reverseWords = function(str) {
    reverseStr(str, 0, str.length-1);
    var start =0;
    for(var i=start;i<str.length;i++){
        if(str[i]===' '){
            reverseStr(str,start,i-1);
            start = i+1;
        }
    }
    reverseStr(str,start,str.length-1);
    str = str.join('');
    
    function reverseStr( s, start, end ){
        while(start<end){
            var temp = s[start];
            s[start] = s[end];
            s[end] = temp;
            start++;
            end--;
        }
    }
};