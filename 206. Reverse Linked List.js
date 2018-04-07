/*
Reverse a singly linked list.

click to show more hints.

Hint:
A linked list can be reversed either iteratively or recursively. Could you implement both?
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    var prev = null;
    var cur = head;
    while( cur !== null ){
        var temp = cur;
        cur = cur.next;
        temp.next = prev;
        prev = temp;
    }
    return prev;
};

// recursive check https://leetcode.com/articles/reverse-linked-list/

//tags: Facebook, Amazon, Microsoft, Bloomberg, Uber, Twitter, Apple, Snapchat, Zenefits, Yelp, Yahoo, Adobe