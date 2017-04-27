/*
Given an integer, convert it to a roman numeral.

Input is guaranteed to be within the range from 1 to 3999.
*/

/*
needs to know background:

I: 1
IV: 4
V: 5
IX: 9
X: 10
XL: 40
L: 50
XC: 90
C: 100
CD: 400
D: 500
CM: 900
M: 1000

*/

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    // create dictionary for lookup
    var romanLetters = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
    var romanNumbers = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
    var result = '';
    for(var i=0;i<romanNumbers.length;i++){
        if(num>=romanNumbers[i]){
            var count = Math.floor(num/romanNumbers[i]);
            num = num%romanNumbers[i];
            for(var j=0;j<count;j++){
                result += romanLetters[i];
            }
        }
    }
    return result;
};

