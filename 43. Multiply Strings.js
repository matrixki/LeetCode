/*
Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2.

Note:

The length of both num1 and num2 is < 110.
Both num1 and num2 contains only digits 0-9.
Both num1 and num2 does not contain any leading zero.
You must not use any built-in BigInteger library or convert the inputs to integer directly.

*/

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    var len1 = num1.length, len2 = num2.length;
    var arr = [], result = '';
    for(var i=0;i<len1+len2;i++){
        arr.push(0);
    }
    for( var i=len1-1;i>=0;--i ){
        for( var j=len2-1;j>=0;--j ){
            var index = i+j+1;
            var temp = (num1[i]-'0')*(num2[j]-'0')+arr[index];
            arr[index-1] += Math.floor(temp/10);
            arr[index] = temp%10;
        }
    }
    var startIndex = 0, arrlen = arr.length;
    for(var i=0;i<arrlen;++i){
        if( arr[i] !== 0 ){
            startIndex = i;
            break;
        }
    }
    if( startIndex === 0 && arr[0] === 0 ){
        return '0';
    }
    else{
        for(var i=startIndex;i<arrlen;i++){
            result += arr[i].toString();
        }
        return result;    
    }
};

//tags: Facebook, Twitter