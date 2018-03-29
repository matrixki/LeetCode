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
    var m = board.length, n = board[0].length, find = false;
    // find the first letter
    for( var i=0;i<m;i++ ){
        for( var j=0;j<n;j++ ){
            if( board[i][j] === word[0] ){
                searchWord( i, j, word.slice(1, word.length), [ [i,j] ] );
            }
        }
    }
    return find;
    
    function searchWord( m, n, word, lookup ){
        // console.log(lookup);
        if( word.length === 0){
            find = true;
        }
        // console.log('current: '+word);
        //up
        if( m-1>=0 && board[m-1][n] === word[0] && !checkExist(m-1,n,lookup) ){
            // console.log('up');
            lookup.push( [m-1,n] );
            searchWord( m-1, n, word.slice(1,word.length), lookup.concat() );
            lookup.pop();
        }
        //down
        if( m+1 <= board.length-1 && board[m+1][n] === word[0] && !checkExist(m+1,n,lookup) ){
            // console.log('down');
            lookup.push( [m+1,n] );
            searchWord( m+1, n, word.slice(1,word.length), lookup.concat() );
            lookup.pop();
        }
        //right
        if( n+1<= board[0].length-1 && board[m][n+1] === word[0] && !checkExist(m,n+1,lookup) ){
            // console.log('right');
            lookup.push([m,n+1]);
            searchWord( m, n+1, word.slice(1,word.length), lookup.concat() );
            lookup.pop()
        }        
        //left
        if( n-1>= 0 && board[m][n-1] === word[0] && !checkExist(m,n-1,lookup)){
            // console.log('left');
            lookup.push([m,n-1]);
            searchWord( m, n-1, word.slice(1,word.length), lookup.concat() );
            lookup.pop()
        }        
    }
    
    function checkExist( m,n,lookup ){
        for( index of lookup ){
            if( m === index[0] && n === index[1] ){
                return true;
            }
        }
        return false;
    }
};

//tags: Facebook, Microsoft, Bloomberg
