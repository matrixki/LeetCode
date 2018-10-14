/*
Given a sorted array of integers nums and integer values a, b and c. Apply a quadratic function of the form f(x) = ax2 + bx + c to each element x in the array.

The returned array must be in sorted order.

Expected time complexity: O(n)

Example 1:

Input: nums = [-4,-2,2,4], a = 1, b = 3, c = 5
Output: [3,9,15,33]
Example 2:

Input: nums = [-4,-2,2,4], a = -1, b = 3, c = 5
Output: [-23,-5,1,7]
*/

/**
 * @param {number[]} nums
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]}
 */
var sortTransformedArray = function(nums, a, b, c) {
    let result = [];
    let left = 0, right = nums.length-1;
    while(left<=right){
        if(a>0){
            if( quad(nums[left], a,b,c) > quad(nums[right],a,b,c) ){
                result.unshift(quad(nums[left], a,b,c));
                left++;
            }
            else{
                result.unshift(quad(nums[right], a,b,c));
                right--;                
            }
        }
        else{
            if( quad(nums[left], a,b,c) > quad(nums[right],a,b,c) ){
                result.push(quad(nums[right], a,b,c));
                right--;
            }
            else{
                result.push(quad(nums[left], a,b,c));
                left++;                
            }            
        }
    }
    return result;
    
    function quad(x, a, b, c){
        return a*x*x+b*x+c;
    }
};

//tags: Facebook
