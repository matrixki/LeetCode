/*
There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

Example 1:
nums1 = [1, 3]
nums2 = [2]

The median is 2.0
Example 2:
nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var numArray = [];
    var point1 = 0, point2 = 0;
    while( point1<nums1.length || point2<nums2.length ){
        // reach nums1 end
        if( point1 === nums1.length ){
            for(point2;point2<nums2.length;point2++){
               numArray.push(nums2[point2]); 
            }
            break;
        }
        // reach nums2 end
        if( point2 === nums2.length ){
            for(point1;point1<nums1.length;point1++){
               numArray.push(nums1[point1]); 
            }
            break;            
        }
        // make the new sorted array
        if( nums1[point1] < nums2[point2] ){
            numArray.push(nums1[point1]);
            point1++;
        }
        else{
            numArray.push(nums2[point2]);
            point2++;           
        }
    }
    // return the result
    if( numArray.length %2 ===0 ){
        return (numArray[numArray.length/2] + numArray[numArray.length/2 -1])/2;
    }
    else{
        return numArray[Math.floor(numArray.length/2)];
    }
};