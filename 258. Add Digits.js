/*
Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

For example:

Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.

Follow up:
Could you do it without any loop/recursion in O(1) runtime?

Credits:
Special thanks to @jianchao.li.fighter for adding this problem and creating all test cases.
*/

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    while(num>=10){
        var temp = 0;
        while(num>0){
            temp += num%10;
            num = Math.floor(num/10);
        }
        num = temp;
    }
    return num;
};

// math solution
var addDigits = function(num) {
    if(num===0) return 0;
    return Math.floor(num%9)===0? 9 : Math.floor(num%9);
};

//tags: Microsoft, Adobe