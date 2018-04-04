/*
The gray code is a binary numeral system where two successive values differ in only one bit.

Given a non-negative integer n representing the total number of bits in the code, print the sequence of gray code. A gray code sequence must begin with 0.

For example, given n = 2, return [0,1,3,2]. Its gray code sequence is:

00 - 0
01 - 1
11 - 3
10 - 2
Note:
For a given n, a gray code sequence is not uniquely defined.

For example, [0,2,3,1] is also a valid gray code sequence according to the above definition.

For now, the judge is able to judge based on one instance of gray code sequence. Sorry about that.
*/

/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    var result = [];
    if(n===0){ return [0]; }
    else if(n===1){
        return [0,1];
    }
    var prev = grayCode(n-1);
    for(var i=0, len=prev.length;i<len*2;i++){
        if(i<len){
            result.push(prev[i]);            
        }
        else{
            var temp = prev[2*len-i-1];
            temp = temp + (1<<(n-1));
            result.push(temp);
        }
    }
    return result;
};

//tags: Amazon
