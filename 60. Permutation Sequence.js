/*
The set [1,2,3,…,n] contains a total of n! unique permutations.

By listing and labeling all of the permutations in order,
We get the following sequence (ie, for n = 3):

"123"
"132"
"213"
"231"
"312"
"321"
Given n and k, return the kth permutation sequence.

Note: Given n will be between 1 and 9 inclusive.
*/

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    var nums = [], factorial = [1];
    for( var i = 1;i<=n;i++ ){
        nums.push(i.toString());
        factorial[i] = factorial[i-1]*i;
    }
    var result = '';
    k--;
    while( n > 0 ){
        var repeat = factorial[n-1];
        var index = Math.floor(k/repeat);
        result = result + nums[ index ].toString();
        k = k%repeat;
        nums.splice(index, 1);
        n--;
    }
    return result;
  
};

//tags: Twitter