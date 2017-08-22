/*
Given a non-negative integer represented as a non-empty array of digits, plus one to the integer.

You may assume the integer do not contain any leading zero, except the number 0 itself.

The digits are stored such that the most significant digit is at the head of the list.
*/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var pointer = digits.length-1;
    while(pointer>=0){
        if(digits[pointer]===9){
            digits[pointer] = 0;
            pointer--;
            if(pointer<0){
                digits.unshift(1);
                break;
            }
        }
        else{
            digits[pointer] += 1;
            break;
        }
    }
    return digits;
};