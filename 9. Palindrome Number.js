/*
Determine whether an integer is a palindrome. Do this without extra space.

click to show spoilers.

Some hints:
Could negative integers be palindromes? (ie, -1)

If you are thinking of converting the integer to string, note the restriction of using extra space.

You could also try reversing an integer. However, if you have solved the problem "Reverse Integer", you know that the reversed integer might overflow. How would you handle such case?

There is a more generic way of solving this problem.
*/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // negative number is not a palindrome
    if(x<0){ return false; }
    
   //check how many zeros for the given x
    var numZeros = 1;
    while(x/numZeros >= 10){
        numZeros *= 10;
    }
    var left = 0, right = 0;
    while(x !== 0){
        left = Math.floor(x/numZeros);
        right = x%10;
        if(left!==right){ return false; }
        x = Math.floor((x%numZeros) / 10);
        numZeros = numZeros / 100;
    }
    return true;
};