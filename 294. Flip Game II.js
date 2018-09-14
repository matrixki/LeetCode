/*
You are playing the following Flip Game with your friend: Given a string that contains only these two characters: + and -, you and your friend take turns to flip two consecutive "++" into "--". The game ends when a person can no longer make a move and therefore the other person will be the winner.

Write a function to determine if the starting player can guarantee a win.

For example, given s = "++++", return true. The starting player can guarantee a win by flipping the middle "++" to become "+--+".

Follow up:
Derive your algorithm's runtime complexity.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var canWin = function(s) {
    if (s.length === 0) {
        return false;
    }
    return checkCanWin(s);
    
    function checkCanWin(str){
        for(var i=0;i<str.length-1;i++){
            if( str[i] === '+' && str[i+1] === '+' ){
                var newStr = str.substr(0,i) + '--' + str.substring(i+2);
                var win = !checkCanWin(newStr);
                if(win){ return true; }
            }
        }
        return false;        
    }
};

//tags: Google, Rubrik
