/*
The API: int read4(char *buf) reads 4 characters at a time from a file.

The return value is the actual number of characters read. For example, it returns 3 if there is only 3 characters left in the file.

By using the read4 API, implement the function int read(char *buf, int n) that reads n characters from the file.

Note:
The read function will only be called once for each test case.
*/

/**
 * Definition for read4()
 * 
 * @param {character[]} buf Destination buffer
 * @return {number} The number of characters read
 * read4 = function(buf) {
 *     ...
 * };
 */

/**
 * @param {function} read4()
 * @return {function}
 */
var solution = function(read4) {
    /**
     * @param {character[]} buf Destination buffer
     * @param {number} n Number of characters to read
     * @return {number} The number of actual characters read
     */
    return function(buf, n) {
        let count = 0, eof = false;
        let temp = new Array(4);
        while( !eof && count < n ){
            let preRead = read4(temp);
            if(preRead<4){
                eof = true;
            }
            let toRead = Math.min( n-count, preRead );
            for(let i=0;i<toRead;i++){
                buf[count] = temp[i];
                count++;
            }
        }
        return count;
    };
};

//tags: Facebook, Google
