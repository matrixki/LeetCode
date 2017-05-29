/*
Given a list of airline tickets represented by pairs of departure and arrival airports [from, to], reconstruct the itinerary in order. All of the tickets belong to a man who departs from JFK. Thus, the itinerary must begin with JFK.

Note:
If there are multiple valid itineraries, you should return the itinerary that has the smallest lexical order when read as a single string. For example, the itinerary ["JFK", "LGA"] has a smaller lexical order than ["JFK", "LGB"].
All airports are represented by three capital letters (IATA code).
You may assume all tickets form at least one valid itinerary.
Example 1:
tickets = [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]
Return ["JFK", "MUC", "LHR", "SFO", "SJC"].
Example 2:
tickets = [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
Return ["JFK","ATL","JFK","SFO","ATL","SFO"].
Another possible reconstruction is ["JFK","SFO","ATL","JFK","ATL","SFO"]. But it is larger in lexical order.
*/

/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {

    var length = tickets.length;
    
    var map = {
        JFK: []
    };
    
    var result = [];
    
    for(var i=0; i<length; i++){
        
        var from = tickets[i][0];
        var to = tickets[i][1];
        
        if(!map[from]){
            map[from] = [];
            map[from].push(to);
        } else {
            map[from].push(to);
        }
    }
    
    // sort map in lexical order
    for(var prop in map){
        map[prop].sort();
    }    
    
    dfs("JFK");    // dfs
    
    function dfs(from){        
        var tos = map[from];  
        while(tos && tos.length > 0){
            dfs(tos.shift()); 
        }
        result.unshift(from);
    }
    
    return result;

};