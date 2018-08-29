/*
The count-and-say sequence is the sequence of integers beginning as follows:
1, 11, 21, 1211, 111221, ...

1 is read off as "one 1" or 11.
11 is read off as "two 1s" or 21.
21 is read off as "one 2, then one 1" or 1211.
Given an integer n, generate the nth sequence.

Note: The sequence of integers will be represented as a string.
*/

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {

    var start = '1';
    if( n <= 1){ return start; }
    for(var i=1;i<n;i++){
        start = generateStr(start);
    }
    return start;
    
    function generateStr( str ){
        var result = '';
        var length = str.length;
        var count = 0;
        var target = str[0];
        var pointer = 0;
        while(pointer<length){
            if( str[pointer] === target ){
                count++;
                pointer++;
            }
            else{
                result += count.toString() + target;
                count = 0;
                target = str[pointer];
            }
        } 
        //last
        result += count.toString() + target;
        return result;
    } 
};

//tags: Facebook, Google
