/*
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"
Write the code that will take a string and make this conversion given a number of rows:

string convert(string text, int nRows);
convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".
*/


/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {

    // zigzag string pattern, only need to loop til numRows
    // pattern equal to "W" wave
    /*
        P       A       H       N
          A   P   L   S   I   I   G
            Y       I       R    
    */
    var result = '', pointer = 0, step = 2*numRows -2, distance = 0, addInstance = 0;
    if(numRows<=1){
        return s;
    }
    for( var i = 0; i<numRows ;i++ ){
        if( i%numRows === 0 ){
            pointer = 0;
            while( pointer < s.length ){
                result += s[pointer];
                pointer = pointer + numRows*2-2;
            }
        }
        else if( i%numRows === (numRows-1) ){
            pointer = numRows-1;
            while(pointer < s.length){
                result += s[pointer];
                pointer = pointer + numRows*2-2;                
            }
        }
        else{
            pointer = i%numRows;
            distance = 2*( i%numRows );
            while(pointer<s.length){
                result += s[pointer];
                addDistance = step - distance;
                pointer += addDistance;
                distance = step - distance;
            }
        }
    }
    return result;
};