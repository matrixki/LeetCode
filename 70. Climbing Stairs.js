/*
You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Note: Given n will be a positive integer.
*/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n===1){ 
        return 1; 
    }
    else if(n===2){ 
        return 2; 
    }
    let lookup = [1,2];
    for(let i=2;i<n;i++){
        lookup[i] = lookup[i-1] + lookup[i-2];    
    }
    return lookup[n-1];
};
// dynamic programming