/*
There is a fence with n posts, each post can be painted with one of the k colors.

You have to paint all the posts such that no more than two adjacent fence posts have the same color.

Return the total number of ways you can paint the fence.

Note:
n and k are non-negative integers.
*/

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numWays = function(n, k) {
    if(n===0){ return 0; }
    else if(n===1){ return k; }
    else if(n===2){ return k*(k-1) + k; }
    
    var diff = k*(k-1);
    var same = k;
    
    for(var i=3;i<=n;i++){
        var temp = diff;
        diff = (diff+same)*(k-1);
        same = temp;
    }
    
    return same+diff;
};