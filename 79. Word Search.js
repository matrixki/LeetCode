/*
Given a 2D board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

For example,
Given board =

[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]
word = "ABCCED", -> returns true,
word = "SEE", -> returns true,
word = "ABCB", -> returns false.
*/

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    if( !word ){ return false; }
    var m = board.length, n = board[0].length;
    // find the first letter
    for( var i=0;i<m;i++ ){
        for( var j=0;j<n;j++ ){
            if( board[i][j] === word[0] ){
                if(searchWord( i, j, 0, word, board )){
                    return true;
                }
            }
        }
    }
    return false;
    
    function searchWord( m, n, index, word, board ){
        if( index === word.length){
            return true;
        }
        if( m<0 || m>=board.length || n<0 || n>=board[0].length || board[m][n] !== word[index]){
            return false;   
        }
        // mark the current, letter can only use once
        var temp = board[m][n];
        board[m][n] = '#';
        var flag = searchWord( m-1, n, index+1, word, board ) || searchWord( m+1, n, index+1, word, board ) || searchWord( m, n+1, index+1, word, board ) || searchWord( m, n-1,  index+1, word, board ); 
        board[m][n] = temp;
        return flag;
    }   
};

//tags: Facebook, Microsoft, Bloomberg
