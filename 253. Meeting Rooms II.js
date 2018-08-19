/*
Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), find the minimum number of conference rooms required.

Example 1:

Input: [[0, 30],[5, 10],[15, 20]]
Output: 2
Example 2:

Input: [[7,10],[2,4]]
Output: 1
*/

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    intervals.sort(function(a, b){
        return a.start-b.start;        
    });
    var lookup = [];
    var result = 0;
    for(var i=0, len=intervals.length;i<len;i++){
        if(lookup.length>0){
            lookup.sort(function(a, b){
                return a-b;
            });
            if(lookup[0]<=intervals[i].start){
                lookup[0] = intervals[i].end;
            }
            else{
                lookup.push(intervals[i].end);
                result++;
            }
        }
        else{
            lookup.push(intervals[i].end);
            result++;
        }
    }
    return result;
};

//tags: Facebook, Microsoft, Amazon, Bloomberg, Uber, Google
