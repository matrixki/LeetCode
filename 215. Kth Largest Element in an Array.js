/*
Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.

Example 1:

Input: [3,2,1,5,6,4] and k = 2
Output: 5
Example 2:

Input: [3,2,3,1,2,4,5,5,6] and k = 4
Output: 4
Note: 
You may assume k is always valid, 1 ≤ k ≤ array's length.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    
    var low = 0, high = nums.length-1;
    while(true){
        var pos = quickSelect(nums, low, high, k);
        if(pos+1===k){
            return nums[pos];
        }
        else if(pos+1<k){
            low = pos+1;
        }
        else{
            high = pos-1;
        }
    }
    
    function quickSelect(nums, low, high, k){
        var pivot = nums[low];
        var left = low+1;
        var right = high;
        while(left<=right){
            if(nums[left]<pivot&&nums[right]>pivot){
                swap(nums, left++, right--);
            }
            if(nums[left]>=pivot){
                left++;
            }
            if(nums[right]<=pivot){
                right--;
            }
        }
        swap(nums, low, right);
        return right;
    };
    
    function swap(nums, i, j){
        var temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    };
};

//tags: Facebook, Microsoft, Amazon, Bloomberg, Apple, Pocket Gems
