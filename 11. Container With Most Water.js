/*
Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

Note: You may not slant the container and n is at least 2.
*/

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0, right = height.length-1, result = 0;
    while (left < right) {
        const currArea = Math.min(height[left], height[right])*(right-left);
        result = Math.max(currArea, result);
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return result;
};

//tags: Amazon, Microsoft, Adobe, Yahoo, Apple, Google