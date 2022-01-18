/*

Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

Clarification: The input/output format is the same as how LeetCode serializes a binary tree. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.

 

Example 1:


Input: root = [1,2,3,null,null,4,5]
Output: [1,2,3,null,null,4,5]
Example 2:

Input: root = []
Output: []
 

Constraints:

The number of nodes in the tree is in the range [0, 104].
-1000 <= Node.val <= 1000

tags: LinkedIn, Amazon, Microsoft, Snapchat, DoorDash, tiktok, Oracle, Uber, Google, Nutanix, Nvidia, Facebook, Quora, Adobe, Qualtrics

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
 var serialize = function(root) {
    if(!root) {
        return "";
    }
    const arr = [];
    buildString(root, arr);
    return arr.join(',');
};

const buildString = (node, arr) => {
    if(!node) {
        arr.push(null);
        return;
    }
    arr.push(node.val);
    buildString(node.left, arr);
    buildString(node.right, arr);           
};


/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if(!data || !data.length){ return null; }
    const arr = data.split(",");
    return buildTree(arr);
};

const buildTree = (arr) => {
    const val = arr.shift();
    if(val === ""){
        return null;
    }
    const node = new TreeNode(val);
    node.left = buildTree(arr);
    node.right = buildTree(arr);
    return node;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */