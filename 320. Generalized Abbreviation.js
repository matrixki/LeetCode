/*
Write a function to generate the generalized abbreviations of a word. 

Note: The order of the output does not matter.

Example:

Input: "word"
Output:
["word", "1ord", "w1rd", "wo1d", "wor1", "2rd", "w2d", "wo2", "1o1d", "1or1", "w1r1", "1o2", "2r1", "3d", "w3", "4"]
*/

/**
 * @param {string} word
 * @return {string[]}
 */
var generateAbbreviations = function(word) {
    var result = [];
    var len = word.length;
    for(var i=0;i<Math.pow(2, len);i++){
        var temp = '';
        var count = 0;
        for(var j=0;j<len;j++){
            if( (i>>j)&1  ){
                count++;
            }
            else{
                if(count!==0){
                    temp = count.toString() + temp;
                    count = 0;   
                }
                temp = word[len-1-j] + temp;
            }
        }
        if(count>0){
            temp = count.toString() + temp;
        }
        result.push(temp);
    }
    return result;
};

//tags: Google
