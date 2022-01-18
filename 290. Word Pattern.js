/*
Given a pattern and a string str, find if str follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

Examples:
pattern = "abba", str = "dog cat cat dog" should return true.
pattern = "abba", str = "dog cat cat fish" should return false.
pattern = "aaaa", str = "dog cat cat dog" should return false.
pattern = "abba", str = "dog dog dog dog" should return false.
Notes:
You may assume pattern contains only lowercase letters, and str contains lowercase letters separated by a single space.

Credits:
Special thanks to @minglotus6 for adding this problem and creating all test cases.

tags: Amazon, Bolt

*/

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
 var wordPattern = function(pattern, s) {
    const arr = s.split(" ");
    if(arr.length !== pattern.length){ return false; }
    const lookup1 = new Map(), lookup2 = new Map();
    for(let i=0;i<pattern.length;i++){
        if( lookup1.has(arr[i]) && lookup1.get(arr[i]) !== pattern[i] ){
            return false;
        }
        lookup1.set(arr[i], pattern[i]);
    }
    
    for(let i=0;i<pattern.length;i++){
        if( lookup2.has(pattern[i]) && lookup2.get(pattern[i]) !== arr[i] ){
            return false;
        }
        lookup2.set(pattern[i], arr[i]);
    }
    return true;
};

//tags: Uber, Dropbox