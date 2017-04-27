/*
Given a roman numeral, convert it to an integer.

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
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    // create dictionary for lookup
    var romanLetters = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
    var romanNumbers = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
    // pointer is for given string, index is for dictionary lookup
    var result = 0, pointer = 0, index =0;
    
    while(pointer<s.length && index < romanNumbers.length){
        var letter = romanLetters[index];
        var current = s.substr(pointer, letter.length);
        if( current === letter ){
            result += romanNumbers[index];
            pointer += letter.length;
        }
        else{
            index++;
        }
    }
    return result;
};