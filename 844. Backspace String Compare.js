/*
Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.
Example 1:

Input: S = "ab#c", T = "ad#c"
Output: true
Explanation: Both S and T become "ac".
Example 2:

Input: S = "ab##", T = "c#d#"
Output: true
Explanation: Both S and T become "".
Example 3:

Input: S = "a##c", T = "#a#c"
Output: true
Explanation: Both S and T become "c".
Example 4:

Input: S = "a#c", T = "b"
Output: false
Explanation: S becomes "c" while T becomes "b".
Note:

1 <= S.length <= 200
1 <= T.length <= 200
S and T only contain lowercase letters and '#' characters.
Follow up:

Can you solve it in O(N) time and O(1) space?
*/

/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    let s = [];
    for(let i=0,len=S.length;i<len;i++){
        if( S[i] === '#' ){
            s.pop();
        }
        else{
            s.push(S[i]);    
        }
    }
    let t = [];
    for(let i=0,len=T.length;i<len;i++){
        if( T[i] === '#' ){
            t.pop();
        }
        else{
            t.push(T[i]);    
        }
    }    
    
    return s.join('') === t.join('');
};

/* two pointer */
var backspaceCompare = function(S, T) {
    let slen = S.length;
    let strS  = '';
    let count = 0;
    for( let i=slen-1;i>=0;i-- ){
        let curr = S[i];
        if(curr==='#'){
            count++;
        }
        else{
            if(count>0){
                count--;
            }
            else{
                strS += curr;
            }
        }
    }
    let tlen = T.length;
    let strT  = '';
    count = 0;
    for( let j=tlen-1;j>=0;j-- ){
        let curr = T[j];
        if(curr==='#'){
            count++;
        }
        else{
            if(count>0){
                count--;
            }
            else{
                strT += curr;
            }
        }
    }        
    return strS === strT;
};

//tags: Google, Facebook


