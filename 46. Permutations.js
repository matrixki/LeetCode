/*
Given a collection of distinct numbers, return all possible permutations.

For example,
[1,2,3] have the following permutations:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]

*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  
    var result = [], curr = [];
    if( nums.length <= 1 ){
        result.push(nums);
        return result;
    }
    backtracking( nums, curr, result );
    return result;
    function backtracking( nums, curr, result ){
        if( nums.length === 2 ){
            var temp1 = curr.slice(), temp2 = curr.slice();
            temp1.push( nums[0] );
            temp1.push( nums[1] );
            result.push(temp1);
            temp2.push(nums[1]);
            temp2.push(nums[0]);
            result.push(temp2);
            return;
        }
        else{
            for( var i=0, len = nums.length; i<len ;i++ ){
                var tempCurr = curr.slice();
                tempCurr.push( nums[i] );
                var tempNums = nums.slice();
                tempNums.splice( i, 1 );
                backtracking( tempNums, tempCurr, result );
            }
        }
    }
};

//tags: Microsoft, LinkedIn
