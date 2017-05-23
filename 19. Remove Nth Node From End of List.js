/*
Given a linked list, remove the nth node from the end of list and return its head.

For example,

   Given linked list: 1->2->3->4->5, and n = 2.

   After removing the second node from the end, the linked list becomes 1->2->3->5.


Note:
Given n will always be valid.
Try to do this in one pass.
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
 * @param {number} n
 * @return {ListNode}
 */

/* this is the first attempt, not in one pass */ 
var removeNthFromEnd = function(head, n) {
    // get the list length
    var len = 0;
    var pointer = new ListNode();
    var pointer2 = new ListNode();
    var newNode = new ListNode();
    
    pointer.next = head;
    
    while( pointer.next ){
        len++;
        pointer = pointer.next;
    }
    
    var count = 0;
    pointer2.next = head;
    newNode = pointer2;
    while( pointer2.next ){
        if( (len-n) === count){
            pointer2.next = pointer2.next.next;
            break;
        }        
        pointer2 = pointer2.next;
        count++;
    }
    return newNode.next; 
};

/* in one pass */
var removeNthFromEnd = function(head, n) {
    var slow = new ListNode();
    var fast = new ListNode();
    var newNode = new ListNode();
    
    newNode = slow;
    slow.next = head;
    fast = head;
    for(var i=0;i<n;i++){
        fast = fast.next;
    }
    while(fast!==null){
        slow = slow.next;
        fast = fast.next;
    }
    slow.next = slow.next.next;
    return newNode.next;
};