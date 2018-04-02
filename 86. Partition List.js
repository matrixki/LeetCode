/*
Given a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

You should preserve the original relative order of the nodes in each of the two partitions.

For example,
Given 1->4->3->2->5->2 and x = 3,
return 1->2->2->4->3->5.
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    var node1 = new ListNode();
    var node2 = new ListNode();
    var front = node1;
    var back = node2;
    while(head){
        if( head.val < x ){
            node1.next = head;
            node1 = node1.next;
        }
        else{
            node2.next = head;
            node2 = node2.next;
        }
        head = head.next;
    }
    node2.next = null;
    node1.next = back.next;
    return front.next;
};

