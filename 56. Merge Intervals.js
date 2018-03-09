/*
Given a collection of intervals, merge all overlapping intervals.

For example,
Given [1,3],[2,6],[8,10],[15,18],
return [1,6],[8,10],[15,18].
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
 * @return {Interval[]}
 */
var merge = function(intervals) {
    if( intervals.length <= 1 ){
        return intervals;
    }
    var result = [], intArr = [];
    // sort by intervals start value
    intervals.sort(function(a,b){
        return a.start-b.start;
    });
    // initialize first value
    var min = intervals[0].start;
    var max = intervals[0].end;
    for( var i=1, len=intervals.length;i<len;i++ ){
        var current = intervals[i];
        if( max >= current.start ){
            max = Math.max( max, current.end );
        }
        else{
            result.push( [min,max] );
            min = current.start;
            max = current.end;
        }
        //reach the end of the intervals array
        if( i === (len-1) ){
            result.push( [min, max] );
        }
    }
    return result;
};

//tags: Google, Facebook, Microsoft, Bloomberg, Linkedin, Twitter, Yelp
