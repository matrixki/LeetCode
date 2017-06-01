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

    var result = [];
    var temp = '';
    makeParen(n,0,0,temp,result);
    return result;

  
    function makeParen( number, left, right, temp, result ){
        if( number === left && number === right ){
            result.push(temp);
            return;
        }
        
        if( left < number ){
            temp = temp + '(';
            makeParen( number, left+1, right, temp, result );
            temp = temp.substring(0, temp.length -1);
        }
        
        if( right < left ){
            temp = temp + ')';
            makeParen( number, left, right+1, temp, result );
            temp = temp.substring(0, temp.length -1);
        }
    }    
};