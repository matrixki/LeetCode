/*
Given a sorted integer array without duplicates, return the summary of its ranges.

Example 1:

Input:  [0,1,2,4,5,7]
Output: ["0->2","4->5","7"]
Explanation: 0,1,2 form a continuous range; 4,5 form a continuous range.
Example 2:

Input:  [0,2,3,4,6,8,9]
Output: ["0","2->4","6","8->9"]
Explanation: 2,3,4 form a continuous range; 8,9 form a continuous range.
*/

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    if(nums.length < 1){
        return [];
    }
    else if(nums.length === 1){
        return [nums[0].toString()];
    }
    var result = [];
    var pre = nums[0];
    var count = 0;
    var temp = pre.toString();
    for(var i=1,len=nums.length;i<len;i++){
        var curr = nums[i];
        if(curr-pre-count>1){
            if(count===0){
                result.push(pre.toString());
            }
            else{
                temp = temp + '->' + (pre+count).toString();
                result.push(temp);                
            }
            count = 0;
            pre = curr;
            temp = pre.toString();
        }
        else{
            count++;
        }
        if(i===len-1){
            if(count === 0){
                result.push(pre.toString());
            }
            else{
                temp = temp + '->' + curr.toString();
                result.push(temp);
            }
        }
    }
    return result;
};

//tags: Google, Indeed, Microsoft

