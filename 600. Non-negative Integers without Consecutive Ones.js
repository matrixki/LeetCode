/*
Given a positive integer n, find the number of non-negative integers less than or equal to n, whose binary representations do NOT contain consecutive ones.

Example 1:
Input: 5
Output: 5
Explanation: 
Here are the non-negative integers <= 5 with their corresponding binary representations:
0 : 0
1 : 1
2 : 10
3 : 11
4 : 100
5 : 101
Among them, only integer 3 disobeys the rule (two consecutive ones) and the other 5 satisfy the rule. 
Note: 1 <= n <= 109


*/

/**
 * @param {number} num
 * @return {number}
 */
var findIntegers = function(num) {
    //get binary string len
    var strlen = 0, n = num , str='';
    while(n>0){
        strlen++;
        str += (n&1) ? "1" : "0";
        n = n >> 1;
    }
    var zeros = [1], ones = [1];
    for(var i=1;i<strlen;i++){
        zeros[i] = zeros[i-1] + ones[i-1];
        ones[i] = zeros[i-1];
    }
    var result = zeros[strlen-1] + ones[strlen-1];
    for(var i=strlen-2;i>=0;i--){
        if(str[i]==='1'&&str[i+1]==='1'){
            break;
        }
        if(str[i]==='0'&&str[i+1]==='0'){
            result -= ones[i];
        }
    }
    return result;
};

//tags: Pocket Gems
