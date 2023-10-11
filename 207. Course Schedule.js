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
    let graph = [];
    for (let i=0;i<prerequisites.length;i++) {
        const curr = prerequisites[i][0];
        const prev = prerequisites[i][1];
        graph[curr] ? graph[curr].push(prev) : graph[curr] = [prev];
    }
    let visited = [];
    for (let key in graph) {
        if (!dfs(graph, key, visited)) {
            return false;
        }
    }
    return true;
};

const dfs = (graph, index, visited) => {
    if (visited[index]) {
        return false;
    }
    if (graph[index]) {
        if (graph[index].length === 0) {
            return true;
        }

        visited[index] = true;
        for (let val of graph[index]) {
            if (!dfs(graph, val, visited)) {
                return false;
            }
        }
        visited[index] = false;
        graph[index] = [];
    }
    return true;
};

//tags: Apple, Uber, Zenifits, Yelp, Google, Amazon
