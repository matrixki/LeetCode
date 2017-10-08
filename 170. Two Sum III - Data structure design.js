/*
Design and implement a TwoSum class. It should support the following operations: add and find.

add - Add the number to an internal data structure.
find - Find if there exists any pair of numbers which sum is equal to the value.

For example,
add(1); add(3); add(5);
find(4) -> true
find(7) -> false
*/

/**
 * Initialize your data structure here.
 */
var TwoSum = function() {
    this.numbers = [];
    this.lookup = [];
};

/**
 * Add the number to an internal data structure.. 
 * @param {number} number
 * @return {void}
 */
TwoSum.prototype.add = function(number) {
    this.numbers.push(number);
    this.lookup[ number ] !== undefined ? this.lookup[ number ]++ : this.lookup[ number ] = 1;
};

/**
 * Find if there exists any pair of numbers which sum is equal to the value. 
 * @param {number} value
 * @return {boolean}
 */
TwoSum.prototype.find = function(value) {
    if( this.numbers.length <= 1 ) return false;
    for( var i=0;i<this.numbers.length;i++ ){
        var count = this.lookup[ value - this.numbers[i] ];
        if( count !== undefined ){
            if( (value -this.numbers[i]) === this.numbers[i] ){
                if( count >= 2 ){
                    return true;
                }
            }
            else{
                return true;
            }
        }
    }
   return false;
};

/** 
 * Your TwoSum object will be instantiated and called as such:
 * var obj = Object.create(TwoSum).createNew()
 * obj.add(number)
 * var param_2 = obj.find(value)
 */