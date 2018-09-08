/*
You are given a m x n 2D grid initialized with these three possible values.

-1 - A wall or an obstacle.
0 - A gate.
INF - Infinity means an empty room. We use the value 231 - 1 = 2147483647 to represent INF as you may assume that the distance to a gate is less than 2147483647.
Fill each empty room with the distance to its nearest gate. If it is impossible to reach a gate, it should be filled with INF.

Example: 

Given the 2D grid:

INF  -1  0  INF
INF INF INF  -1
INF  -1 INF  -1
  0  -1 INF INF
After running your function, the 2D grid should be:

  3  -1   0   1
  2   2   1  -1
  1  -1   2  -1
  0  -1   3   4
*/

/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function(rooms) {
    if (rooms.length === 0 || rooms[0].length === 0) return;
    var queue = [];
    for(var i=0;i<rooms.length;i++){
        for(var j=0;j<rooms[0].length;j++){
            if(rooms[i][j]===0){
                queue.push([i,j]);
            }
        }
    }
    while(queue.length > 0){
        var temp = queue.shift();
        var row = temp[0];
        var col = temp[1];
        if(row>0 && rooms[row-1][col] === 2147483647){
            rooms[row-1][col] = rooms[row][col]+1;
            queue.push([row-1, col]);
        }
        if(row<rooms.length-1 && rooms[row+1][col] === 2147483647){
            rooms[row+1][col] = rooms[row][col]+1;
            queue.push([row+1, col]);
        }
        if(col>0 && rooms[row][col-1] === 2147483647){
            rooms[row][col-1] = rooms[row][col]+1;
            queue.push([row,col-1]);
        }
        if(col<rooms[0].length-1 && rooms[row][col+1] === 2147483647){
            rooms[row][col+1] = rooms[row][col]+1;
            queue.push([row,col+1]);            
        }
    }
};

//tags: Facebook
