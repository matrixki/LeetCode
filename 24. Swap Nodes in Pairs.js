/*
Given a linked list, swap every two adjacent nodes and return its head.

For example,
Given 1->2->3->4, you should return the list as 2->1->4->3.

Your algorithm should use only constant space. You may not modify the values in the list, only nodes itself can be changed.
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
var swapPairs = function(head) {
    var node = new ListNode();
    node.next = head;
    // prepare for first swap
    var prev = node;
    var curr = head;
    var keep;
    
    while( curr !== null && curr.next !== null ){
        keep = curr.next.next;
        curr.next.next = curr;
        prev.next = curr.next;
        curr.next = keep;
        
        //next combination
        prev = curr;
        curr = keep;
    }
    
    return node.next;
};

//tags: Microsoft, Bloomberg, Uber