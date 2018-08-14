/*
A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down).

Write a function to determine if a number is strobogrammatic. The number is represented as a string.

For example, the numbers "69", "88", and "818" are all strobogrammatic.
*/

/**
 * @param {string} num
 * @return {boolean}
 */
var isStrobogrammatic = function(num) {
    var numStr = num.toString();
    for( var i=0, len = numStr.length;i<len;i++ ){
        if( !(numStr[i] === '1' && numStr[len-1-i] === '1' || numStr[i] === '0' && numStr[len-1-i] === '0' || numStr[i] === '8' && numStr[len-1-i] === '8' || numStr[i] === '6' && numStr[len-1-i] === '9' || numStr[i] === '9' && numStr[len-1-i] === '6') ){
            return false;
        }
    }
    return true;
};

//tags: Facebook, Google