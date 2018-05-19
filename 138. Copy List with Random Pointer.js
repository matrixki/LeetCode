/*
A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.

Return a deep copy of the list.
*/

/**
 * Definition for singly-linked list with a random pointer.
 * function RandomListNode(label) {
 *     this.label = label;
 *     this.next = this.random = null;
 * }
 */

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */
var copyRandomList = function(head) {
    if(!head){ return null; }
    var lookup = new Map();
    var newList = [];
    var nhead = head;
    while(nhead){
        lookup.set(nhead, newList.length);
        newList.push(new RandomListNode(nhead.label));
        nhead = nhead.next;
    }
    nhead = head;
    for(var i=0, len=newList.length;i<len;i++){
        if (i !== len - 1){
            newList[i].next = newList[i+1];
        }
        var random = nhead.random;
        var index = lookup.get(random);
        if(index!==undefined){
            newList[i].random = newList[index];
        }
        nhead = nhead.next;
    }
    return newList[0];
};

//tags: Microsoft, Amazon, Bloomberg, Uber
