/*
Given a binary tree, return the vertical order traversal of its nodes' values. (ie, from top to bottom, column by column).

If two nodes are in the same row and column, the order should be from left to right.

Examples 1:

Input: [3,9,20,null,null,15,7]

   3
  /\
 /  \
 9  20
    /\
   /  \
  15   7 

Output:

[
  [9],
  [3,15],
  [20],
  [7]
]
Examples 2:

Input: [3,9,8,4,0,1,7]

     3
    /\
   /  \
   9   8
  /\  /\
 /  \/  \
 4  01   7 

Output:

[
  [4],
  [9],
  [3,0,1],
  [8],
  [7]
]
Examples 3:

Input: [3,9,8,4,0,1,7,null,null,null,2,5] (0's right child is 2 and 1's left child is 5)

     3
    /\
   /  \
   9   8
  /\  /\
 /  \/  \
 4  01   7
    /\
   /  \
   5   2

Output:

[
  [4],
  [9,5],
  [3,0,1],
  [8,2],
  [7]
]
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalOrder = function(root) {
    if(!root){
        return [];
    }
    let lookup = new Map();
    let queue = [], cols = [];
    let min = 0, max = 0;
    queue.push(root);
    cols.push(0);
    while( queue.length>0 ){
        let node = queue.shift();
        let col = cols.shift();
        if(!lookup.has( col )){
            lookup.set( col, [] );
        }
        let tmp = lookup.get(col);
        tmp.push(node.val);
        
        if(node.left){
            queue.push(node.left);
            cols.push(col-1);
            min = Math.min(min, col-1);
        }
        
        if(node.right){
            queue.push(node.right);
            cols.push(col+1);
            max = Math.max(max, col+1);
        }
    }
    let result = [];
    for(let i=min;i<=max;i++){
        result.push( lookup.get(i) );
    }
    return result;
};

//tags: Facebook, Amazon, Microsoft
