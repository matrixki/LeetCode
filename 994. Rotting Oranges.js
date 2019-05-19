/*
In a given grid, each cell can have one of three values:

the value 0 representing an empty cell;
the value 1 representing a fresh orange;
the value 2 representing a rotten orange.
Every minute, any fresh orange that is adjacent (4-directionally) to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange.  If this is impossible, return -1 instead.

 

Example 1:



Input: [[2,1,1],[1,1,0],[0,1,1]]
Output: 4
Example 2:

Input: [[2,1,1],[0,1,1],[1,0,1]]
Output: -1
Explanation:  The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.
Example 3:

Input: [[0,2]]
Output: 0
Explanation:  Since there are already no fresh oranges at minute 0, the answer is just 0.
 

Note:

1 <= grid.length <= 10
1 <= grid[0].length <= 10
grid[i][j] is only 0, 1, or 2.

*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let m = grid.length;
    let n = grid[0].length;
    let rottenCount = 0;
    let fresh = [];
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(grid[i][j]===1){
                let obj = {
                    x: i,
                    y: j,
                    val: 1
                };
                fresh.push(obj);
            }
            if(grid[i][j]===2){
                rottenCount++;
            }
        }
    }
    if(fresh.length===0){
        return 0;
    }
    if(rottenCount===0){
        return -1;
    }
    let result = 0;
    while(fresh.length>0){
        let toUpdate = [];
        let stillFresh = [];
        for(let i=0;i<fresh.length;i++){
            let curr = fresh[i];
            if( isRotten(curr.x, curr.y) ){
                toUpdate.push(curr);
            }
            else{
                stillFresh.push(curr);
            }
        }
        if(fresh.length===stillFresh.length){
            return -1;
        }
        //update grid
        for(let j=0;j<toUpdate.length;j++){
            let curr = toUpdate[j];
            grid[curr.x][curr.y] = 2;
        }
        fresh = stillFresh;
        result++;
    }
    return result;
    
    function isRotten(x, y){
        if( x-1>=0 && grid[x-1][y]===2 ){
            return true;
        }
        if( x+1<m && grid[x+1][y]===2 ){
            return true;
        }
        if( y-1>=0 && grid[x][y-1]===2 ){
            return true;
        }
        if( y+1<n && grid[x][y+1]===2 ){
            return true;
        }
        return false;
    }
};

//tags: Amazon, Google
