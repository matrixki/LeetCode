/*
Given an absolute path for a file (Unix-style), simplify it.

For example,
path = "/home/", => "/home"
path = "/a/./b/../../c/", => "/c"
click to show corner cases.

Corner Cases:
Did you consider the case where path = "/../"?
In this case, you should return "/".
Another corner case is the path might contain multiple slashes '/' together, such as "/home//foo/".
In this case, you should ignore redundant slashes and return "/home/foo".
*/

/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    var pathArr = [];
    var dirs = path.split('/');
    for( var i=0, len=dirs.length;i<len;i++ ){
        var current = dirs[i];
        if( current !== '' ){
            if( current === '.' ){
                continue;
            }
            else if( current === '..' ){
                pathArr.pop();
            }
            else{
                pathArr.push(current);
            }
        }
    }
    if(pathArr.length === 0){
        return '/';
    }
    var result = '';
    for( p of pathArr ){
        result = result + '/' + p;
    }
    return result;
};

//tags: Facebook, Microsoft
