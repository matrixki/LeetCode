/*

Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.

 

Example 1:


Input: heights = [2,1,5,6,2,3]
Output: 10
Explanation: The above is a histogram where width of each bar is 1.
The largest rectangle is shown in the red area, which has an area = 10 units.
Example 2:


Input: heights = [2,4]
Output: 4
 

Constraints:

1 <= heights.length <= 105
0 <= heights[i] <= 104

tags: Amazon, Microsoft, Uber, Adobe, Facebook, Google, Snapchat, HBO, ByteDance, tiktok

*/

/**
 * @param {number[]} heights
 * @return {number}
 */
 var largestRectangleArea = function(heights) {
    if (!heights || heights.length === 0){
        return 0;
    }
    let lessFromLeft = [], lessFromRight = [];
    lessFromLeft[0] = -1, lessFromRight[heights.length-1] = heights.length;
    
    for(let i=1;i<heights.length;i++){
        let p = i-1;
        while(p>=0 && heights[p]>=heights[i]){
            p = lessFromLeft[p];
        }
        lessFromLeft[i] = p;
    }
    
    for(let i=heights.length-2;i>=0;i--){
        let p = i+1;
        while(p<heights.length && heights[p]>=heights[i]){
            p = lessFromRight[p];
        }
        lessFromRight[i] = p;
    }
    let result = 0;
    for(let i=0;i<heights.length;i++){
        result = Math.max(result, heights[i]*(lessFromRight[i]-lessFromLeft[i]-1));
    }
    return result;
};