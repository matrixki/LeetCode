/*
Determine if a Sudoku is valid, according to: Sudoku Puzzles - The Rules.

The Sudoku board could be partially filled, where empty cells are filled with the character '.'.


A partially filled sudoku which is valid.

Note:
A valid Sudoku board (partially filled) is not necessarily solvable. Only the filled cells need to be validated.

tags: Amazon, DoorDash, Uber, Apple, Oracle, Cruise Automation, Microsoft, Facebook, Google, Adobe, Snapchat, Intuit

*/

/**
 * @param {character[][]} board
 * @return {boolean}
 */
 var isValidSudoku = function(board) {
    let box = [[],[],[],[],[],[],[],[],[]];
    for(let i=0;i<9;i++){
        let row = board[i], col = [];
        if(!checkValid(row)){
            return false;
        }
        for(let j=0;j<9;j++){
            col.push(board[j][i]);
            const boxIndex = 3*Math.floor(i/3) + Math.floor(j/3);
            box[boxIndex].push(board[i][j]);
        }
        if(!checkValid(col)){
            return false;
        }
    }
    for(let i=0;i<box.length;i++){
        if(!checkValid(box[i])){
            return false;
        }
    }
    return true;
};

const checkValid = (nums) => {
    let lookup = new Set();
    for(let i=0;i<nums.length;i++){
        if(nums[i]==="."){
            continue;
        }
        if(lookup.has(nums[i])){
            return false;
        }
        lookup.add(nums[i]);
    }
    return true;
};

//tags: Uber, Apple, Snapchat