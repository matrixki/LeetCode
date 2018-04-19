/*
Given n, how many structurally unique BST's (binary search trees) that store values 1 ... n?

Example:

Input: 3
Output: 5
Explanation:
Given n = 3, there are a total of 5 unique BST's:

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3
*/

/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    var result = [1];
    result.length = n+1;
    result.fill(0,1,n+1);
    for(var i=1;i<=n;i++){
        for(var j=0;j<i;j++){
            result[i] += result[j]*result[i-j-1];
        }
    }
    return result[n];
};

//tags: snapchat