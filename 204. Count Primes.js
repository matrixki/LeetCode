/*
Count the number of prime numbers less than a non-negative number, n.

Credits:
Special thanks to @mithmatt for adding this problem and creating all test cases.
*/

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    if( n<3 ){ return 0; }

    var count = 0;
    var primeMap = new Array(n);
    for( var i=2;i<n;i++){
        if( primeMap[i] ){
            continue;
        }
        count++;
        for(var j=i;j<n;j=j+i){
            primeMap[j] = true;
        }
    }
    return count;
};

//tags: Microsoft, Amazon, Nvidia
