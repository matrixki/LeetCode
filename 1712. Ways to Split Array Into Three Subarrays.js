/*

A split of an integer array is good if:

The array is split into three non-empty contiguous subarrays - named left, mid, right respectively from left to right.
The sum of the elements in left is less than or equal to the sum of the elements in mid, and the sum of the elements in mid is less than or equal to the sum of the elements in right.
Given nums, an array of non-negative integers, return the number of good ways to split nums. As the number may be too large, return it modulo 109 + 7.

 

Example 1:

Input: nums = [1,1,1]
Output: 1
Explanation: The only good way to split nums is [1] [1] [1].
Example 2:

Input: nums = [1,2,2,2,5,0]
Output: 3
Explanation: There are three good ways of splitting nums:
[1] [2] [2,2,5,0]
[1] [2,2] [2,5,0]
[1,2] [2,2] [5,0]
Example 3:

Input: nums = [3,2,1]
Output: 0
Explanation: There is no good way to split nums.
 

Constraints:

3 <= nums.length <= 105
0 <= nums[i] <= 104

tags: Amazon, Morgan Stanley, Snapchat

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var waysToSplit = function(nums) {
    
    const MOD = 10 ** 9 + 7;

    const N = nums.length;
    let prefix = [nums[0]];
    for(let i=1;i<N;i++){
        prefix[i] = prefix[i-1]+nums[i];
    }
    
    let result = 0;
    for(let i=1;i<N-1;i++){
        
        if(prefix[i-1] > (prefix[N-1]-prefix[i-1])/2){ break; }
        
        const left = helper(prefix, prefix[i-1], i, true);
        const right = helper(prefix, prefix[i-1], i, false);
        
        if(left === -1 || right === -1){
            continue;
        }
        
        result = (result + (right - left + 1) % MOD) % MOD;
    } 
    return result;
};

const helper = (prefix, leftSum, index, searchLeft) => {
    const N = prefix.length;
    let left = index, right = N-2;
    let result = -1;
    while(left<=right){
        let middle = left + (right-left)/2;
        let middleSum = prefix[middle] - prefix[index-1];
        let rightSum = prefix[N-1] - prefix[middle];
        
        if(leftSum <= middleSum && middleSum <= rightSum){
            result = middle;
            if(searchLeft){
                left = middle-1;
            }
            else{
                right = middle+1;
            }
        }
        else if(leftSum>middleSum){
            left = middle+1;
        }
        else{
            right = middle-1;
        }
    }
    return result;
}

// getting TLE on this implementation in Javascript