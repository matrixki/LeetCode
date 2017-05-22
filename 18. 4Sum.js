/*
Given an array S of n integers, are there elements a, b, c, and d in S such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.

Note: The solution set must not contain duplicate quadruplets.

For example, given array S = [1, 0, -1, 0, -2, 2], and target = 0.

A solution set is:
[
  [-1,  0, 0, 1],
  [-2, -1, 1, 2],
  [-2,  0, 0, 2]
]
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {

    function moveForward(index, nums){
        while( nums[index+1]===nums[index] ){
            index++;
        }
        return index;
    }
    function moveBackward(index, nums){
        while( nums[index-1]===nums[index] ){
            index--;
        }
        return index;
    }

    var result = [];
    nums.sort(function(a, b){return a-b});
    // boundary condition
    if( nums.length < 4 ){
        return result;
    }
    else if( nums.length === 4 && (nums[0]+nums[1]+nums[2]+nums[3]) === target ){
        result.push( [ nums[0], nums[1], nums[2], nums[3] ] );
        return result;
    }
    // the loop
    for(var i = 0;i<nums.length-3;i++){
        var j = i+1;
        while( j<nums.length-2 ){
            var curr = nums[i] + nums[j];
            var start = j+1, end = nums.length-1;
            while( start < end ){
                var sum = curr + nums[start] + nums[end];
                if( sum === target ){
                    result.push( [ nums[i], nums[j], nums[start], nums[end] ] );
                    // remove duplicate
                    start = moveForward(start, nums);
                    end = moveBackward(end, nums);
                    start++;
                    end--;                    
                }
                else if( sum > target ){
                    // remove duplicate
                    end = moveBackward(end, nums);
                    end--;
                }
                else if( sum < target ){
                    // remove duplicate
                    start = moveForward(start, nums);
                    start++;
                }
            }
            // remove duplicate
            j = moveForward(j, nums);
            j++;
        }
        // remove duplicate
        i = moveForward(i, nums);
    }
    return result;    
};