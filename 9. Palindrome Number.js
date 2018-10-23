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
    // negative number is not a palindrome, also 10 times n but not 0
    if(x<0 || (x!==0&&x%10===0)){ return false; }
    // rev for half
    let rev = 0;
    while(x>rev){
        rev = rev*10 + (x%10);
        x = Math.floor(x/10);
    }
    return (rev===x) || (x===Math.floor(rev/10));
};

//tags: JPMorgan, Amazon, Adobe, Microsoft, Bloomberg
