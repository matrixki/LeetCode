/*
Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times). However, you may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var localMin = prices[0];
    var localMax = 0;
    var profit = 0;
    for(var i=1;i<prices.length;i++){
        if( prices[i]-prices[i-1] < 0 && localMin < localMax ){
            profit += (localMax - localMin);
            localMin = prices[i];
            localMax = 0;
        }
        else{
            localMin = Math.min( localMin, prices[i] );
            if( (prices[i]-prices[i-1])>0 ){
                localMax = Math.max( localMax, prices[i] ); 
            }
                      
        }
        if( i === prices.length-1 && prices[i] - localMin > 0){
            profit += (prices[i] - localMin);           
        }
    }
    return profit;
};

// better solution
var maxProfit = function(prices) {
    var profit = 0;
    for(var i=0;i<prices.length-1;i++){
        if(prices[i+1]>prices[i]){
            profit += (prices[i+1]-prices[i]);
        }
    }
    return profit;
};

//tags: Adobe, Amazon, Facebook, Alibaba, Bloomberg, Microsoft
