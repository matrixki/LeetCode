/*
There are a total of n courses you have to take, labeled from 0 to n-1.

Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]

Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?

Example 1:

Input: 2, [[1,0]] 
Output: true
Explanation: There are a total of 2 courses to take. 
             To take course 1 you should have finished course 0. So it is possible.
Example 2:

Input: 2, [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take. 
             To take course 1 you should have finished course 0, and to take course 0 you should
             also have finished course 1. So it is impossible.
Note:

The input prerequisites is a graph represented by a list of edges, not adjacency matrices. Read more about how a graph is represented.
You may assume that there are no duplicate edges in the input prerequisites.
*/

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    var graph = [];
    for(var i=0;i<numCourses;i++){
        graph[i] = [];
    }
        
    for(var i=0, len=prerequisites.length;i<len;i++){
        var curr = prerequisites[i][0];
        var pre = prerequisites[i][1];
        graph[curr].push(pre);
    }
    
    var visited = [];
    for(var i=0;i<numCourses;i++){
        if( dfs(i, graph, visited) ){
            return false;
        }
    }
    return true;
    
    function dfs(curr, graph, visited){
        //1 means visiting
        //2 means visited
        if( visited[curr] === 1 ){
            return true;
        }
        if( visited[curr] === 2 ){
            return false;
        }
        visited[curr] = 1;
        for( next of graph[curr] ){
            if( dfs(next, graph, visited) ){
                return true;
            }
        }
        visited[curr] = 2;
        return false;
    }
    
};

//tags: Apple, Uber, Zenifits, Yelp
