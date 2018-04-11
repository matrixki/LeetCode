/*
Given a string containing only digits, restore it by returning all possible valid IP address combinations.

For example:
Given "25525511135",

return ["255.255.11.135", "255.255.111.35"]. (Order does not matter)
*/

/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    
    var result = [];
    var len = s.length;
    for(var i=0;i<4 && i<len-2;i++){
        for(var j=i+1;j<i+4 && j<len-1;j++){
            for(var k=j+1;k<j+4 && k<len;k++){
                var s1 = s.substring(0,i);
                var s2 = s.substring(i,j);
                var s3 = s.substring(j,k);
                var s4 = s.substring(k,len);
                if( isValid(s1) && isValid(s2) && isValid(s3) && isValid(s4)){
                    result.push(s1+'.'+s2+'.'+s3+'.'+s4);
                }
            }
        }     
    }
    return result;
    
    function isValid(s){
        if(s.length>3 || s.length===0 || (s[0]==='0'&&s.length>1) || parseInt(s)>255){
            return false;
        }
        return true;
    }
};

