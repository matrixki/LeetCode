/*
Given a string s, partition s such that every substring of the partition is a palindrome.

Return all possible palindrome partitioning of s.

Example:

Input: "aab"
Output:
[
  ["aa","b"],
  ["a","a","b"]
]
*/

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    
    var result = [];
    track(s, [], 0)
    return result;
    
    function track(s, temp, pointer){
        if(pointer===s.length){
            result.push(temp);
            return;
        }
        for(var i=pointer;i<s.length;i++){
            var str = s.substring(pointer,i+1);
            if(isPalindrome(str)){
                temp.push(str);
                track(s, temp.concat(), i+1);
                temp.pop();
            }
        }
    }
    
    function isPalindrome(s){
        var str = s.replace(/[^a-z0-9]/ig,"").toLowerCase();
        var start =0, end = str.length-1
        while(start<end){
            if( str[start] !== str[end] ){
                return false;
            }
            start++;
            end--;
        }
        return true;        
    }
};

//tags: Bloomberg
