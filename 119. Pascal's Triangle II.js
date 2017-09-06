/*
Given an index k, return the kth row of the Pascal's triangle.

For example, given k = 3,
Return [1,3,3,1].

Note:
Could you optimize your algorithm to use only O(k) extra space?
*/

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if(rowIndex===0) return [1];
    var result = [ [1],[1,1] ];
    for(var i=2;i<rowIndex+1;i++){
        var temp = [];
        temp.push(1);
        for(var j=1;j<i;j++){
            temp.push( result[i-1][j] + result[i-1][j-1] );
        }
        temp.push(1);
        result.push(temp);
    }
    return result[rowIndex];
};


// O(k) space
var getRow = function(rowIndex) {
    var result = [1];
    for(var i=1;i<=rowIndex;i++){
        for(var j=i-1;j>0;j--){
            result[j] = result[j] + result[j-1];
        }
        result[i] = 1;
    }
    return result;
};