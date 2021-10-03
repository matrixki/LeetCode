/*

Given an integer array of even length arr, return true if it is possible to reorder arr such that arr[2 * i + 1] = 2 * arr[2 * i] for every 0 <= i < len(arr) / 2, or false otherwise.

 

Example 1:

Input: arr = [3,1,3,6]
Output: false
Example 2:

Input: arr = [2,1,2,6]
Output: false
Example 3:

Input: arr = [4,-2,2,-4]
Output: true
Explanation: We can take two groups, [-2,-4] and [2,4] to form [-2,-4,2,4] or [2,4,-2,-4].
Example 4:

Input: arr = [1,2,4,16,8,4]
Output: false
 

Constraints:

2 <= arr.length <= 3 * 104
arr.length is even.
-105 <= arr[i] <= 105

tags: Google

*/

/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var canReorderDoubled = function(arr) {
    let lookup = new Map(), original = [];
    arr.sort((a, b)=>{
        return a-b;
    });
    for(let i=0;i<arr.length;i++){
        const half = arr[i] > 0 ? arr[i]/2 : arr[i]*2;
        if(lookup.has(half) && lookup.get(half)>0){
            original.push(half);
            lookup.set(half, lookup.get(half)-1);
        }
        else{
            lookup.set( arr[i], lookup.has(arr[i]) ? lookup.get(arr[i])+1 : 1 );
        }
    }
    return original.length === arr.length/2;
};