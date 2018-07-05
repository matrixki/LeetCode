/*
Design a data structure that supports the following two operations:

void addWord(word)
bool search(word)
search(word) can search a literal word or a regular expression string containing only letters a-z or .. A . means it can represent any one letter.

Example:

addWord("bad")
addWord("dad")
addWord("mad")
search("pad") -> false
search("bad") -> true
search(".ad") -> true
search("b..") -> true
Note:
You may assume that all words are consist of lowercase letters a-z.
*/

/**
 * Initialize your data structure here.
 */
var WordDictionary = function() {
    this.root = new TriNode();
};

var TriNode = function(){   
    this.nodes = new Array(26);
    this.isEnd = false;
};

/**
 * Adds a word into the data structure. 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    var current = this.root;
    var offset = 'a'.charCodeAt(0);
    for(var i=0, len=word.length;i<len;i++){
        var letter = word[i];
        var index = letter.charCodeAt(0) - offset;
        if(!current.nodes[index]){
            current.nodes[index] = new TriNode();
        }
        current = current.nodes[index];
    }
    current.isEnd = true;
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    var search = function(current, level){
        if(!current || ( level === word.length && !current.isEnd ) ){
            return false;
        }
        if( level === word.length && current.isEnd ){
            return true;
        }
        
        if(word[level] === '.'){
            for(var j=0;j<26;j++){
                if(search( current.nodes[j], level+1 )){
                    return true;
                }
            }
            return false;
        } 
        var offset = 'a'.charCodeAt(0);
        var index = word[level].charCodeAt(0) - offset;
        return search(current.nodes[index], level+1);
    };
    return search(this.root, 0);
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = Object.create(WordDictionary).createNew()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

 //tags: Facebook
 