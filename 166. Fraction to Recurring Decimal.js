/*
Given two integers representing the numerator and denominator of a fraction, return the fraction in string format.

If the fractional part is repeating, enclose the repeating part in parentheses.

Example 1:

Input: numerator = 1, denominator = 2
Output: "0.5"
Example 2:

Input: numerator = 2, denominator = 1
Output: "2"
Example 3:

Input: numerator = 2, denominator = 3
Output: "0.(6)"
*/

/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
    if(numerator===0){
        return "0";
    }
    
    var result = "";
    result += (numerator>0) ^ (denominator>0) ? '-' : '';
    var num = Math.abs(numerator);
    var den = Math.abs(denominator);
    
    //integral part
    result += Math.floor(num/den).toString();
    num = num%den;
    if(num===0){
        return result;
    }
    // fractional part
    result += '.';
    var lookup = new Map();
    lookup.set(num, result.length);
    while(num!==0){
        num *= 10;
        result += Math.floor( num/den ).toString();
        num = num%den;
        if(lookup.has(num)){
            var index = lookup.get(num);
            result = result.substring(0,index) + '(' + result.substring(index, result.length) + ')';
            break;
        }
        else{
            lookup.set(num, result.length);
        }
    }
    return result;
};

//tags: Google, IXL
