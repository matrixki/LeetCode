/*
A binary watch has 4 LEDs on the top which represent the hours (0-11), and the 6 LEDs on the bottom represent the minutes (0-59).

Each LED represents a zero or one, with the least significant bit on the right.


For example, the above binary watch reads "3:25".

Given a non-negative integer n which represents the number of LEDs that are currently on, return all possible times the watch could represent.

Example:

Input: n = 1
Return: ["1:00", "2:00", "4:00", "8:00", "0:01", "0:02", "0:04", "0:08", "0:16", "0:32"]
Note:
The order of output does not matter.
The hour must not contain a leading zero, for example "01:00" is not valid, it should be "1:00".
The minute must be consist of two digits and may contain a leading zero, for example "10:2" is not valid, it should be "10:02".
*/

/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function(num) {
    if( num ===0 ){ return ["0:00"]; }
    var result = [];
    for( var i=0;i<12;i++ ){
        for(var j=0;j<60;j++){
            var biti = i.toString(2);
            var bitj = j.toString(2);
            var counti = 0, countj = 0;
            for(var k=0, li=biti.length;k<li;k++){
                if( biti[k] === '1' ){
                    counti++;
                }
            }
            for(var m=0, lj=bitj.length;m<lj;m++){
                if( bitj[m] === '1' ){
                    countj++;
                }
            }
            if( (counti + countj) === num ){
                var si = i.toString();
                var sj = j<10? "0"+j.toString() : j.toString();
                result.push(''+si+':'+sj+'');
            }
        }
    }
    return result;
};

//tags: Google