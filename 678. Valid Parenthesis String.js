/*
Given a string containing only three types of characters: '(', ')' and '*', write a function to check whether this string is valid. We define the validity of a string by these rules:

Any left parenthesis '(' must have a corresponding right parenthesis ')'.
Any right parenthesis ')' must have a corresponding left parenthesis '('.
Left parenthesis '(' must go before the corresponding right parenthesis ')'.
'*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string.
An empty string is also valid.
Example 1:
Input: "()"
Output: True
Example 2:
Input: "(*)"
Output: True
Example 3:
Input: "(*))"
Output: True
Note:
The string size will be in the range [1, 100].
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    let count = 0;
    for(let i=0;i<s.length;i++){
        if(s[i]==='(' || s[i]==='*'){
            count++;
        }
        else{
            count--;
            if(count<0){
                return false;
            }
        }
    }
    if(count===0){
        return true;
    }
    count = 0;
    for(let i=s.length-1;i>=0;i--){
        if(s[i]===')' || s[i]==='*'){
            count++;
        }
        else{
            count--;
            if(count<0){
                return false;
            }
        }
    }
    return true;
};

//tags: Facebook, Amazon

