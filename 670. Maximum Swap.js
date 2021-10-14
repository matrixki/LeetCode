/*

You are given an integer num. You can swap two digits at most once to get the maximum valued number.

Return the maximum valued number you can get.

 

Example 1:

Input: num = 2736
Output: 7236
Explanation: Swap the number 2 and the number 7.
Example 2:

Input: num = 9973
Output: 9973
Explanation: No swap.
 

Constraints:

0 <= num <= 108

tags: Facebook

*/

/**
 * @param {number} num
 * @return {number}
 */
 var maximumSwap = function(num) {
    let numStr = num.toString().split('');
    let lookup = new Array(numStr.length).fill(0);
    for(let i=0;i<numStr.length;i++){
        lookup[numStr[i]] = i;
    }
    for(let i=0;i<numStr.length;i++){
        for(let j=9;j>numStr[i];j--){
            if(lookup[j]>i){
                let temp = numStr[i];
                numStr[i] = numStr[lookup[j]];
                numStr[lookup[j]] = temp;
                return parseInt(numStr.join(''));
            }
        }
    }
    return num;
};