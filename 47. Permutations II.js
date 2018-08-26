/*
Given a collection of numbers that might contain duplicates, return all possible unique permutations.

For example,
[1,1,2] have the following unique permutations:
[
  [1,1,2],
  [1,2,1],
  [2,1,1]
]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    var result = [], curr = [];
    if( nums.length <= 1 ){
        result.push(nums);
        return result;
    }
    nums.sort((a,b)=>{return a-b});
    backtracking( nums, curr, result );
    return result;
    function backtracking( nums, curr, result ){
        if( nums.length === 2 ){
            if( nums[0] === nums[1] ){
                var temp1 = curr.slice();
                temp1.push( nums[0] );
                temp1.push( nums[1] );
                result.push(temp1);                
            }
            else{
                var temp1 = curr.slice(), temp2 = curr.slice();
                temp1.push( nums[0] );
                temp1.push( nums[1] );
                result.push(temp1);
                temp2.push(nums[1]);
                temp2.push(nums[0]);
                result.push(temp2);    
            }
            return;
        }
        else{
            for( var i=0, len = nums.length; i<len ;i++ ){
                if( i>0 && nums[i] === nums[i-1] ){
                    continue;
                }
                var tempCurr = curr.slice();
                tempCurr.push( nums[i] );
                var tempNums = nums.slice();
                tempNums.splice( i, 1 );
                backtracking( tempNums, tempCurr, result );
            }
        }
    } 
};

//tags: Microsoft, LinkedIn, Facebook
