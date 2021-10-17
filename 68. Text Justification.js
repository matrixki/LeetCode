/*
Given an array of words and a width maxWidth, format the text such that each line has exactly maxWidth characters and is fully (left and right) justified.

You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces ' ' when necessary so that each line has exactly maxWidth characters.

Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line do not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.

For the last line of text, it should be left justified and no extra space is inserted between words.

Note:

A word is defined as a character sequence consisting of non-space characters only.
Each word's length is guaranteed to be greater than 0 and not exceed maxWidth.
The input array words contains at least one word.
Example 1:

Input:
words = ["This", "is", "an", "example", "of", "text", "justification."]
maxWidth = 16
Output:
[
   "This    is    an",
   "example  of text",
   "justification.  "
]
Example 2:

Input:
words = ["What","must","be","acknowledgment","shall","be"]
maxWidth = 16
Output:
[
  "What   must   be",
  "acknowledgment  ",
  "shall be        "
]
Explanation: Note that the last line is "shall be    " instead of "shall     be",
             because the last line must be left-justified instead of fully-justified.
             Note that the second line is also left-justified becase it contains only one word.
Example 3:

Input:
words = ["Science","is","what","we","understand","well","enough","to","explain",
         "to","a","computer.","Art","is","everything","else","we","do"]
maxWidth = 20
Output:
[
  "Science  is  what we",
  "understand      well",
  "enough to explain to",
  "a  computer.  Art is",
  "everything  else  we",
  "do                  "
]

tags: Google, Karat, Twilio, Uber, LinkedIn, Indeed, Facebook, Microsoft, Coursera, Intuit, Reddit, Oracle

*/

/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
 var fullJustify = function(words, maxWidth) {
    let count = 0, row = [], result = [];
    for(let i=0;i<words.length;i++){
        count += words[i].length;
        if(count>maxWidth){
            i--;
            count = 0;
            justify(row);
            row = [];
        }
        else{
            row.push(words[i]);    
            count++;
        }
    }
    // handle last row    
    if(row.length>0){
        leftAlign(row);
    }
    return result;
    
    function justify(words){
        const wordsCount = words.length;
        const wordsLen = words.reduce((prev, acc)=>{ return prev+acc.length}, 0);
        let spaces = maxWidth - wordsLen;
        let str = words[0];
        let totalPad = spaces;
        let pad = Math.floor(spaces/(wordsCount-1));
        let extraPad = totalPad - pad*(wordsCount-1);
        for(let i=1;i<words.length;i++){
            if(extraPad>0){
                str += (new Array(pad+1).fill(" ").join("") + words[i] );
                extraPad--;
            }
            else{
                str += (new Array(pad).fill(" ").join("") + words[i] );    
            }
        }
        if(str.length<maxWidth){
            str += new Array(maxWidth-str.length).fill(" ").join("");
        }
        result.push(str);
    }
    
    function leftAlign(words){
        let str = words[0];
        for(let i=1;i<words.length;i++){
            str += ` ${words[i]}`;
        }
        if(str.length < maxWidth){
            str += new Array(maxWidth-str.length).fill(" ").join("");
        }
        result.push(str);
    }
};

//tags: Linkedin, Google, Coursera, Snapchat, Airbnb
