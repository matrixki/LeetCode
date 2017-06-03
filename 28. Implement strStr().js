/*
Implement strStr().

Returns the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
*/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    var length = haystack.length;
    var nlength = needle.length;
    if( length < 1 && nlength < 1){
        return length === nlength ? 0 : -1;
    }
    if( nlength === 0 && length > 0 ){
        return 0;
    }
    if( length < nlength ){
        return -1;
    }
    for(var i =0;i<length;i++){
        var comp = haystack.substr(i,nlength);
        if( comp === needle ){
            return i;
        }
    }
    return -1;
};

/* use indexOf is silly in this question... */