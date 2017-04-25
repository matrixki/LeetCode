/*
Given a singly linked list, determine if it is a palindrome.

Follow up:
Could you do it in O(n) time and O(1) space?
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
var isPalindrome = function(head) {
    var str = '', rev = '';
    while( head !== null ){
        str = str + head.val;
        rev = head.val + rev;
        head = head.next;
    }
    return str === rev;
};


// for O(1) space
var isPalindrome = function(head) {
    
   	// find middle point
    function findMiddle(node){
        var slow = node;
        var fast = node;
        while( fast !== null && fast.next !==null ){
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow
    }
    
   	// reverse linkedlist
    function reverseNode(node){
        if( node === null || node.next === null ){
            return node;
        }
        var prev = null;
        var cur = node;
        while( cur !== null ){
            var temp = cur;
            cur = cur.next;
            temp.next = prev;
            prev = temp;
        }
        return prev;
    }
    
   	var middle = findMiddle(head);
    var rList = reverseNode(middle);
    
   	while( rList !== null ){
        if( head.val !== rList.val ){ return false; }
        head = head.next;
        rList = rList.next;
    }
    return true; 
};