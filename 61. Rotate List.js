/*
Given a list, rotate the list to the right by k places, where k is non-negative.

For example:
Given 1->2->3->4->5->NULL and k = 2,
return 4->5->1->2->3->NULL.
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if( !head ){ return head; }
    // find list length first
    var tail, newNode = new ListNode();
    var len = 1;
    tail = head;
    while(tail.next){
        tail = tail.next;
        len++;
    }
    // make it circular
    tail.next = head;
    
    // make the connection
    k = k%len;
    for(var i=0;i<(len-k);i++){
        tail = tail.next;
    }
    
    newNode = tail.next;
    tail.next = null;
    
    return newNode;
};