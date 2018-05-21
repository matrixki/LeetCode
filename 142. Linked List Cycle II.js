/*
Given a linked list, return the node where the cycle begins. If there is no cycle, return null.

Note: Do not modify the linked list.

Follow up:
Can you solve it without using extra space?
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
var detectCycle = function(head) {
    if(!head || !head.next){
        return null;
    }
    var slow = head;
    var fast = head;
    var entry = head;
    while(fast.next && fast.next.next){
        slow = slow.next;
        fast = fast.next.next;
        if( slow === fast ){
            while(slow!==entry){
                slow = slow.next;
                entry = entry.next;
            }
            return entry;
        }
    }
    return null;
};
