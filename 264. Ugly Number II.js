/*
Write a program to find the n-th ugly number.

Ugly numbers are positive numbers whose prime factors only include 2, 3, 5. 

Example:

Input: n = 10
Output: 12
Explanation: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 is the sequence of the first 10 ugly numbers.
Note:  

1 is typically treated as an ugly number.
n does not exceed 1690.
*/

/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    var result = [1];
    var count2 = 2, index2 = 0;
    var count3 = 3, index3 = 0;
    var count5 = 5, index5 = 0;
    for(var i=1;i<n;i++){
        var min = Math.min( count2, count3, count5);
        result[i] = min;
        if(count2===min){
            count2 = 2*result[++index2];
        }
        if(count3===min){
            count3 = 3*result[++index3];
        }
        if(count5===min){
            count5 = 5*result[++index5];
        }
    }
    return result[n-1];
};

//tags: Google
