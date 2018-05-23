/*
Given a singly linked list L: L0→L1→…→Ln-1→Ln,
reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…

You may not modify the values in the list's nodes, only nodes itself may be changed.

Example 1:

Given 1->2->3->4, reorder it to 1->4->2->3.
Example 2:

Given 1->2->3->4->5, reorder it to 1->5->2->4->3.

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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if(!head || !head.next){
        return;
    }
    
    //find the middle point
    var slow = head;
    var fast = head;
    while(fast.next && fast.next.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    
    //reverse the second half list
    var preMiddle = slow;
    var preCurrent = slow.next;
    while( preCurrent.next ){
        var current = preCurrent.next;
        preCurrent.next = current.next;
        current.next = preMiddle.next;
        preMiddle.next = current;
    }
       
    
    //reorder list
    var node = head;
    var middle = slow.next;
    while(node != slow){
        slow.next = middle.next;
        middle.next = node.next;
        node.next = middle;
        node = middle.next;
        middle = slow.next;
    }
    
};

