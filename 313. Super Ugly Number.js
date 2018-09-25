/*
Write a program to find the nth super ugly number.

Super ugly numbers are positive numbers whose all prime factors are in the given prime list primes of size k.

Example:

Input: n = 12, primes = [2,7,13,19]
Output: 32 
Explanation: [1,2,4,7,8,13,14,16,19,26,28,32] is the sequence of the first 12 
             super ugly numbers given primes = [2,7,13,19] of size 4.
Note:

1 is a super ugly number for any given primes.
The given numbers in primes are in ascending order.
0 < k ≤ 100, 0 < n ≤ 106, 0 < primes[i] < 1000.
The nth super ugly number is guaranteed to fit in a 32-bit signed integer.
*/

/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function(n, primes) {
    var result = [1];
    var indexCount = [];
    var len = primes.length;
    indexCount.length = len;
    indexCount.fill(0);
    
    while(result.length<n){
        var temp = [];
        for(var i=0;i<len;i++){
            temp.push( result[ indexCount[i] ]*primes[i] );
        }
        var min = Math.min(...temp);
        for(var i=0;i<len;i++){
            if( min === temp[i] ){
                indexCount[i]++;
            }
        }
        result.push(min);
    }
    return result[n-1];
};

//tags: Google
