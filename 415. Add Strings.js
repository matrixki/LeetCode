/*
Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

Note:

The length of both num1 and num2 is < 5100.
Both num1 and num2 contains only digits 0-9.
Both num1 and num2 does not contain any leading zero.
You must not use any built-in BigInteger library or convert the inputs to integer directly.
*/

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    var l1 = num1.length-1, l2 = num2.length-1;
    var carry = 0;
    var result = '';
    while( l1 >=0 || l2 >=0 || carry ){
        var temp = 0;
        if( l1>=0 ){
            temp += (num1[l1]-0);
            l1--;
        }
        if( l2>=0 ){
            temp += (num2[l2]-0);
            l2--;
        }
        temp += carry;
        carry = Math.floor(temp/10);
        temp = temp%10;
        result = temp.toString() + result;
    }
    return result;
};

//tags: Google, Airbnb