/*
Given an array S of n integers, find three integers in S such that the sum is closest to a given number, target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

    For example, given array S = {-1 2 1 -4}, and target = 1.

    The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    var result = 0, temp = 0, minDistance = Math.pow(2,31)-1, tempDistance = 0;
    
    if( nums.length <=3 ){ 
        return nums[0]+nums[1]+nums[2]; 
    }
    else{
        // sort array
        nums = nums.sort(function(a, b){return a-b});
        // loop through all posible combinations
        for( i=0;i<nums.length-2;i++){
            j=i+1, k=nums.length-1;
            while( j<k ){
                temp = nums[i] + nums[j] + nums[k];
                tempDistance = Math.abs( temp-target );
                if( temp > target ){
                    if( tempDistance < minDistance ){
                        minDistance = tempDistance;
                        result = temp;
                    }
                    k--;
                }
                else if( temp < target ){
                    if( tempDistance < minDistance ){
                        minDistance = tempDistance;
                        result = temp;                        
                    }
                    j++;
                }
                else{
                    // temp equal to target
                    return temp;
                }
            }
        }
        return result;
    }
};