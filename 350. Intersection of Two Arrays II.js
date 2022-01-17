/*
Given two arrays, write a function to compute their intersection.

Example:
Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2, 2].

Note:
Each element in the result should appear as many times as it shows in both arrays.
The result can be in any order.
Follow up:
What if the given array is already sorted? How would you optimize your algorithm?
What if nums1's size is small compared to nums2's size? Which algorithm is better?
What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?

tags: Google, Amazon, Apple, Facebook, LinkedIn, Bloomberg, Adobe, Yandex

*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    var lookup = new Map();
    var result = [];
    for( num of nums1 ){
        if( !lookup.has(num) ){
            lookup.set(num,1);
        }
        else{
            lookup.set(num, lookup.get(num)+1);
        }
    }
    for( num of nums2 ){
        if( lookup.has(num) && lookup.get(num) > 0 ){
            result.push(num);
            lookup.set(num, lookup.get(num)-1);
        }
    }
    return result;
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersect = function(nums1, nums2) {
    let lookup = {}, result = [];
    for(let i=0;i<nums1.length;i++){
        lookup[nums1[i]] = lookup[nums1[i]] ? lookup[nums1[i]]+1 : 1;
    }
    for(let i=0;i<nums2.length;i++){
        if(lookup[nums2[i]]){
            result.push(nums2[i]);
            lookup[nums2[i]] = lookup[nums2[i]]-1;
        }
    }
    return result;
};