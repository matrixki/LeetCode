/*
You are given two arrays (without duplicates) nums1 and nums2 where nums1’s elements are subset of nums2. Find all the next greater numbers for nums1's elements in the corresponding places of nums2.

The Next Greater Number of a number x in nums1 is the first greater number to its right in nums2. If it does not exist, output -1 for this number.

Example 1:
Input: nums1 = [4,1,2], nums2 = [1,3,4,2].
Output: [-1,3,-1]
Explanation:
    For number 4 in the first array, you cannot find the next greater number for it in the second array, so output -1.
    For number 1 in the first array, the next greater number for it in the second array is 3.
    For number 2 in the first array, there is no next greater number for it in the second array, so output -1.
Example 2:
Input: nums1 = [2,4], nums2 = [1,2,3,4].
Output: [3,-1]
Explanation:
    For number 2 in the first array, the next greater number for it in the second array is 3.
    For number 4 in the first array, there is no next greater number for it in the second array, so output -1.
Note:
All elements in nums1 and nums2 are unique.
The length of both nums1 and nums2 would not exceed 1000.

*/

// O(n^2)
/**
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElement = function(findNums, nums) {
    let result = [], lookup = new Map();
    for(let i=0;i<nums.length;i++){
        lookup.set( nums[i], i );
    }
    for(let i=0;i<findNums.length;i++){
        let index = lookup.get(findNums[i]), hasResult = false;
        for(let j=index+1;j<nums.length;j++){
            if(nums[j]>findNums[i]){
                result.push(nums[j]);
                hasResult = true;
                break;
            }
        }
        if(!hasResult){
            result.push(-1);     
        }
    }
    return result;
};

//tags: Bloomberg

// O(n)
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var nextGreaterElement = function(nums1, nums2) {
    let lookup = new Map();
    let stack = [];
    for(let i=0;i<nums2.length;i++){
        while(stack.length>0 && nums2[i] > stack[stack.length-1]){
            lookup.set(stack.pop(), nums2[i]);
        }
        stack.push(nums2[i])
    }
    let result = [];
    for(let i=0;i<nums1.length;i++){
        result.push(lookup.get(nums1[i]) || -1);
    }
    return result;
};

