/*
Given two 1d vectors, implement an iterator to return their elements alternately.

Example:

Input:
v1 = [1,2]
v2 = [3,4,5,6] 

Output: [1,3,2,4,5,6]

Explanation: By calling next repeatedly until hasNext returns false, 
             the order of elements returned by next should be: [1,3,2,4,5,6].
Follow up: What if you are given k 1d vectors? How well can your code be extended to such cases?

Clarification for the follow up question:
The "Zigzag" order is not clearly defined and is ambiguous for k > 2 cases. If "Zigzag" does not look right to you, replace "Zigzag" with "Cyclic". For example:

Input:
[1,2,3]
[4,5,6,7]
[8,9]

Output: [1,4,8,2,5,9,3,6,7].
*/

/**
 * @constructor
 * @param {Integer[]} v1
 * @param {Integer[]} v1
 */
var ZigzagIterator = function ZigzagIterator(v1, v2) {
    this.collection = [];
    if(v1!==null&&v1.length>0){
        this.collection.push(v1);
    }
    if(v2!==null&&v2.length>0){
        this.collection.push(v2);
    }
};


/**
 * @this ZigzagIterator
 * @returns {boolean}
 */
ZigzagIterator.prototype.hasNext = function hasNext() {
    return this.collection.length > 0;
};

/**
 * @this ZigzagIterator
 * @returns {integer}
 */
ZigzagIterator.prototype.next = function next() {
    if( this.collection[0].length === 1 ){
        return this.collection.shift()[0];
    }
    else{
        var tmp = this.collection.shift();
        this.collection.push(tmp);
        return tmp.shift();
    }
};

/**
 * Your ZigzagIterator will be called like this:
 * var i = new ZigzagIterator(v1, v2), a = [];
 * while (i.hasNext()) a.push(i.next());
*/

//tags: Google, Facebook, Apple
