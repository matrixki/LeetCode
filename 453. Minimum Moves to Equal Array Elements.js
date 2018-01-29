/*
Given a non-empty integer array of size n, find the minimum number of moves required to make all array elements equal, where a move is incrementing n - 1 elements by 1.

Example:

Input:
[1,2,3]

Output:
3

Explanation:
Only three moves are needed (remember each move increments two elements):

[1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    /*
    final result should be max*n
    current sum + m(n-1) = final*n
    final = min + m
    -> sum + mn - m = (min+m)n
    -> sum + mn - m = min*n + mn
    -> sum - m = min*n
    -> m = sum - min*n
    */
    var sum = 0, min = nums[0];
    for(val of nums){
        sum += val;
        if( val < min ){
            min = val;
        }
    }
    return sum - min*nums.length;
};

//tags: Indeed, Coursera
