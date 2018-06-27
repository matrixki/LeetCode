/*
Implement a trie with insert, search, and startsWith methods.

Example:

Trie trie = new Trie();

trie.insert("apple");
trie.search("apple");   // returns true
trie.search("app");     // returns false
trie.startsWith("app"); // returns true
trie.insert("app");   
trie.search("app");     // returns true
Note:

You may assume that all inputs are consist of lowercase letters a-z.
All inputs are guaranteed to be non-empty strings.

*/

/**
 * Initialize your data structure here.
 */
var Trie = function() {
    this.root = new TriNode();   
};

var TriNode = function(){   
    this.nodes = new Array(26);
    this.word = false;
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    var current = this.root;
    var offset = 'a'.charCodeAt(0);
    for(var i=0, len = word.length;i<len;i++){
        var letter = word[i];
        var index = letter.charCodeAt(0) - offset;
        if(!current.nodes[index]){
            current.nodes[index] = new TriNode();
        }
        current = current.nodes[index];
    }
    current.word = true;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    var current = this.root;
    var offset = 'a'.charCodeAt(0);
    for(var i=0, len=word.length;i<len;i++){
        var letter = word[i];
        var index = letter.charCodeAt(0) - offset;
        if(!current.nodes[index]){
            return false;
        }
        current = current.nodes[index];
    }
    if(current.word){
        return true;
    }
    else{
        return false;
    }
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    var current = this.root;
    var offset = 'a'.charCodeAt(0);
    for(var i=0, len=prefix.length;i<len;i++){
        var letter = prefix[i];
        var index = letter.charCodeAt(0) - offset;
        if(!current.nodes[index]){
            return false;
        }
        current = current.nodes[index];
    }
    return true;       
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = Object.create(Trie).createNew()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

 //tags: Google, Facebook, Microsoft, Bloomberg, Uber, Twitter
 