/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
     // Using two pointers , l for buy and r to sell
    let l = 0;
    let r = 1;
    let max_profit = 0;

    while(r < prices.length){
        if(prices[l] < prices[r]) { // to sell the price should be more than the price you bought with to consider it as a profit
            max_profit = Math.max(max_profit, prices[r] - prices[l])
        } else {
            l = r;
        }
        r ++;
    }
    return max_profit;
};
