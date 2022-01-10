/*
Given two binary strings, return their sum (also a binary string).

For example,
a = "11"
b = "1"
Return "100".

tags: Facebook, Google, Adobe, Samsung, Apple, ByteDance

*/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 var addBinary = function(a, b) {
    let pointerA = a.length-1, pointerB = b.length-1;
    let result = '', overflow = false;
    while( pointerA >= 0 || pointerB >=0 ){
        let currA = a[pointerA] ? parseInt(a[pointerA]) : 0;
        let currB = b[pointerB] ? parseInt(b[pointerB]) : 0;
        if(overflow){
            if( (currA+currB+1)>1 ){
                result = ((currA+currB+1)%2).toString() + result;
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