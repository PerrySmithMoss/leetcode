/**
 * Kadane's Algorithm (Dynamic Programming)
 * Time O(N) | Space O(1)
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
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

/**
 * Sliding Window
 * Time O(N) | Space O(1)
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * @param {number[]} prices
 * @return {number}
 */
function maxProfitSlidingWindow(prices: number[]): number {
  if (!prices || prices.length <= 1) return 0;

  let [leftP, rightP, maxProfit] = [0, 1, 0];

  while (rightP < prices.length) {
    const canSlide = prices[rightP] <= prices[leftP];
    if (canSlide) leftP = rightP;

    const window = prices[rightP] - prices[leftP];

    maxProfit = Math.max(maxProfit, window);
    rightP++;
  }

  return maxProfit;
}
