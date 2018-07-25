/*
Find the total area covered by two rectilinear rectangles in a 2D plane.

Each rectangle is defined by its bottom left corner and top right corner as shown in the figure.

Rectangle Area

Example:

Input: A = -3, B = 0, C = 3, D = 4, E = 0, F = -1, G = 9, H = 2
Output: 45
Note:

Assume that the total area is never beyond the maximum possible value of int.
*/

/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function(A, B, C, D, E, F, G, H) {
    var xa = C-A;
    var ya = D-B;
    var xb = G-E;
    var yb = H-F;
    
    var left = Math.max(A,E);
    var right = Math.min(C,G);
    var bottom = Math.max(B,F);
    var top = Math.min(D,H);
    
    var overlap = 0;
    if( right>left && top>bottom ){
       overlap = (right-left)*(top-bottom);
    }
    
    return xa*ya + xb*yb - overlap;
};

//tags: Amazon, Microsoft

