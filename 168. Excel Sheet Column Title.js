/*
Given a positive integer, return its corresponding column title as appear in an Excel sheet.

For example:

    1 -> A
    2 -> B
    3 -> C
    ...
    26 -> Z
    27 -> AA
    28 -> AB 
Credits:
Special thanks to @ifanchu for adding this problem and creating all test cases.
*/

/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    let dict = [ 'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z' ];
    var result = '';
    if( n<=26 ){
        return dict[n-1];
    }
    var power = 1;
    while( n>0 ){
        if(Math.pow(26,power) < n){
            power++;
        }
        else{
            var counter = 0;
            while(n>Math.pow(26,power-1)){
                n -= Math.pow(26,power-1); 
                counter++;
            }
            result += dict[counter-1];
            power = 1;
        }
        if( n <= 26){
            result += dict[n-1];
            break;
        }
    }
    return result;
};