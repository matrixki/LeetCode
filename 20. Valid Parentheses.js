/*
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var length = s.length;
    var stack = [];
    for(var i=0;i<length;i++){
        if( s[i] === '(' || s[i] === '{' || s[i] === '[' ){
            stack.push(s[i]);
        }
        else if( s[i] === ')' ){
            if( stack.pop() !== '(' ){
                return false;
            }
        }
        else if( s[i] === '}' ){
            if( stack.pop() !== '{' ){
                return false;
            }
        }
        else if( s[i] === ']' ){
            if( stack.pop() !== '[' ){
                return false;
            }
        }        
    }
    return stack.length === 0;
};