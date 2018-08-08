/*
Design a class which receives a list of words in the constructor, and implements a method that takes two words word1 and word2 and return the shortest distance between these two words in the list. Your method will be called repeatedly many times with different parameters. 

Example:
Assume that words = ["practice", "makes", "perfect", "coding", "makes"].

Input: word1 = “coding”, word2 = “practice”
Output: 3
Input: word1 = "makes", word2 = "coding"
Output: 1
Note:
You may assume that word1 does not equal to word2, and word1 and word2 are both in the list.


*/

/**
 * @param {string[]} words
 */
var WordDistance = function(words) {
    this.lookup = new Map();
    for(var i=0, len=words.length;i<len;i++){
        var curr = words[i];
        if(this.lookup.has(curr)){
            var temp = this.lookup.get(curr);
            temp.push(i);
            this.lookup.set(curr, temp);
        }
        else{
            var temp = [i];
            this.lookup.set(curr, temp);
        }
    }
};

/** 
 * @param {string} word1 
 * @param {string} word2
 * @return {number}
 */
WordDistance.prototype.shortest = function(word1, word2) {
    var list1 = this.lookup.get(word1);
    var list2 = this.lookup.get(word2);
    var min = Number.MAX_SAFE_INTEGER;
    for(var i=0, j=0; i<list1.length && j<list2.length; ){
        var index1 = list1[i];
        var index2 = list2[j];
        if(index1<index2){
            min = Math.min(min, index2-index1);
            i++;
        }
        else{
            min = Math.min(min, index1-index2);
            j++
        }
    }
    return min;
};

/** 
 * Your WordDistance object will be instantiated and called as such:
 * var obj = Object.create(WordDistance).createNew(words)
 * var param_1 = obj.shortest(word1,word2)
 */


 //tags: Linkedin, Uber, Indeed 
 