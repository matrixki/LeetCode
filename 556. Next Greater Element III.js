/*

Given a positive integer n, find the smallest integer which has exactly the same digits existing in the integer n and is greater in value than n. If no such positive integer exists, return -1.

Note that the returned integer should fit in 32-bit integer, if there is a valid answer but it does not fit in 32-bit integer, return -1.

 

Example 1:

Input: n = 12
Output: 21
Example 2:

Input: n = 21
Output: -1
 

Constraints:

1 <= n <= 231 - 1

tags: Facebook, Microsoft, Amazon, Salesforce

*/

/**
 * @param {number} n
 * @return {number}
 */
 var nextGreaterElement = function(n) {
    let nums = n.toString().split('');
    let i;
    for(i=nums.length-1;i>0;i--){
        if(nums[i-1]<nums[i]){
            break;
        }
    }
    
    if(i===0){
        return -1;
    }
    
    let toSwap = nums[i-1], smallest = i;
    for(let j=i+1;j<nums.length;j++){
        if(nums[j]>toSwap && nums[j]<=nums[smallest]){
            smallest = j;
        }
    }
    // make the swap
    let temp = toSwap;
    nums[i-1] = nums[smallest];
    nums[smallest] = temp;
    // sort the digits after i-1
    nums = nums.slice(0, i).concat(nums.slice(i).sort());
    return parseInt(nums.join('')) <= Math.pow(2, 31)-1 ? parseInt(nums.join('')) : -1;
};