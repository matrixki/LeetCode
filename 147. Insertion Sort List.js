/*
Sort a linked list using insertion sort.


A graphical example of insertion sort. The partial sorted list (black) initially contains only the first element in the list.
With each iteration one element (red) is removed from the input data and inserted in-place into the sorted list
 

Algorithm of Insertion Sort:

Insertion sort iterates, consuming one input element each repetition, and growing a sorted output list.
At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list, and inserts it there.
It repeats until no input elements remain.

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
var insertionSortList = function(head) {
    if(!head){ return head; }
    var prehead = new ListNode();
    prehead.next = head;
    var curr = head;
    while(curr && curr.next){
        if(curr.val <= curr.next.val){
            curr = curr.next;
        }
        else{
            var temp = curr.next;
            curr.next = temp.next;
            var prev = prehead;
            while(prev.next && prev.next.val < temp.val){
                prev = prev.next;                
            }
            temp.next = prev.next;
            prev.next = temp;
        }
    }
    return prehead.next;
};

