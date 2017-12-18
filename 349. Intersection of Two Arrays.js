/*
Given two arrays, write a function to compute their intersection.

Example:
Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].

Note:
Each element in the result must be unique.
The result can be in any order.
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const len1 = nums1.length;
    const len2 = nums2.length;
    var big, small = [];
    if( len1 > len2 ){
        big = nums1;
        small = nums2;
    }
    else{
        big = nums2;
        small = nums1;
    }
    
    var lookup = [], result = [];
    for( num of big ){
        if( !lookup[num] ){
            lookup[num] = true;
        }
    }
    for( num of small ){
        if( lookup[ num ] ){
            result.push( num );
            lookup[num] = false;
        }
    }
    return result;
    
};

//tags: Two Sigma