/*
Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

Note:
You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2. The number of elements initialized in nums1 and nums2 are m and n respectively.
*/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let pointer = m+n;
    m--;
    n--;
    while(pointer--){
        if( n<0 || nums1[m] > nums2[n] ){
            nums1[pointer] = nums1[m--];
        }       
        else{
            nums1[pointer] = nums2[n--];
        }
    }
};

//tags: Facebook, Microsoft, Bloomberg, Amazon, Cisco, Adobe, Indeed, Baidu 