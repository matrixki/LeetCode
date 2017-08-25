/*
Given a sorted linked list, delete all duplicates such that each element appear only once.

For example,
Given 1->1->2, return 1->2.
Given 1->1->2->3->3, return 1->2->3.
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
    
    let current = head;
    
    while(current !== null && current.next !== null){
        if(current.val === current.next.val){
            current.next = current.next.next;
        }
        else{
            current = current.next;
        }
    }    
    return head;
};