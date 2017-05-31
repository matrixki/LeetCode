/*
Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.
*/


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    var newNode = new ListNode(null);
    var head = newNode;
    
    if( l1 === null ){ return l2; }
    else if( l2 === null ){ return l1; }
    
    while( l1 !== null && l2 !== null ){
        if( l1.val < l2.val ){
            newNode.next = new ListNode(l1.val);
            l1 = l1.next;
        }
        else{
            newNode.next = new ListNode(l2.val);
            l2 = l2.next;
        }
        newNode = newNode.next;
    }
    if( l1 === null ){
        newNode.next = l2;
    }
    else if( l2 === null ){
        newNode.next = l1;
    }    

    return head.next;
};