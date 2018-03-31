/*
Follow up for "Remove Duplicates":
What if duplicates are allowed at most twice?

For example,
Given sorted array nums = [1,1,1,2,2,3],

Your function should return length = 5, with the first five elements of nums being 1, 1, 2, 2 and 3. It doesn't matter what you leave beyond the new length.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var pointer = 0, count =1;
    for(var i=1, len=nums.length;i<len;i++){
        if( nums[pointer] !== nums[i] ){
            pointer++;
            nums[pointer] = nums[i];
            count = 1;
        }
        else{
        	if(count<2){
	            pointer++;
	            nums[pointer] = nums[i];
	            count++;
        	}
        }
    }
    return pointer+1;
};

//tags: Facebook