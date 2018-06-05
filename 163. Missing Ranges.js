/*
Given a sorted integer array nums, where the range of elements are in the inclusive range [lower, upper], return its missing ranges.

Example:

Input: nums = [0, 1, 3, 50, 75], lower = 0 and upper = 99,
Output: ["2", "4->49", "51->74", "76->99"]
*/

/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
var findMissingRanges = function(nums, lower, upper) {
    if( nums.length<1 ){
        return [ addResult(lower, upper) ];
    }
    var result = [];
    var next = lower;
    for(var i=0, len=nums.length;i<len;i++){
        var curr = nums[i];
        if( curr < next ){
            continue;
        }
        else if( curr === next ){
            next++;
        }
        else{
            result.push(addResult(next, curr-1));
            next = curr+1;
        }
    }
    if(next<=upper){
        result.push(addResult(next, upper));        
    }
    return result;
    
    function addResult(n1, n2){
        if(n1===n2){
            return n1.toString();
        }    
        else{
            return n1.toString()+'->'+n2.toString();
        }
    }
};

//tags: Google
