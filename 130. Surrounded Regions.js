/*
Given a 2D board containing 'X' and 'O' (the letter O), capture all regions surrounded by 'X'.

A region is captured by flipping all 'O's into 'X's in that surrounded region.

Example:

X X X X
X O O X
X X O X
X O X X
After running your function, the board should be:

X X X X
X X X X
X X X X
X O X X
Explanation:

Surrounded regions shouldn’t be on the border, which means that any 'O' on the border of the board are not flipped to 'X'. Any 'O' that is not on the border and it is not connected to an 'O' on the border will be flipped to 'X'. Two cells are connected if they are adjacent cells connected horizontally or vertically.


*/

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    if(board.length===0){ return; }
    var row = board.length;
    var column = board[0].length;
    // change consecutive corner 'O' to '1'
    for(var i=0;i<row;i++){
        searchO( board, i, 0, row, column );
        if(column>1){
            searchO( board, i, column-1, row, column );
        }
    }
    for( var j=1;j<column-1;j++ ){
        searchO(board,0,j, row, column);
        if(row>1){
            searchO(board, row-1, j, row, column);
        }
    }

    // change all 'O' to 'X'
    for(var i=0;i<row;i++){
        for(var j=0;j<column;j++){
            if( board[i][j] === 'O' ){
                board[i][j] = 'X';
            }
        }
    }
    // change all '1' to 'O'
    for(var i=0;i<row;i++){
        for(var j=0;j<column;j++){
            if( board[i][j] === '1' ){
                board[i][j] = 'O';
            }
        }
    }
    
    function searchO(board, i, j, row, column){
        if( board[i][j] === 'O' ){
            board[i][j] = '1';
            if(i>1){
                searchO(board, i-1, j, row, column);
            }
            if(j>1){
                searchO(board, i, j-1, row, column);
            }
            if(i<row-1){
                searchO(board, i+1, j, row, column);
            }
            if(j<column-1){
                searchO(board, i, j+1, row, column);
            }
        }        
    }
    
};
