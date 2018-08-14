/*
A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down).

Find all strobogrammatic numbers that are of length = n.

Example:

Input:  n = 2
Output: ["11","69","88","96"]
*/

/**
 * @param {number} n
 * @return {string[]}
 */
var findStrobogrammatic = function(n) {
    
    return listNumber(n,n);
    
    function listNumber(m ,n){
        if(m===0){
            return [''];
        }    
        else if(m===1){
            return ['0','1','8'];
        }
        var prev = listNumber(m-2,n);
        var result = [];
        for(var str of prev){
            if(m!==n){
                result.push('0'+str+'0');
            }    
            result.push('1'+str+'1');
            result.push('6'+str+'9');
            result.push('8'+str+'8');
            result.push('9'+str+'6');
        }
        return result;
    }
};

//tags: Facebook