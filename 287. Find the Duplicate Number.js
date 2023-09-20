/*
Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive), prove that at least one duplicate number must exist. Assume that there is only one duplicate number, find the duplicate one.

Example 1:

Input: [1,3,4,2,2]
Output: 2
Example 2:

Input: [3,1,3,4,2]
Output: 3
Note:

You must not modify the array (assume the array is read only).
You must use only constant, O(1) extra space.
Your runtime complexity should be less than O(n2).
There is only one duplicate number in the array, but it could be repeated more than once.

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    var low = 1, high = nums.length-1;
    while(low<=high){
        var mid = Math.floor( (low+high)/2 );
        var count = 0;
        for(num of nums){
            if(num<=mid){
                count++;
            }
        }
        if(count<=mid){
            low = mid+1;
        }
        else{
            high = mid-1;
        }
    }
    return low;
};

// binary search: if it's a perfect number list, for example [1, 2, 3, 4], the count for less than and equal to the number will be the same as the number itself count(num <= m)
// so we need to find the smallest number which count(num <= m) > m 

//tags: Microsoft, Google, Amazon
