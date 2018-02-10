/*
Divide two integers without using multiplication, division and mod operator.

If it is overflow, return MAX_INT.

*/

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    var MAX_INT = Math.pow(2, 31) - 1;
    var MIN_INT = -Math.pow(2, 31);
    var result = 0;
    var dvd  = Math.abs(dividend);
    var dvs = Math.abs(divisor);
    var sign = ((dividend < 0) ^ (divisor < 0)) ? -1 : 1;
    if( dvd < dvs ){ return 0; }
    while( dvd >= dvs ){
        var temp = dvs, multiple = 1, count = 0;
        while( dvd >= ( temp << 1 ) ){
            if ((temp << 1) <= 0) {
                break;
            }
            temp = temp << 1;
            count++;
            multiple = multiple << 1;
            if (sign > 0 && count > 29) {
                return MAX_INT;
            }
            if (sign < 0 && count > 30) {
                return MIN_INT;
            }
        }
        dvd -= temp;
        result += multiple;
    }
    return sign === 1 ? result : -result;
};
