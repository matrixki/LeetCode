/*

Given an m x n integer matrix heightMap representing the height of each unit cell in a 2D elevation map, return the volume of water it can trap after raining.

 

Example 1:


Input: heightMap = [[1,4,3,1,3,2],[3,2,1,3,2,4],[2,3,3,2,3,1]]
Output: 4
Explanation: After the rain, water is trapped between the blocks.
We have two small pounds 1 and 3 units trapped.
The total volume of water trapped is 4.
Example 2:


Input: heightMap = [[3,3,3,3,3],[3,2,2,2,3],[3,2,1,2,3],[3,2,2,2,3],[3,3,3,3,3]]
Output: 10
 

Constraints:

m == heightMap.length
n == heightMap[i].length
1 <= m, n <= 200
0 <= heightMap[i][j] <= 2 * 104

tags: Google, Bloomberg, Amazon

*/

/**
 * @param {number[][]} heightMap
 * @return {number}
 */
 var trapRainWater = function(heightMap) {
    const rows = heightMap.length, cols = heightMap[0].length;
    let result = 0, max = Number.MIN_SAFE_INTEGER;
    let pQueue = new MinPriorityQueue();
    let visited = new Array();
    for(let i=0;i<rows;i++){
        visited[i] = [];
        for(let j=0;j<cols;j++){
            visited[i][j] = false;
        }
    }
    
    
    // add edges to priority queue
    for(let i=0;i<cols;i++){
        pQueue.enqueue([0, i], heightMap[0][i]);
        visited[0][i] = true;
        pQueue.enqueue([rows-1, i], heightMap[rows-1][i]);
        visited[rows-1][i] = true;
    }
    for(let i=1;i<rows-1;i++){
        pQueue.enqueue([i, 0], heightMap[i][0]);
        visited[i][0] = true;
        pQueue.enqueue([i, cols-1], heightMap[i][cols-1]);
        visited[i][cols-1] = true;
    }
    
    while(!pQueue.isEmpty()){
        const {priority, element} = pQueue.dequeue();
        max = Math.max(priority, max);
        let x = element[0], y = element[1];
        bfs(x-1, y);
        bfs(x+1, y);
        bfs(x, y-1);
        bfs(x, y+1);
    }
    return result;
    
    
    function bfs(x, y){
        // check boundary
        if(x<0 || y<0 || x>=rows || y >= cols || visited[x][y]){ return; }
        visited[x][y] = true;
        if(heightMap[x][y] > max){
            pQueue.enqueue([x, y], heightMap[x][y]);
        }
        else{
            result += (max - heightMap[x][y]);
            bfs(x-1, y);
            bfs(x+1, y);
            bfs(x, y-1);
            bfs(x, y+1);
        }
    }
};