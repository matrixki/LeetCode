/*
Implement a basic calculator to evaluate a simple expression string.

The expression string contains only non-negative integers, +, -, *, / operators and empty spaces . The integer division should truncate toward zero.

Example 1:

Input: "3+2*2"
Output: 7
Example 2:

Input: " 3/2 "
Output: 1
Example 3:

Input: " 3+5 / 2 "
Output: 5
Note:

You may assume that the given expression is always valid.
Do not use the eval built-in library function.
*/

/**
 * @param {string} s
 * @return {number}
 */

// js doesn's have a built-in isDigit func

var calculate = function(s) {
    var stack = [];
    var num = 0, sign = '+';
    for(var i=0, len=s.length;i<len;i++){
        var curr = s[i];
        if(curr===' '&&i<len-1){
            continue;
        }
        if(Number.isInteger(curr-'0')&&curr!==' '){
            num = num*10+(curr-'0');
        }
        if(!Number.isInteger(curr-'0') || i===len-1){
            if(sign==='-'){
                stack.push( -num );
            }
            else if(sign==='+'){
                stack.push( num );
            }
            else if(sign==='*'){
                stack.push( stack.pop()*num );
            }
            else if(sign==='/'){
                stack.push( parseInt(stack.pop()/num) );
            }
            num = 0;
            sign = curr;
        }
    }
    var result = 0;
    for(cal of stack){
        result += cal;
    }
    return result;    
    
};

//tags: Facebook, Uber, Intuit, Snapchat, Microsoft, Google, Bloomberg, Airbnb
