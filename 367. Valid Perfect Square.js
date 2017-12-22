/*
Given a positive integer num, write a function which returns True if num is a perfect square else False.

Note: Do not use any built-in library function such as sqrt.

Example 1:

Input: 16
Returns: True
Example 2:

Input: 14
Returns: False
Credits:
Special thanks to @elmirap for adding this problem and creating all test cases.
*/

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    var low = 1, high = num;
    while( low <= high ){
        var mid = Math.floor((low+high)/2);
        if( mid*mid === num ){
            return true;
        }
        else if( mid*mid < num ){
            low = mid+1;
        }
        else{
            high = mid-1;
        }
    }
    return false;
};

//tags: Linkedin 