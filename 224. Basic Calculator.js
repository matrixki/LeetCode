/*
Implement a basic calculator to evaluate a simple expression string.

The expression string may contain open ( and closing parentheses ), the plus + or minus sign -, non-negative integers and empty spaces .

Example 1:

Input: "1 + 1"
Output: 2
Example 2:

Input: " 2-1 + 2 "
Output: 3
Example 3:

Input: "(1+(4+5+2)-3)+(6+8)"
Output: 23
Note:
You may assume that the given expression is always valid.
Do not use the eval built-in library function.
*/

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    var stack = [];
    var result = 0;
    var sign = 1;
    var number = 0;
    for(var i=0;i<s.length;i++){
        var curr = s[i];
        if(curr===' '){
            continue;
        }
        if(Number.isInteger( curr-'0' )){
            number = 10*number + (curr-'0');
        }
        else if(curr==='+'){
            result += sign*number;
            number = 0;
            sign = 1;
        }
        else if(curr==='-'){
            result += sign*number;
            number = 0;
            sign = -1;
        }
        else if(curr==='('){
            stack.push(result);
            stack.push(sign);
            sign = 1;
            result = 0;
        }
        else if(curr===')'){
            result += sign*number;
            number = 0;
            result *= stack.pop();
            result += stack.pop();
        }
    }
    if(number!==0){
        result += sign*number;
    }
    return result;
};

//tags: Intuit, Pinterest, Amazon, Roblox, Microsoft, Google, Indeer, Jump Trading
