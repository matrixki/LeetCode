/*
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
*/


/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let result = [];
    makeParenthesis(n, 0, 0, "", result);
    return result;
};

const makeParenthesis = (num, left, right, temp, result) => {
    if (num === left && num === right) {
        result.push(temp);
    }
    if (left < num) {
        temp += "(";
        makeParenthesis(num, left+1, right, temp, result);
        temp = temp.substring(0, temp.length -1);
    }

    if (right < left) {
        temp += ")";
        makeParenthesis(num, left, right+1, temp, result);
    }
};