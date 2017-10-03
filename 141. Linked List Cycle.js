/*
Given a linked list, determine if it has a cycle in it.

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
 * @return {boolean}
 */

/* extra space */
var hasCycle = function(head) {
    
    if( !head || !head.next ){
        return false;
    }
    
    var node = head;
    while( node ){
        if( node.flag ){
            return true;
        }
        else{
            node.flag = true;
        }
        node = node.next;
    }
    return false;
};

var hasCycle = function(head) {
    
    // slow, fast pointer
    if( !head || !head.next ){
        return false;
    }
    var slow = head;
    var fast = head.next;
    while( slow !== fast ){
        if( !fast || !fast.next ){
            return false;
        }
        slow = slow.next;
        fast = fast.next.next;
    }
    return true;
};