## 121. Best Time to Buy and Sell Stock

You are given an array `prices` where `prices[i]` is the price of a given stock on the `ith` day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return `0`.

##### Example 1:

> **Input:** prices = [7,1,5,3,6,4]
> **Output:** 5
> **Explanation:** Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

##### Example 2:

> **Input:** prices = [7,6,4,3,1]
> **Output:** 0
> **Explanation:** In this case, no transactions are done and the max profit = 0.

###### Contraints:

- `1 <= prices.length <= 105`
- `0 <= prices[i] <= 104`

## Solution

If `prices` is falsy (aka does not exist) or the length of the `prices` array is less than or equal to 1 we know that we can only make a `profit` of 0, thus we return 0 as the `profit`. Otherwise, we define two variables, one called `minBuyPrice` and the other called `maxProfit`. The `minBuyPrice` will represent the minimum price that we can buy at, this is initially set to `Infinity` because this way we can guarantee the first element will be set to the buy price. The `maxProfit` variable will represent the maximum profit that can be made, initially set to 0 as we have not calculated any profit yet. Next, the function iterates over the `prices` array and within each iteration it will 1. calculate the `minBuyPrice` and 2. calculate the `maxProfit` that can be made. It calcualtes the `minBuyPrice` by using the in-built JavaScript method `Math.min`, which will compare the current `minBuyPrice` with the current element in the loop and return the smaller value of the two. It calcualtes the `maxProfit` by using the in-built JavaScript method `Math.max`, which will compare the current `maxProfit` with the current element in the loop minus the `minBuyPrice` and return the largest value of the two. Lastely, we simply return `maxProfit`, as this will be the max profit that was found in the `prices` array.

##### Complexity

- Time O(n)
- Space O(1)

##### Code

```javascript
/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices: number[]): number {
  if (!prices || prices.length <= 1) return 0;

  let minBuyPrice = Infinity;
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    minBuyPrice = Math.min(minBuyPrice, prices[i]);
    maxProfit = Math.max(maxProfit, prices[i] - minBuyPrice);
  }
  return maxProfit;
}
```
