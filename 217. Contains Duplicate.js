/*
Given an array of integers, find if the array contains any duplicates. Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let lookup = new Set();
    for (num of nums) {
        if (lookup.has(num)) { return true; }
        lookup.add(num);
    }
    return false;
};

//tags: Apple, Google, Amazon