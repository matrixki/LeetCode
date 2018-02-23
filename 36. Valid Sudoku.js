/*
Determine if a Sudoku is valid, according to: Sudoku Puzzles - The Rules.

The Sudoku board could be partially filled, where empty cells are filled with the character '.'.


A partially filled sudoku which is valid.

Note:
A valid Sudoku board (partially filled) is not necessarily solvable. Only the filled cells need to be validated.


*/

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    var boxs = [[],[],[],[],[],[],[],[],[]];
    for( var i=0;i<9;i++ ){
        var row = [];
        if( !checkValid( board[i] ) ){
            return false;
        }
        for( var j=0;j<9;j++ ){
            row.push( board[j][i] );
            var bIndex = 3*Math.floor(i/3) +Math.floor(j/3);
            boxs[ bIndex ].push( board[i][j] );
        }
        if(!checkValid( row )){
            return false;
        }
    }
    for( var i=0;i<9;i++ ){
        if( !checkValid( boxs[i] ) ){
            return false;
        }
    }
    return true;
    function checkValid(arr){
        var map = new Set();
        for( var i=0;i<9;i++ ){
            if( arr[i] === '.' ){
                continue;
            }
            if( map.has(arr[i]) ){
                return false;
            }
            else{
                map.add( arr[i] );
            }
        }
        return true;
    }
};

//tags: Uber, Apple, Snapchat