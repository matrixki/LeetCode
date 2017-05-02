/*
Given a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.

For example,
Given 1->2->3->3->4->4->5, return 1->2->5.
Given 1->1->1->2->3, return 2->3.
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
var deleteDuplicates = function(head) {
    if(!head){ return head; }
    var prev = new ListNode();
    var node = new ListNode();
    var current = new ListNode();
    prev.next = head;
    node = prev;
    current = head;
    var rmFlag = false;
    while( current !== null ){
        if( current.next && current.val === current.next.val ){
            current.next = current.next.next;
            rmFlag = true;
        }
        else if(rmFlag){
            prev.next = current.next;
            current = prev.next;
            rmFlag = false;
        }
        else{
            prev = current;
            current = current.next;
        }
    }
    return node.next;
};