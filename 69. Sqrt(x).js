/*
Implement int sqrt(int x).

Compute and return the square root of x.
*/

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if( x === 0 ){ return 0; }
    let left = 0, right = x;
    let result;
    while(left<=right){
        let middle = Math.floor(left + (right-left)/2);
        if( middle <= x/middle ){
            left = middle +1;
            result = middle;
        }
        else{
            right = middle -1;
        }
    }
    return result;
};
// binary search