/*

Given a list of dominoes, dominoes[i] = [a, b] is equivalent to dominoes[j] = [c, d] if and only if either (a==c and b==d), or (a==d and b==c) - that is, one domino can be rotated to be equal to another domino.

Return the number of pairs (i, j) for which 0 <= i < j < dominoes.length, and dominoes[i] is equivalent to dominoes[j].

 

Example 1:

Input: dominoes = [[1,2],[2,1],[3,4],[5,6]]
Output: 1
 

Constraints:

1 <= dominoes.length <= 40000
1 <= dominoes[i][j] <= 9

*/


/**
 * @param {number[][]} dominoes
 * @return {number}
 */
 var numEquivDominoPairs = function(dominoes) {
    let lookup = new Map();
    for(let i=0;i<dominoes.length;i++){
        const key = getKey(dominoes[i]);
        if(lookup.has(key)){
            lookup.set(key, lookup.get(key)+1);
        }
        else{
            lookup.set(key, 1);
        }
    }
    
    let result = 0;
    for(let value of lookup.values()){
        result += Math.floor(value*(value-1)/2);
    }
    return result;
    
    function getKey(dominoe){
        return Math.min(dominoe[0], dominoe[1])*10 + Math.max(dominoe[0], dominoe[1]);
    }
};