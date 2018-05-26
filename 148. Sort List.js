/*
Sort a linked list in O(n log n) time using constant space complexity.

Example 1:

Input: 4->2->1->3
Output: 1->2->3->4
Example 2:

Input: -1->5->3->4->0
Output: -1->0->3->4->5
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
var sortList = function(head) {
    if(!head || !head.next){
        return head;
    }
    var slow = head;
    var fast = head;
    while(fast.next && fast.next.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    fast = slow.next;
    slow.next = null;
    
    var left = sortList(head);
    var right = sortList(fast);
    
    return merge(left, right);
    
    function merge(l1, l2){
        if(!l1){
            return l2;
        }
        else if(!l2){
            return l1;
        }
        else if(!l1 && !l2){
            return null;
        }
        
        var node = new ListNode();
        var prev = node;
        
        while(l1&&l2){
            if( l1.val < l2.val ){
                prev.next = l1;
                l1 = l1.next;
            }
            else{
                prev.next = l2;
                l2 = l2.next;
            }
            prev = prev.next;
        }
        
        if(l1){
            prev.next = l1;
        }
        else if(l2){
            prev.next = l2;
        }
        
        return node.next;
    }
        
};
