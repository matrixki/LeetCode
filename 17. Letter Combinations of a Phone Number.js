/*
Given a digit string, return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below.

Input:Digit string "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].

https://leetcode.com/problems/letter-combinations-of-a-phone-number/#/description
*/

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    var lookup = [ [], [], ['a','b','c'], ['d','e','f'], ['g','h','i'], ['j','k','l'], ['m','n','o'], ['p','q','r','s'], ['t','u','v'], ['w','x','y','z'] ];
    var result = [];
    for(var i=0;i<digits.length;i++){
        var digit = digits[i];
        var dict = lookup[digit];
        if( result.length === 0 ){
            for(var j=0;j<dict.length;j++){
                result.push(dict[j]);
            }
        }
        else{
            var temp = [];
            while(result.length >0){
                var str = result.shift();
                for(var k=0;k<dict.length;k++){
                    var newStr = str+dict[k];
                    temp.push(newStr);
                }                
            }
            result = temp;
        }
    }
    return result;
};