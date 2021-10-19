/*
Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), determine if a person could attend all meetings.

For example,
Given [[0, 30],[5, 10],[15, 20]],
return false.

tags: Amazon, Microsoft, Wayfair

*/

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */

/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
 var canAttendMeetings = function(intervals) {
    intervals.sort(function(a,b){
        return a[0]-b[0];
    });
    for(let i=0, len = intervals.length;i<len-1;i++){
        if( intervals[i][1]> intervals[i+1][0] ){
            return false;
        }
    }
    return true;    
};

//tags: Facebook, Microsoft, Amazon
