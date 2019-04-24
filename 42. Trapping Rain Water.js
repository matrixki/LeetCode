/*
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.


The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped. Thanks Marcos for contributing this image!

Example:

Input: [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6

*/

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let result = 0;
    let left = 0, right = height.length-1;
    let leftMax = 0, rightMax = 0;
    while( left < right ){
        if( height[left] < height[right] ){
            if(height[left]>leftMax){
                leftMax = height[left];
            }
            else{
                result += (leftMax-height[left]);
            }
            left++;
        }
        else{
            if(height[right]>rightMax){
                rightMax = height[right];
            }
            else{
                result += (rightMax-height[right]);
            }
            right--;
        }
    }
    return result;
};

//tags: Amazon, Goldman Sachs, Google, Facebook, Apple, Bloomberg, Uber, Lyft, Microsoft, Airbnb, Qualtrics, Oracle, Adobe, Salesforce, Citadel
