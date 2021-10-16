/*
Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times) with the following restrictions:

You may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).
After you sell your stock, you cannot buy stock on next day. (ie, cooldown 1 day)
Example:

Input: [1,2,3,0,2]
Output: 3 
Explanation: transactions = [buy, sell, cooldown, buy, sell]

tags: Adobe

*/

/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let rest = [], buy = [], sell = [];
    rest[0] = 0, buy[0] = -1*prices[0], sell[0] = Number.MIN_VALUE;
    for(let i=1;i<prices.length;i++){
        rest[i] = Math.max( rest[i-1], sell[i-1] );
        buy[i] = Math.max(rest[i-1]-prices[i], buy[i-1]);
        sell[i] = prices[i] + buy[i-1];
    }
    return Math.max(sell[prices.length-1], rest[prices.length-1]);
};

//tags: Alibaba, Google
