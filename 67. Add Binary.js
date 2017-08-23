/*
Given two binary strings, return their sum (also a binary string).

For example,
a = "11"
b = "1"
Return "100".
*/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let aLen = a.length, bLen = b.length;
    let pointerA = aLen-1, pointerB = bLen-1;
    let result = '';
    let overflow = false;
    while( pointerA >= 0 || pointerB >=0 ){
        let currA = a[pointerA] ? parseInt(a[pointerA]) : 0;
        let currB = b[pointerB] ? parseInt(b[pointerB]) : 0;
        if(overflow){
            if( (currA+currB+1)>1 ){
                if( (currA+currB+1)%2===0 ){
                    result = '0' + result;
                }
                else{
                    result = '1' + result;
                }
            }
            else{
                result = (currA+currB+1).toString() + result;
                overflow = false;
            }
        }
        else{
            if( (currA+currB)>1 ){
                overflow = true;
                result = '0' + result;
            }
            else{
                result = (currA+currB).toString() + result;
            }            
        }
        pointerA--;
        pointerB--;
    }
    return overflow? '1'+result : result;
};