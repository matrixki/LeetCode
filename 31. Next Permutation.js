/*
Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).

The replacement must be in-place, do not allocate extra memory.

Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.
1,2,3 → 1,3,2
3,2,1 → 1,2,3
1,1,5 → 1,5,1
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    var len = nums.length, index = len-1;
    while( nums[index] <= nums[index-1] ){
        index--;
        if( index === 0 ){
            nums = nums.reverse();
            return;
        }
    }
    var temp=null, tempIndex=null;
    for(var i=len-1;i>=index-1;i--){
        if( nums[i] > nums[index-1] ){
            temp = nums[i];
            tempIndex = i;
            break;
        }
    }
    if( temp ){
        nums[tempIndex] = nums[index-1];
        nums[index-1] = temp;
    }
    // no need to sort, just reverse would work
    // var tempa = nums.slice( index, len ).sort(function(a, b) { return a - b; });
    var tempa = nums.slice( index, len ).reverse();
    for( var j = index;j<len;j++ ){
        nums[j] = tempa.shift();
    }
};

//tags: Google