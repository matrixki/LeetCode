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
    var result = [], notzone = [];
    var dict = tickets;
    var target = 'JFK';
    var toDrop = [];
    while(dict.length>0){
        var noResult = true;
        for(var i=0;i<dict.length;i++){
            var curr = dict[i];
            if(curr[0]=== target && notzone.indexOf(curr[1])<0){
                if( toDrop.length === 0 ){
                    toDrop = curr;
                }
                else{
                    if( curr[1] < toDrop[1] ){
                        toDrop = curr;
                    }                    
                }
                noResult = false;
                notzone = [];
            }
            if(toDrop.length > 0 && !noResult){
                var index = dict.indexOf(toDrop);
                var drop = dict.splice(index,1);
                drop = drop[0];
                if( result.length === 0 ){
                    result.push(drop[0]);
                    result.push(drop[1]);                    
                }
                else{
                    result.push(drop[1]);
                }
                target = drop[1];
                break;                
            }
        }
        if( noResult ){
            notzone.push(target);
            dict = tickets;
            result = [];
        }        
    }
    return result;
};