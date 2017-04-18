/*
Reverse digits of an integer.

Example1: x = 123, return 321
Example2: x = -123, return -321

Have you thought about this?
Here are some good questions to ask before coding. Bonus points for you if you have already thought through this!

If the integer's last digit is 0, what should the output be? ie, cases such as 10, 100.

Did you notice that the reversed integer might overflow? Assume the input is a 32-bit integer, then the reverse of 1000000003 overflows. How should you handle such cases?

For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

Note:
The input is assumed to be a 32-bit signed integer. Your function should return 0 when the reversed integer overflows.
*/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    // math question
    var result = 0;
    var abs = Math.abs(x);
    var nFlag = x < 0 ? true: false;
    var INT_MAX = Math.pow(2,31)-1;

    while(abs !== 0){
        result = result*10 + abs%10;
        abs = Math.floor(abs/10);
        console.log(result);
    }  
    result = nFlag? result*(-1) : result;
    // handle overflow
    if(result>INT_MAX || result<-1*(INT_MAX+1) ){ return 0; }

    return result;
};