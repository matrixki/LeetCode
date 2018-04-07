/*
A message containing letters from A-Z is being encoded to numbers using the following mapping:

'A' -> 1
'B' -> 2
...
'Z' -> 26
Given an encoded message containing digits, determine the total number of ways to decode it.

For example,
Given encoded message "12", it could be decoded as "AB" (1 2) or "L" (12).

The number of ways decoding "12" is 2.


*/

/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if(!s){ return 0; }
    var result = [];
    result[0] = s[0] === '0'? 0 : 1;
    var curr = parseInt(s[1]);
    var combo = parseInt( s.substring(0,2) ); 
    if(curr===0&&combo===0){
        return 0;
    }
    if(curr>=1&&curr<=9){
        result[1] = result[0];
    }
    if(curr===0 && (combo===10||combo===20)){
        result[1] = result[0];
    }    
    if(combo>10&&combo<=19 || combo>20&&combo<=26){
        result[1] = result[0]+1;
    }
    if(!result[1]){
        result[1] = 0;
    }
    for(var i=2,len=s.length;i<len;i++){
        var curr = parseInt(s[i]);
        var combo = parseInt( s.substring(i-1,i+1) );
        if(curr>=1 && curr<=9){
            if(!result[i]){ result[i]=0; }
            result[i] = result[i-1];
        }
        if(combo>=10 && combo<=26){
            if(!result[i]){ result[i]=0; }
            result[i] += result[i-2];
        }
        if(!result[i]){
            return 0;
        }
    }
    return result[s.length-1];
};

//tags: Facebook, Microsoft, Uber
