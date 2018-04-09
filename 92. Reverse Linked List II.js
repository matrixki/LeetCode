/*
Reverse a linked list from position m to n. Do it in-place and in one-pass.

For example:
Given 1->2->3->4->5->NULL, m = 2 and n = 4,

return 1->4->3->2->5->NULL.

Note:
Given m, n satisfy the following condition:
1 ≤ m ≤ n ≤ length of list.
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    if(!head || !head.next){ return head; }
    if(m===n){ return head; }
    var count = 0;
    var node = new ListNode(0);
    node.next = head;
    var nodeBackup = node;
    var prev = null, next = null;
    while(node){
        if( count === m-1 ){
            prev = node;
        }
        if( count === n ){
            next = node.next;
            node.next = null;
        }
        node = node.next;
        count++;
    }
    
    var reverseNode = reverseList(prev.next);
    prev.next = reverseNode;
    
    head = nodeBackup;
    while(head.next){
        head = head.next;
    }
    head.next = next;
    return nodeBackup.next; 
    
    function reverseList(head){
        var prev = null;
        var curr = head;
        while(curr){
            var temp = curr;
            curr = curr.next;
            temp.next = prev;
            prev = temp;
        }
        return prev;
    }
    
};
