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

//binary search
var findMedianSortedArrays = function(nums1, nums2) {
    let len1 = nums1.length;
    let len2 = nums2.length;
    if( len1>len2 ){
        return findMedianSortedArrays(nums2, nums1);
    }
    
    let k = Math.floor((len1+len2+1)/2);
    let left = 0, right = len1;
    while(left<right){
        let m1 = left + Math.floor( (right-left)/2 );
        let m2 = k - m1;
        if( nums1[m1] < nums2[m2-1] ){
            left = m1+1;
        }
        else{
            right = m1;
        }
    }
    let m1 = left;
    let m2 = k - left;
    let c1 = Math.max( m1<=0 ? Number.MIN_SAFE_INTEGER : nums1[m1-1], m2<=0 ? Number.MIN_SAFE_INTEGER : nums2[m2-1] );

    if((len1+len2)%2===1){
        return c1;
    }
    let c2 = Math.min( m1>=len1 ? Number.MAX_SAFE_INTEGER : nums1[m1], m2>=len2 ? Number.MAX_SAFE_INTEGER : nums2[m2] );
    
    return (c1+c2)/2;
};


//tags: Google, Microsoft, Apple, Zenefits, Yahoo, Adobe, Dropbox