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
    if(s.length<=0){
        return 0;
    }
    var dp = [], len = s.length;
    dp.length = len;
    dp.fill(0);
    
    dp[0] = parseInt(s[0]) === 0 ? 0 : 1;
    for(var i=1;i<len;i++){
        if( parseInt( s[i] ) > 0 ){
            dp[i] += dp[i-1];
        }
        var nums = parseInt( s.substring(i-1, i+1) );
        if( nums <= 26 && nums >= 10 ){
            dp[i] += (i-2)>=0 ? dp[i-2] : 1;
        }
    }
    
    return dp[len-1];
};

//tags: Facebook, Microsoft, Uber, Amazon, Google
