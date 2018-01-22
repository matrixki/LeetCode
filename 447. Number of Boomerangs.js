/*
Given n points in the plane that are all pairwise distinct, a "boomerang" is a tuple of points (i, j, k) such that the distance between i and j equals the distance between i and k (the order of the tuple matters).

Find the number of boomerangs. You may assume that n will be at most 500 and coordinates of points are all in the range [-10000, 10000] (inclusive).

Example:
Input:
[[0,0],[1,0],[2,0]]

Output:
2

Explanation:
The two boomerangs are [[1,0],[0,0],[2,0]] and [[1,0],[2,0],[0,0]]
*/

/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
    var result = 0;
    var lookup = {};
    
    for(var i=0, len=points.length;i<len;i++){
        for(var j=0;j<len;j++){
            if( i===j ){ continue; }
            var d = getDistance( points[i], points[j] );
            if( lookup[d] ){
                ++lookup[d];
            }
            else{
                lookup[d] = 1;
            }
        }
        for( key in lookup){
            var val = lookup[key];
            result += val*(val-1);
        }
        lookup = {};
    }
    return result;
    
    function getDistance(a,b){
        var x = a[0] - b[0];
        var y = a[1] - b[1];
        // no need to get sqrt root in this case
        return x*x + y*y;
    }
};

//tags: Google