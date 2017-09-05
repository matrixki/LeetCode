/*
Given numRows, generate the first numRows of Pascal's triangle.

For example, given numRows = 5,
Return

[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
*/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
       
    if( numRows < 1 ) return [];
    var result = [[1]];
    for(var i=1;i<numRows;i++){
        var temp = [];
        temp.push(1);
        for(var j=1;j<i;j++){
            temp.push(result[i-1][j]+result[i-1][j-1]);
        }
        temp.push(1);
        result.push(temp);
    }
    return result;
    
};